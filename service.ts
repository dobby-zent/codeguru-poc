import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  const greeting = `Hello! The current time is ${currentTime}.`;

  return res.status(200).send(greeting);
};

export const health = (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();

  const serviceStatus = {
    time: currentTime,
    state: "healthy",
  };

  return res.status(200).json(serviceStatus);
};

export const additionalTask = (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  const resultOfAdditionalTask = performAdditionalTask();

  const resultObject = {
    time: currentTime,
    additionalTaskResult: resultOfAdditionalTask,
  };

  return res.status(200).json(resultObject);
};

const performAdditionalTask = () => {
  return Math.floor(Math.random() * 100);
};
