import Ordenes from '../../models/tablasEcommerce/ordenes';
import DetalleOrdenes from '../../models/tablasEcommerce/detalleOrdenes';
import ProductoTallas from '../../models/tablasEcommerce/productoTallas';
import { tOrden, tDetalleOrden } from '../../interfaces/pre_res.interface';

export const obtenerOrden = async (CodigoPago: string | any): Promise<tOrden | any> => {
  const orden = await Ordenes.findOne({
    where: { CodigoPago }
  });

  return orden;
}

export const obtenerDetallesOrden = async (IdOrden: string): Promise<tDetalleOrden[] | any> => {
  const detalles = await DetalleOrdenes.findAll({
    attributes: ['IdOrden', 'IdProductoTalla', 'Cantidad'],
    where: { IdOrden }
  });

  return detalles;
}

export const actualizarProductoTalla = async (IdProductoTalla: number, Cantidad: number) => {
  const protalla = await ProductoTallas.findOne({
    where: { IdProductoTalla }
  });
  console.log(protalla);

  if (protalla !== null) {
    protalla.Cantidad = protalla.CantidadVendida + Cantidad;
    await protalla.save();
  }
  return protalla;
}
