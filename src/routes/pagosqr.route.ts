import { Router } from 'express';
import { check } from 'express-validator';

import {
  getPagoQrq
} from '../controllers/pagosqr.controller';

import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:codigoPago', [
  check('codigoPago', 'el dato es Obligatorio').notEmpty(),
  validarCampos
], getPagoQrq);

export default router;
