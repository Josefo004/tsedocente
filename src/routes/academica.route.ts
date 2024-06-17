import { Router } from 'express';

import { guardarFormulario } from '../controllers/academica.controller';

const router = Router();

router.post('/', guardarFormulario);

export default router;
