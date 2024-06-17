import { DataTypes } from 'sequelize';
import { db3 } from '../../database/conexion';

const Ordenes = db3.define('Ordenes', {
  IdOrden: { type: DataTypes.INTEGER, primaryKey: true },
  CodigoEstado: { type: DataTypes.CHAR(1) },
  TotalOrden: { type: DataTypes.FLOAT },
  CodigoUsuarioCreacion: { type: DataTypes.STRING(15) },
  FechaCreacion: { type: DataTypes.DATE },
  CodigoUsuarioActualizacion: { type: DataTypes.STRING(15) },
  FechaActualizacion: { type: DataTypes.DATEONLY },
  Observacion: { type: DataTypes.TEXT },
  Email: { type: DataTypes.STRING(100) },
  Celular: { type: DataTypes.STRING(15) },
  NombreCompleto: { type: DataTypes.STRING(500) },
  CostoComision: { type: DataTypes.FLOAT },
  CodigoPago: { type: DataTypes.STRING(20) }
}, {
  timestamps: false,
  tableName: 'Ordenes'
});

export default Ordenes;
