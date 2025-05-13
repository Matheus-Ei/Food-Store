import { NextFunction, Request, Response } from "express";
import { Res } from "../utils/response";
import { sequelize } from "../core/database";

export const roleMiddleware =
  (role: string) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await sequelize.query(
        `
          SELECT id FROM users WHERE id = :userId AND role = :role
        `,
        {
          replacements: { role, userId: req.body.userId || req.params.userId },
        },
      );

      if (!user[0][0])
        throw new Error("You don't have the role to access this route");

      return next();
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
