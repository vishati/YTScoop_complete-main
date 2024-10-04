# YTScoop

[YTScoop](https://ytscoop.vercel.app/) is a web application that allows users to download YouTube videos in MP4 or MP3 format. It uses the npm module `youtube-dl`, Node.js, Express, and the Vite framework of React. The application is deployed on Vercel.

## Features

- **Download YouTube Videos**: Download videos in MP4 or MP3 format by providing a YouTube link.
- **React with Vite** for the frontend.
- **Node.js and Express** for the backend.
- **youtube-dl** npm module for downloading YouTube videos.

## Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Project Structure

.
├── backend <br />
│ ├── controllers<br />
│ ├── routes<br />
│ ├── app.js<br />
│ └── config.js<br />
├── frontend<br />
│ ├── public<br />
│ ├── src<br />
│ ├── index.html<br />
│ └── vite.config.js<br />
└── README.md<br />


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd YTScoop
    ```

2. Install frontend dependencies:
    ```sh
    cd frontend
    yarn install
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    yarn install
    ```

4. Set up the environment variables:
    Create a `.env` file in the `backend` directory and add any necessary environment variables.

5. Run the frontend:
    ```sh
    cd frontend
    yarn dev
    ```

6. Run the backend:
    ```sh
    cd backend
    node app.js
    ```

## Usage

1. Open the application in your browser.
2. Enter the link to the YouTube video you want to download.
3. Choose the format (MP4 or MP3) and download the video.

## Deployment

This project is deployed on Vercel. You can access it [here](https://ytscoop.vercel.app/).

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## Contact

For any inquiries, please reach out to [hadityakumar](https://www.linkedin.com/in/hadityakumar/).

---
