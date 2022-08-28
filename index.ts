import express, {Express, Request, Response} from 'express';

const app :Express = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Typescript + Express JS")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})