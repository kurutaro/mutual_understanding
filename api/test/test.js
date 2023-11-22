const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { app } = require('../server');

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = app;

describe('MutualUnderstandingTest', () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it('特定のユーザーの情報をとってこれるか', async () => {
    const arrOfUser = await request.get('/api/users/1').then((res) => res.body);
    const correct = {
      id: 1,
      first_name: 'William',
      last_name: 'Taylor',
      email: 'william.taylor@gmail.com',
      password: 'rEotISp6',
      team_id: 4,
    };
    chai.expect(JSON.stringify(arrOfUser[0])).equal(JSON.stringify(correct));
  });

  it('特定のチームの情報をとってこれるか', async () => {
    const arrOfTeam = await request.get('/api/team/1').then((res) => res.body);
    const correct = { id: 1, name: 'Acme Project' };
    chai.expect(JSON.stringify(arrOfTeam[0])).equal(JSON.stringify(correct));
  });

  it('特定のユーザーのソーシャルスタイル診断の情報をとってこれるか', async () => {
    const arrOfTest = await request
      .get('/api/social_style/users/1')
      .then((res) => res.body);
    const correct = {
      id: 1,
      user_id: 1,
      question_pace: 1,
      question_between: 0,
      question_ending: 1,
      question_volume: 0,
      question_first: 1,
      question_conclusion: 1,
      question_opinion: 1,
      question_sight: 0,
      question_Immediate: 1,
      question_facial: 1,
      question_intonation: 0,
      question_gesture: 1,
      question_atmosphere: 1,
      question_word_usage: 1,
      question_good_at: 0,
      question_first_meeting: 1,
      question_play: 1,
      question_feeling_face: 1,
    };
    chai.expect(JSON.stringify(arrOfTest[0])).equal(JSON.stringify(correct));
  });
});
