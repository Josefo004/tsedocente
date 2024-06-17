import { Request, Response } from 'express';
import { ultimaComision, insertComision } from '../helpers/pagos/c_comision';

export const getUltimaComision = async (req:Request, res:Response) => {
  const comision = await ultimaComision();
  // console.log(comision);

  res.status(200).json({
    comision
  });
}

export const postNuevaComision = async (req: Request, res: Response) => {
  const { nuevoCosto } = req.body;
  console.log('Nuevo Costo ', nuevoCosto);

  const resultado = await insertComision(nuevoCosto);
  console.log('resultado', resultado);

  const estado = resultado.length > 0 ? 200 : 400;

  res.status(estado).json(
    resultado
  );
}
