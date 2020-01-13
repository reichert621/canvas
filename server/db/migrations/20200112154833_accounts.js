exports.up = knex => {
  return knex.schema.createTable('accounts', table => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('salt').notNullable();
    table.string('full_name');
    table.string('country');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('accounts');
};
