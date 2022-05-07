import {Router} from "express";
import UserController from "../controllers/UserController";

const router: Router = Router();

router.post("/", UserController.createUser);
router.put("/:userId", UserController.updateUser);
router.get("/:userId", UserController.findUserById);
router.delete("/:userId", UserController.findUserByIdAndDelete);

export default router;
