const express = require('express');
const database = require('./data/knex');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//React 側からこのエンドポイントにアクセスする
// app.get('/', (req, res) => {
//   res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
//   res.send('サーバーが実行中です！！！');
// });
app.get('/api/team', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('team')
    .select()
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/team/:id', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('team')
    .select()
    .where('id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/users', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('users')
    .select()
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/users/:id', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('users')
    .select()
    .where('id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/team/:id/users', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('users')
    .select()
    .where('team_id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/social_style/users/:id/', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:5173' });
  database('social_style')
    .select()
    .where('user_id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
