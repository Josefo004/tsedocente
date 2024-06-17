
import Comision from '../../models/tablasPagos/comision';

export const ultimaComision = async () => {
  const ultimo = await Comision.findOne({
    order: [['FechaHoraRegistro', 'DESC']]
  });

  console.log(ultimo);

  return ultimo;
}

export const insertComision = async (nc:number) => {
  try {
    // const existeCosto = await Comision.findOne({
    //   where: { CostoComision: nc }
    // });
    // console.log('existeCosto', existeCosto);
    // if (existeCosto !== null) {
    //   console.log(nc, 'ya existe');
    //   return [];
    // }
    const nuevaComision = await Comision.create({ CostoComision: nc });
    await nuevaComision.save();
    return [nuevaComision];
  } catch (error) {
    console.log(error);
    return [];
  }
}

// export const insertDeposito = async (ddd: Tdeposito) => {
//   try {
//     const nuevoDeposito = await Depositos.create({ ddd });
//     await nuevoDeposito.save();
//     return [nuevoDeposito];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }
