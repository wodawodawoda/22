import { Router } from 'express';
import * as HomeController from '../controllers/home.controller';
import * as PostController from '../controllers/post.controller';

const router = new Router();

router.route('/posts').get(PostController.getPosts);


export default router;
