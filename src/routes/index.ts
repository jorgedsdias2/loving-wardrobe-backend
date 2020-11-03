import { Router } from 'express';
import combosRouter from './combos/combos.routes';
import sessionsRouter from './users/sessions.routes';
import passwordRouter from './users/password.routes';
import usersRouter from './users/users.routes';

const routes = Router();

routes.use('/combos', combosRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/users', usersRouter);

export default routes;
