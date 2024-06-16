


// @desc    Post a new video
// @route   POST /api/videos
// @access  Private
const addVideo = (async (req, res) => {
    const { user_id, description, video_url, title } = req.body;
  
    if (!user_id || !description || !video_url || !title) {
      res.status(400);
      throw new Error('Missing input');
    } else {
  
  
      res.status(201).json("Video Added succesfully");
    }
});

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