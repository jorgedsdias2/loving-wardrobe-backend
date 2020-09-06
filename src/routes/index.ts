import { Router } from 'express';
import sessionsRouter from './users/sessions.routes';
import passwordRouter from './users/password.routes';
import usersRouter from './users/users.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/users', usersRouter);

export default routes;
