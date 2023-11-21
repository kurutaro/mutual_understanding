/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('team').del();
  await knex('team').insert([
    { name: 'Acme Project' },
    { name: 'Infinity Solutions' },
    { name: 'Pioneer Ventures' },
    { name: 'Future Horizons' },
    { name: 'Vanguard Innovations' },
    { name: 'Summit Enterprises' },
    { name: 'Elevate Technologies' },
    { name: 'Apex Creations' },
    { name: 'Stratus Designs' },
    { name: 'Nimbus Solutions' },
    { name: 'Zenith Dynamics' },
    { name: 'Horizon Solutions' },
    { name: 'Evolve Enterprises' },
    { name: 'Synergy Systems' },
    { name: 'Global Innovations' },
    { name: 'Frontier Technologies' },
    { name: 'Prime Developments' },
    { name: 'Skyline Solutions' },
    { name: 'Cascade Industries' },
    { name: 'Visionary Ventures' },
  ]);
};
