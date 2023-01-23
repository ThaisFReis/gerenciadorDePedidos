import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

//Configure the app to use json
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});