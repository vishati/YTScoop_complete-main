import express from 'express';
import ytdl from 'ytdl-core';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;
    const format = req.query.format;

    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid YouTube URL');
    }
    
    let title = (format === 'mp3') ? 'audio' : 'video';
    res.header('Content-Disposition', `attachment; filename="${title}.${format}"`);

    const options = format === 'mp3' ? { filter: 'audioonly' } : {};
    ytdl(videoURL, options).pipe(res);

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});