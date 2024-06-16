import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import videos from '../data/videos.js'; // Adjust the path as needed

// Function to get the directory name in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Post a new video
// @route   POST /api/videos
// @access  Private
const addVideo = (async (req, res) => {
    const { user_id, description, video_url, title } = req.body;
  
    if (!user_id || !description || !video_url || !title) {
      res.status(400);
      throw new Error('Missing input');
    }

    // Create new video object
    const newVideo = {
        user_id,
        description,
        video_url,
        title
    };

    // Add the new video to the existing videos array
    videos.push(newVideo);

    // Define the path to the videos.js file
    const filePath = path.join(__dirname, '../data/videos.js');

    // Convert the videos array to a string and format it
    const fileContent = `const videos = ${JSON.stringify(videos, null, 4)};\n\nexport default videos;`;

    // Write the updated content back to the file
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            res.status(500);
            throw new Error(err);
        }
  
        res.status(201).json("Video Added succesfully");
    });
})

// @desc    Get all videos
// @route   GET /api/videos
// @access  Private
const getVideos = (async (req, res) => {
    
});

// @desc    Edit video
// @route   PUT /api/videos
// @access  Public
const editVideo = (async (req, res) => {
    
});

// @desc    Get a video
// @route   GET /api/videos/single
// @access  Public
const getVideo = (async (req, res) => {
    
});

// @desc    Post a comment
// @route   POST /api/videos/comments
// @access  Public
const commentVideo = (async (req, res) => {
    
});

// @desc    Get comments of a video
// @route   GET /api/videos/comments
// @access  Public
const getComments = (async (req, res) => {
    
});

export {
    addVideo,
    getVideos,
    editVideo,
    getVideo,
    commentVideo,
    getComments
}