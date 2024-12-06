const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Wellcome to Stock portfolio analiysic API.');
});
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let totalReturn = (marketPrice - boughtAt) * 2;

  res.status(200).send(totalReturn.toString());
});
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.status(200).send(totalReturns.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let result = (returns / boughtAt) * 100;
  res.status(200).send(result.toString());
});

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let results;
  if (returnPercentage > 0) {
    results = 'Profit';
  } else {
    results = 'Loss';
  }
  res.status(200).send(results);
});
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = stock1 + stock2 + stock3 + stock4;
  res.status(200).send(result.toString());
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
