import { Request, Response } from 'express';
// import { ultimaComision, insertComision } from '../helpers/pagos/c_comision';

export const guardarFormulario = (req:Request, res:Response) => {
  const cuerpo = req.body;
  console.log(cuerpo);

  res.status(200).json(
    // msg:"kse",
    cuerpo
  );
}
