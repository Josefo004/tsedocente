import { Router } from 'express';

import { query } from 'express-validator';

import {
  getRecepcion
} from '../controllers/recepcion.controller';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/', [
  query('codigoPago', 'El parámetro Codigo de Pago debe  existir y tener mas de 12 caracteres').isLength({ min: 2 }),
  query('nroDocumento', 'El parámetro Nro Documento debe  existir y tener mas de 10 caracteres').isLength({ min: 2 }),
  query('fechaPago', 'El parámetro Fecha de Pago debe enviarse en fromato yyyy-mm-dd').isDate(),
  validarCampos
], getRecepcion);

export default router;
