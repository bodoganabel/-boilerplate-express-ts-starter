import express from 'express';
import { questions } from './cli';
import inquirer from 'inquirer'

const app = express()
const PORT: string | number = process.env.PORT || 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error:any) {
  console.error(`Error occured: ${error.message}`);
}


app.get('/', (req, res) => {
  res.send("Hello!");
});

app.get('/example', (req, res) => {
  res.send("example");
});

async function cli() {
  await inquirer.prompt(questions).then((answers: any) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
  await cli();
}

cli();