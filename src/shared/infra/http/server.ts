import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'hello world' });
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('🚀️ Server started on port 8080!');
});
