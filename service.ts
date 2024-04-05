import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  return res.status(200).send("hello world");
};

export const health = (req: Request, res: Response) => {
  return res.status(200).json({ state: "healthy" });
};
