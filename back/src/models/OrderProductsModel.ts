import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const OrderProductsModel = sequelize.define(
  "order_products",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        key: "id",
        model: "orders",
      },
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "SET NULL",
      references: {
        key: "id",
        model: "products",
      },
    },
  },

  {
    timestamps: true,
  },
);

export default OrderProductsModel;
