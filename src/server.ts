import express from 'express';
import { routes } from './routes/routes';

const port = process.env.PORT || 3333;
const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running 🚀`));
