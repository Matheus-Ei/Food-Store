import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const CupomsModel = sequelize.define(
  "cupoms",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    uses: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    timestamps: true,
  },
);

export default CupomsModel;
