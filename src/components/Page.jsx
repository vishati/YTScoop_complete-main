import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.png'

const Page = () => {
    const [url, setUrl] = useState('');
    const [format, setFormat] = useState('mp4');
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        if (url === '') {
            toast.error('Enter a URL');
            return;
        }

        try {
            setIsDownloading(true);

            const response = await axios.get(`http://localhost:4000/download`, {
                params: { url, format },
                responseType: 'blob',
            });

            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            if (format === 'mp4') {
                link.setAttribute('download', 'video.mp4');
            } else {
                link.setAttribute('download', 'audio.mp3');
            }

            document.body.appendChild(link);
            link.click();
            link.remove();
            toast.success('Video is being downloaded...');
            setIsDownloading(false);
        } catch (error) {
            console.error("Error in downloading Video: ", error);
            toast.error('Not a Valid URL');
            setIsDownloading(false);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container font-mono min-h-[100vh]">
                

                <div className='flex flex-col justify-center items-center p-2'>
                    <div className='flex py-2 my-2'>
                    <img src={logo} alt="logo" className='md:size-24 size-16' />
                    <h1 className='text-center text-white font-bold text-2xl md:text-5xl text-pretty py-2 my-2'>YTScoop</h1>
                    </div>
                
                    
                    <p className='text-center text-white p-1 m-1 text-lg md:text-2xl text-pretty'>YTScoop is a website to download YouTube Videos in mp4 or mp3 format for free.</p>
                    <p className='text-center text-pretty text-white p-1 text-lg'>(Just paste the URL of the YouTube video you want to download and click on the download button.)</p>
                </div>

                <div className='flex justify-center gap-1 m-2 md:m-8 md:gap-5'>
                    <input
                        placeholder='Paste the URL'
                        type="url"
                        className='relative inline-flex items-center justify-center overflow-hidden font-medium group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-full text-md px-3 py-5 w-[50%] placeholder-gray-200 md:text-xl'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="relative inline-flex items-center justify-center overflow-hidden font-medium group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-full px-5 md:text-xl text-md appearance-none"
                    >
                        <option className='bg-black text-white' value="mp4">VIDEO-MP4</option>
                        <option className='bg-black text-white' value="mp3">AUDIO-MP3</option>
                    </select>
                </div>

                <div className='flex justify-center m-5 p-3'>
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className='flex w-fit bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-lg md:text-2xl uppercase font-bold shadow-md mx-auto p-5 mb-2 rounded-3xl hover:rounded-xl transition-all ease-linear duration-100'
                    >
                        <div className="flex sm:flex-cols-12 md:gap-6 gap-3">
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                </svg>
                            </div>
                            <div className="col-span-2 pt-1.5">{isDownloading ? 'Downloading...' : 'Download'}</div>
                        </div>
                    </button>
                </div>

                <div className='flex flex-col items-center justify-end mt-20 text-white pb-20'>
                    <h2 className='p-2'>How to download YouTube Videos?</h2>
                    <ul>
                        <li>1) Copy the URL of the YouTube video you want to download.</li>
                        <li>2) Paste the URL in the input box above and click on the download button.</li>
                        <li>3) Choose the format in which you want to download the video.</li>
                        <li>4) Click on the download button to start the download.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Page;
