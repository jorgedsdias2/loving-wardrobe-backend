import { Router } from 'express';
import sessionsRouter from './users/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);

export default routes;
