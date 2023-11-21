/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('team').del();
  await knex('team').insert([
    { id: 1, name: 'ProjectName1' },
    { id: 2, name: 'ProjectName2' },
    { id: 3, name: 'ProjectName3' },
    { id: 4, name: 'ProjectName4' },
    { id: 5, name: 'ProjectName5' },
  ]);
};
