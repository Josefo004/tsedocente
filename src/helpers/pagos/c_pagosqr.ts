import PagosQR from '../../models/tablasPagos/pagosqr';

export const pagoQr = async (codigoPago: string) => {
  const pagoQr = await PagosQR.findByPk(codigoPago);

  if (pagoQr === null) {
    return [];
  } else {
    return pagoQr;
  }
}
