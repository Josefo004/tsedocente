import { DataTypes } from 'sequelize';
import { db3 } from '../../database/conexion';

const DetalleOrdenes = db3.define('DetalleOrdenes', {
  IdDetalleOrden: { type: DataTypes.INTEGER, primaryKey: true },
  IdOrden: { type: DataTypes.INTEGER },
  IdProducto: { type: DataTypes.INTEGER },
  IdProductoTalla: { type: DataTypes.INTEGER },
  Talla: { type: DataTypes.STRING(100) },
  CodigoProducto: { type: DataTypes.STRING(10) },
  ProductoPara: { type: DataTypes.STRING(100) },
  NombreProducto: { type: DataTypes.STRING(100) },
  Precio: { type: DataTypes.FLOAT },
  Cantidad: { type: DataTypes.INTEGER },
  Total: { type: DataTypes.FLOAT },
  FechaRegistro: { type: DataTypes.DATE }
}, {
  timestamps: false,
  tableName: 'DetalleOrdenes'
});

export default DetalleOrdenes;
