import { DataTypes } from 'sequelize';
import { db4 } from '../../database/conexion';

const Depositos = db4.define('Depositos', {
  NroDocumento: { type: DataTypes.STRING(30) },
  gestion: { type: DataTypes.TINYINT },
  FechaDepositoBancario: { type: DataTypes.DATEONLY },
  TipoCuenta: { type: DataTypes.INTEGER },
  Monto: { type: DataTypes.FLOAT },
  CodigoEstado: { type: DataTypes.CHAR(1) },
  CodigoUsuario: { type: DataTypes.CHAR(3) },
  FechaHoraRegistro: { type: DataTypes.DATE },
  CodigoTipoTransaccion: { type: DataTypes.CHAR(1) },
  Observaciones: { type: DataTypes.STRING(500) },
  CodigoPago: { type: DataTypes.STRING(20) },
  CostoComision: { type: DataTypes.FLOAT }
}, {
  timestamps: false,
  tableName: 'Depositos'
});

export default Depositos;
