/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('social_style', function (table) {
    table.increments('id').primary();
    table.integer('user_id').references('users.id').notNullable();
    table.integer('question_pace').notNullable();
    table.integer('question_between').notNullable();
    table.integer('question_ending').notNullable();
    table.integer('question_volume').notNullable();
    table.integer('question_first').notNullable();
    table.integer('question_conclusion').notNullable();
    table.integer('question_opinion').notNullable();
    table.integer('question_sight').notNullable();
    table.integer('question_Immediate').notNullable();
    table.integer('question_facial').notNullable();
    table.integer('question_intonation').notNullable();
    table.integer('question_gesture').notNullable();
    table.integer('question_atmosphere').notNullable();
    table.integer('question_word_usage').notNullable();
    table.integer('question_good_at').notNullable();
    table.integer('question_first_meeting').notNullable();
    table.integer('question_play').notNullable();
    table.integer('question_feeling_face').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('social_style');
};
