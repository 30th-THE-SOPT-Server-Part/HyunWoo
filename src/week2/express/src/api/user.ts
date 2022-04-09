import express, {Router} from "express";

const router: Router = express.Router();

router.get("/", ((req, res) => {
    return res.status(200).json({
        message: "유저 조회 성공",
        status: 200
    })
}))

module.exports = router;
