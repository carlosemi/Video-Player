import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    video_url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Video = mongoose.model('Video', videoSchema);

export default Video;