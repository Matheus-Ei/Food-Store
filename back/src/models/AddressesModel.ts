import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const AddressesModel = sequelize.define(
  "addresses",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    zipCode: {
      field: "zip_code",
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      field: "user_id",
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        key: "id",
        model: "users",
      },
    },
  },

  {
    timestamps: true,
  },
);

export default AddressesModel;
