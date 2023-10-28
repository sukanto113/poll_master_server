import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {sum} from './src/sum';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running");
});

app.get('/sum', (req: Request, res: Response) => {
  let a:number= Number(req.query.a);
  let b:number = Number(req.query.b);

  res.send(`sum is ${sum(a,b)}`);
});

app.listen(port, ()=> {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});