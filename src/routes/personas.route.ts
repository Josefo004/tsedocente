import { Router } from 'express';
import { check } from 'express-validator';

import {
  getPersonas
} from '../controllers/personas.controller';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:idPersona', [
  check('idPersona', 'La solicitud debe tener mas de 6 caracteres').isLength({ min: 7 }),
  validarCampos
], getPersonas);

export default router;
