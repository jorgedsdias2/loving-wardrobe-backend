import { Router } from 'express';

import CombosController from '@controllers/combos/CombosController';

const combosRouter = Router();
const combosController = new CombosController();

combosRouter.get('/', combosController.index);

export default combosRouter;
