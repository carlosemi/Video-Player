import Video from '../models/videoModel.js'
import User from '../models/userModel.js'


// @desc    Post a new video
// @route   POST /api/videos
// @access  Private
const addVideo = (async (req, res) => {
    const { user_id, description, video_url, title } = req.body;
  
    if (!user_id || !description || !video_url || !title) {
      res.status(400);
      throw new Error('Missing input');
    } 

    try {
        // Validate the user
        const user = await User.findOne({ user_id });

        if (!user) {
            const newUser = new User({
                user_id: user_id
            })

            const createdUser = await newUser.save()

            // Create a new video
            const video = new Video({
                user: createdUser._id, // Reference to the user's ObjectId
                description,
                video_url,
                title
            });

            // Save the video to the database
            const createdVideo = await video.save();

            res.status(201).json(createdVideo);
        }
        else{

            // Create a new video
            const video = new Video({
                user: user._id, // Reference to the user's ObjectId
                description,
                video_url,
                title
            });

            // Save the video to the database
            const createdVideo = await video.save();

            res.status(201).json(createdVideo);

        }

        
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
})

// @desc    Get User videos
// @route   GET /api/videos
// @access  Private
const getVideos = (async (req, res) => {

    const {user_id} = req.body

    if(!user_id){
        res.status(400)
        throw new Error('No user_id');
    }

    try {

        // Validate the user
        const user = await User.findOne({ user_id });

        if (!user) {
            res.status(400)
        }
        
        // Find videos for the user
        const videos = await Video.find({ user: user._id });

        res.json(videos);
        
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
    
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

    const video_id = req.params.video_id

    if(!video_id){
        res.status(400)
        throw new Error('No video_id');
    }

    try {

        // Validate the user
        const video = await Video.findOne({ _id: video_id });

        if (!video) {
            res.status(400)
        }

        res.json(video);
        
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
    
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