import BaseModel from "../models/BaseModel";

// The order matters here
export const models = async () => {
  await BaseModel.sync({ force: true });
};
