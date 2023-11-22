const express = require('express');
const database = require('./data/knex');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.json());

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

app.get('/api/team/:id/users', (req, res) => {
  database('users')
    .select()
    .where('team_id', req.params.id)
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

app.post('/api/users/:id/type/new', (req, res) => {
  const {
    user_id,
    question_pace,
    question_between,
    question_ending,
    question_volume,
    question_first,
    question_conclusion,
    question_opinion,
    question_sight,
    question_Immediate,
    question_facial,
    question_intonation,
    question_gesture,
    question_atmosphere,
    question_word_usage,
    question_good_at,
    question_first_meeting,
    question_play,
    question_feeling_face,
  } = req.body;

  database('social_style')
    .insert({
      user_id: user_id,
      question_pace: question_pace,
      question_between: question_between,
      question_ending: question_ending,
      question_volume: question_volume,
      question_first: question_first,
      question_conclusion: question_conclusion,
      question_opinion: question_opinion,
      question_sight: question_sight,
      question_Immediate: question_Immediate,
      question_facial: question_facial,
      question_intonation: question_intonation,
      question_gesture: question_gesture,
      question_atmosphere: question_atmosphere,
      question_word_usage: question_word_usage,
      question_good_at: question_good_at,
      question_first_meeting: question_first_meeting,
      question_play: question_play,
      question_feeling_face: question_feeling_face,
    })
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

app.post('/api/users/new', (req, res) => {
  const { first_name, last_name, email, password, team_id } = req.body;
  database('users')
    .insert({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      team_id: Number(team_id),
    })
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

// app.use(express.static(path.resolve(__dirname, '../vite-project', 'dist')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../vite-project', 'dist', 'index.html'));
// });

module.exports = { app: app };
