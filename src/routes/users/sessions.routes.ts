import { Router } from 'express';
import SessionsController from '../../controllers/users/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get('/', sessionsController.index);

export default sessionsRouter;
