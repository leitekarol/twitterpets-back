import * as UserController from "../controllers/user-controller.js";
import {validateRequest} from "../middleware/auth.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  getUser:{
    method: "GET",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.getUser,
  },
  
  updateUser:{
    method: "PUT",
    url:"/users/:id",
    preHandler: [validateRequest],
    handler: UserController.updateUser,
  },

};
