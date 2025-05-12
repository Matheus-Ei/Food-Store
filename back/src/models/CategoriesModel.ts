import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const CategoriesModel = sequelize.define(
  "categories",

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
  },

  {
    timestamps: true,
  },
);

export default CategoriesModel;
