import { Router } from 'express'
import { createUser } from './controllers/usersController';
import { createVideo, ListVideos } from './controllers/videosController';

export const routes = Router();

routes.post('/users', createUser);

routes.post('/videos', createVideo);

routes.get('/videos', ListVideos);
