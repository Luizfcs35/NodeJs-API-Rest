import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

// get /users;
// get /users/:uuid;
// put /users/:uuid;
// delete /users/:uuid;

// SISTEMA CRUD
const usersRoute = Router(); // conf de rotas

usersRoute.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
  }
);

usersRoute.get(
  "/users/:uuid",
  async function (req: Request<{ uuid: string; }>, res: Response, next: NextFunction) {
    try{
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    res.status(StatusCodes.OK).send(user);
    } catch (error) {
      next(error);
    }
  }
    
);

usersRoute.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    const uuid = await userRepository.createUser(newUser);

    res.status(StatusCodes.CREATED).send();
  }
);

usersRoute.put(
  "/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    
    modifiedUser.uuid = uuid;

    await userRepository.updateUser(modifiedUser);

    res.status(StatusCodes.OK).send();
  }
);

usersRoute.delete(
  "/users/:uuid", async (req: Request<{ uuid: string; }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    await userRepository.remove(uuid);

    res.status(StatusCodes.NO_CONTENT).end("user deleted!");
  }
);

export default usersRoute;
