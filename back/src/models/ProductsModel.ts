import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const ProductsModel = sequelize.define(
  "products",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    image: {
      type: DataTypes.TEXT,
    },

    description: {
      type: DataTypes.TEXT,
    },

    categoryId: {
      field: "category_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        key: "id",
        model: "categories",
      },
    },
  },

  {
    timestamps: true,
  },
);

export default ProductsModel;
