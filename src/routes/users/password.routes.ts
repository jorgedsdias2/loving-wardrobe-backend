import { Router } from 'express';

import ForgotPasswordController from '@controllers/users/ForgotPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);

export default passwordRouter;
