// import { DataTypes } from 'sequelize';
// import { db3 } from '../../database/conexion';

// const ProductoTallas = db3.define('ProductoTallas', {
//   IdProductoTalla: { type: DataTypes.INTEGER, primaryKey: true },
//   IdProducto: { type: DataTypes.INTEGER },
//   IdTalla: { type: DataTypes.INTEGER },
//   Cantidad: { type: DataTypes.INTEGER },
//   FechaCreacion: { type: DataTypes.DATE },
//   FechaModificacion: { type: DataTypes.DATE },
//   CantidadVendida: { type: DataTypes.INTEGER }
// }, {
//   timestamps: false,
//   tableName: 'ProductoTallas'
// });

// export default ProductoTallas;
import { DataTypes, Model, Optional } from 'sequelize';
import { db3 } from '../../database/conexion';

// Define las propiedades del modelo
interface ProductoTallasAttributes {
  IdProductoTalla: number;
  IdProducto: number;
  IdTalla: number;
  Cantidad: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  CantidadVendida: number;
}

// Define los atributos opcionales
interface ProductoTallasCreationAttributes extends Optional<ProductoTallasAttributes, 'IdProductoTalla'> {}

// Define el modelo
class ProductoTallas extends Model<ProductoTallasAttributes, ProductoTallasCreationAttributes>
  implements ProductoTallasAttributes {
  public IdProductoTalla!: number;
  public IdProducto!: number;
  public IdTalla!: number;
  public Cantidad!: number;
  public FechaCreacion!: Date;
  public FechaModificacion!: Date;
  public CantidadVendida!: number;

  // Aquí puedes agregar métodos personalizados o configuraciones adicionales si es necesario
}

// Inicializa el modelo con los atributos y opciones definidos
ProductoTallas.init(
  {
    IdProductoTalla: { type: DataTypes.INTEGER, primaryKey: true },
    IdProducto: { type: DataTypes.INTEGER },
    IdTalla: { type: DataTypes.INTEGER },
    Cantidad: { type: DataTypes.INTEGER },
    FechaCreacion: { type: DataTypes.DATE },
    FechaModificacion: { type: DataTypes.DATE },
    CantidadVendida: { type: DataTypes.INTEGER }
  },
  {
    timestamps: false,
    tableName: 'ProductoTallas',
    sequelize: db3 // Asociación con la instancia de Sequelize
  }
);

export default ProductoTallas;
