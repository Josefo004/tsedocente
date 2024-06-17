import { Router } from 'express';
import { check } from 'express-validator';

import {
  getUltimaComision, postNuevaComision
} from '../controllers/comision.controller';

import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/', getUltimaComision);

router.post('/', [
  check('nuevoCosto', 'el dato es Obligatorio').notEmpty(),
  check('nuevoCosto', 'el dato debe ser Numero').isNumeric(),
  validarCampos
], postNuevaComision);

export default router;
