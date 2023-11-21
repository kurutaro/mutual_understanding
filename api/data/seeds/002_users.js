/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      first_name: 'Henry',
      last_name: 'Krinkle',
      email: 'fenxen@example.com',
      password: 'sdasfffsafaopjj',
      team_id: 2,
    },
    {
      id: 2,
      first_name: 'Pascal',
      last_name: 'Buress',
      email: 'burgerham213@example.com',
      password: 'sdasjsalfoiojj',
      team_id: 2,
    },
    {
      id: 3,
      first_name: 'Kris',
      last_name: 'Kelvin',
      email: 'sol655@example.com',
      password: 'sdasfkkuiypjj',
      team_id: 2,
    },
    {
      id: 4,
      first_name: 'Dan',
      last_name: "O'Bannon",
      email: 'darkstar9@example.com',
      password: 'sdastretrepjj',
      team_id: 1,
    },
    {
      id: 5,
      first_name: 'Mike',
      last_name: 'Halford',
      email: 'carfan640@example.com',
      password: 'sdasffsasdsajj',
      team_id: 1,
    },
    {
      id: 6,
      first_name: 'Mikssdsa',
      last_name: 'Hadsad',
      email: 'careqwqw0@example.com',
      password: 'sdasfdsadadsajj',
      team_id: 1,
    },
    {
      id: 7,
      first_name: 'Msdaike',
      last_name: 'Halfgrord',
      email: 'carfan66780@example.com',
      password: 'sdasffsasdsajj',
      team_id: 3,
    },
    {
      id: 8,
      first_name: 'Mrewrike',
      last_name: 'Halffeword',
      email: 'carfan635430@example.com',
      password: 'sdasffsasdsajj',
      team_id: 3,
    },
    {
      id: 9,
      first_name: 'Mietrke',
      last_name: 'ytuy',
      email: 'ca640@example.com',
      password: 'sdasffsasdsajj',
      team_id: 3,
    },
    {
      id: 10,
      first_name: 'Mjsalhe',
      last_name: 'Halford',
      email: 'carfadsa0@example.com',
      password: 'sdasffsasdsajj',
      team_id: 4,
    },
    {
      id: 11,
      first_name: 'Mikdosapie',
      last_name: 'Halford',
      email: 'carmfkwle@example.com',
      password: 'sdasffsasdsajj',
      team_id: 4,
    },
    {
      id: 12,
      first_name: 'dsijaoe',
      last_name: 'Haksoa;plford',
      email: 'carfkoewpi@example.com',
      password: 'sdasffsasdsajj',
      team_id: 5,
    },
    {
      id: 13,
      first_name: 'Mikdsade',
      last_name: 'Hadsadsaord',
      email: 'carfgth0@example.com',
      password: 'sdasffsasdsajj',
      team_id: 5,
    },
  ]);
};
