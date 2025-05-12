import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

const OrdersModel = sequelize.define(
  "orders",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    discount: {
      type: DataTypes.STRING,
    },

    custumerUserId: {
      type: DataTypes.INTEGER,
      field: "custumer_user_id",
      allowNull: false,
      onDelete: "SET NULL",
      references: {
        key: "id",
        model: "users",
      },
    },

    deliverUserId: {
      type: DataTypes.INTEGER,
      field: "deliver_user_id",
      onDelete: "SET NULL",
      references: {
        key: "id",
        model: "users",
      },
    },

    addressId: {
      type: DataTypes.INTEGER,
      field: "address_id",
      allowNull: false,
      references: {
        key: "id",
        model: "address",
      },
    },

    paymentId: {
      type: DataTypes.INTEGER,
      field: "payment_id",
      allowNull: false,
      references: {
        key: "id",
        model: "payments",
      },
    },

    cupomId: {
      type: DataTypes.INTEGER,
      field: "cupom_id",
      allowNull: false,
      references: {
        key: "id",
        model: "cupoms",
      },
    },
  },

  {
    timestamps: true,
  },
);

export default OrdersModel;
