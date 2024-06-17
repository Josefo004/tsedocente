import { DataTypes } from 'sequelize';
import { db4 } from '../../database/conexion';

const PagosQR = db4.define('PagosQR', {
  CodigoPago: { type: DataTypes.STRING(20), primaryKey: true },
  DetalleItemsJSON: { type: DataTypes.TEXT },
  Monto: { type: DataTypes.STRING(20) },
  Moneda: { type: DataTypes.CHAR(3) },
  Referencia: { type: DataTypes.STRING(60) },
  NombreCompleto: { type: DataTypes.TEXT },
  Validez: { type: DataTypes.CHAR(1) },
  FechaCreacionQR: { type: DataTypes.DATE },
  IdCodigoQR: { type: DataTypes.STRING(25) },
  ImagenQR: { type: DataTypes.TEXT },
  CodigoEstado: { type: DataTypes.CHAR(1) },
  RecepcionoSistema: { type: DataTypes.BOOLEAN },
  FechaHoraRegistro: { type: DataTypes.DATE },
  FechaPagoQr: { type: DataTypes.DATEONLY },
  NroDocumentoPago: { type: DataTypes.STRING(50) },
  UrlPago: { type: DataTypes.TEXT },
  FechaVigencia: { type: DataTypes.DATEONLY },
  CodigoTipoTransaccion: { type: DataTypes.CHAR(1) }
}, {
  timestamps: false,
  tableName: 'PagosQR'
});

export default PagosQR;
