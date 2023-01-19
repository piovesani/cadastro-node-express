import { Router } from 'express';

import * as HomeController from '../controllers/homeController';

const router = Router();

router.get('/', HomeController.home);
router.post('/newUser', HomeController.CreateNewUser);

export default router;