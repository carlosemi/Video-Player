import express from 'express';

const router = express.Router();
import {
    addVideo,
    getVideos,
    editVideo,
    getVideo,
    commentVideo,
    getComments
} from '../controllers/videoController.js';

router.route('/').post(addVideo).get(getVideos).put(editVideo);
router.route('/single').get(getVideo);
router.route('/comments').post(commentVideo).get(getComments)


export default router;

