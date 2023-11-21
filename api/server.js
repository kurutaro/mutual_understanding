const express = require('express');
const database = require('./data/knex');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../vite-project', 'dist')));

// app.use(
//   '/',
//   express.static(
//     '/Users/user/Documents/DEV/BTC_2023/ロール別トレーニング/solo_project/mutual_understanding/vite-project/dist'
//   )
// );

app.get('/api/team', (req, res) => {
  database('team')
    .select()
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/team/:id', (req, res) => {
  database('team')
    .select()
    .where('id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/users', (req, res) => {
  database('users')
    .select()
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/users/:id', (req, res) => {
  database('users')
    .select()
    .where('id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.post('/api/users/new', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  database('users')
    .insert({ first_name, last_name, email, password })
    .returning('*')
    .then((item) => {
      res.json(item);
    })
    .catch((err) =>
      res.status(400).json({
        dbError: 'error',
      })
    );
});

app.get('/api/team/:id/users', (req, res) => {
  database('users')
    .select()
    .where('team_id', req.params.id)
    .then((result) => {
      res.status(200);
      res.json(result);
    });
});

app.get('/api/social_style/users/:id/', (req, res) => {
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
