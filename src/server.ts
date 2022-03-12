
import express from 'express';
import { importTests } from './tests/import-test';


importTests();
const app = express()
const PORT: string|number = process.env.PORT || 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}


app.get('/', (_req, res) => {
  res.send("Hello!");
});

app.get('/example', (_req, res) => {
  res.send("example");
});