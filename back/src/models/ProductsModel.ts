import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";
import CategoriesModel from "./CategoriesModel";

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
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    categoryId: {
      field: "category_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        key: "id",
        model: CategoriesModel,
      },
    },
  },

  {
    timestamps: true,
  },
);

export default ProductsModel;
