import { DataTypes } from 'sequelize';
import { db5 } from '../../database/conexion';

const MateriasDocentes = db5.define('MateriasDocentes', {
  GestionAcademica: { type: DataTypes.STRING(6), primaryKey: true },
  CodigoModalidadCurso: { type: DataTypes.STRING(2), primaryKey: true },
  CodigoCarrera: { type: DataTypes.INTEGER, primaryKey: true },
  NumeroPlanEstudios: { type: DataTypes.INTEGER, primaryKey: true },
  SiglaMateria: { type: DataTypes.STRING(6), primaryKey: true },
  CodigoTipoGrupoMateria: { type: DataTypes.STRING(1), primaryKey: true },
  Grupo: { type: DataTypes.STRING(2), primaryKey: true },
  IdPersona: { type: DataTypes.STRING(15) },
  CodigoSEA: { type: DataTypes.STRING(1) },
  NumeroEstudiantesLimite: { type: DataTypes.INTEGER },
  NumeroEstudiantesProgramados: { type: DataTypes.INTEGER },
  NumeroParciales: { type: DataTypes.INTEGER },
  FechaPrimerParcial: { type: DataTypes.DATE },
  FechaSegundoParcial: { type: DataTypes.DATE },
  FechaTercerParcial: { type: DataTypes.DATE },
  FechaExamenFinal: { type: DataTypes.DATE },
  FechaSegundaInstancia: { type: DataTypes.DATE },
  FechaPracticasYLab: { type: DataTypes.DATE },
  CodigoUsuario: { type: DataTypes.STRING(3) },
  FechaHoraRegistro: { type: DataTypes.DATE },
  NumeroPracticas: { type: DataTypes.INTEGER },
  NumeroLaboratorios: { type: DataTypes.INTEGER },
  TransferidoCargaHoraria: { type: DataTypes.BOOLEAN },
  CodigoSede: { type: DataTypes.STRING(2) },
  DependenciaTeoria: { type: DataTypes.INTEGER },
  TipoLlenado: { type: DataTypes.INTEGER },
  CodigoUsuarioActualizacion: { type: DataTypes.STRING(3) },
  FechaActualizacion: { type: DataTypes.DATE }
}, {
  timestamps: false,
  tableName: 'MateriasDocentes'
});

export default MateriasDocentes;
