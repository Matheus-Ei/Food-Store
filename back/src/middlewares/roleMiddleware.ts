import { NextFunction, Request, Response } from "express";
import { Res } from "../utils/response";
import { sequelize } from "../core/database";
import jwt from "jsonwebtoken";
import { ENV } from "../core/enviroment";

export const roleMiddleware = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization as string;
      const stringToken = token.split(" ")[1];

      const decoded = jwt.verify(stringToken, ENV.ACCESS_SECRET as string) as {
        id: string;
      };

      const user = await sequelize.query(
        `SELECT id FROM users WHERE id = :userId AND role IN (:roles)`,
        {
          replacements: {
            roles,
            userId: req.body.userId || req.params.userId || decoded.id,
          },
        },
      );

      if (!user[0][0]) return Res.sendByType(res, "unauthorized", undefined);

      return next();
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
};
