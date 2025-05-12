import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const UsersModel = sequelize.define(
  "users",

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

    phone: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cart: {
      type: DataTypes.JSONB,
    },

    recuperation: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: true,
  },
);

export default UsersModel;
