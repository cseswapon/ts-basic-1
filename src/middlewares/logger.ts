import express, { Request, Response, Application, NextFunction } from "express";

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
