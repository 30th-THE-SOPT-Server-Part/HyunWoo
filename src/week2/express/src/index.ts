import express, {NextFunction, Request, Response} from "express";

const app = express();

app.use(express.json())

app.use("/api", require("./api"))
/*
* /api 입력 받으면 ./api 폴더로 슉
* ./api 폴더의 index.ts 보면 ./user로 가라는 것 있을텐데
* 그땐 user.ts 파일로 분기됨
* */


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hi! This is my first express server");
});

app.listen("8000", () => {
    // tslint:disable-next-line:no-console
    console.log(`
        ########################################
            SERVER LISTENING on PORT: 8080
        ########################################
    `)
})
