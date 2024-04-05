import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  var result: number = 0;

  const recurAddValue = (offset: number): void => {
    if (offset === 0) {
      return;
    }

    result += 1;
    return recurAddValue(offset - 1);
  };

  recurAddValue(100);
  recurAddValue(100);
  recurAddValue(100);
  recurAddValue(100);
  recurAddValue(100);
  recurAddValue(100);

  return res.status(200).send(`${result}`);
};

export const health = (req: Request, res: Response) => {
  return res.status(200).json({ state: "healthy" });
};
