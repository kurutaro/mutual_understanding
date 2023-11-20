const express = require('express');
const database = require('./knex');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//React 側からこのエンドポイントにアクセスする
app.get('/', (req, res) => res.send('サーバーが実行中です！！！'));
app.get('/api', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('books')
    .select()
    .then((result) => {
      res.json(result);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
