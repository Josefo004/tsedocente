import { DataTypes } from 'sequelize';
import { db4 } from '../../database/conexion';

const Comision = db4.define('Comision', {
  IdComision: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  FechaHoraRegistro: { type: DataTypes.DATE },
  CostoComision: { type: DataTypes.FLOAT }
}, {
  timestamps: false,
  tableName: 'Comision'
});

export default Comision;
