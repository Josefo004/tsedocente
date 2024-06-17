import { Request, Response } from 'express';
import { pagoQr } from '../helpers/pagos/c_pagosqr';

export const getPagoQrq = async (req:Request, res:Response) => {
  const { codigoPago } = req.params;
  const pago = await pagoQr(codigoPago);

  res.status(200).json({
    pago
  });
}
