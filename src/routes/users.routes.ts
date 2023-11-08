import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

// get /users;
// get /users/:uuid;
// put /users/:uuid;
// delete /users/:uuid;

// SISTEMA CRUD
const usersRoute = Router(); // conf de rotas

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "luiz" }];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    res.status(StatusCodes.OK).send({ modifiedUser });
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.NO_CONTENT).end("user delete!");
  }
);

export default usersRoute;
