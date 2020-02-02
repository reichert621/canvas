exports.up = knex => {
  return knex.schema.createTable('assets', table => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.integer('value');
    table.date('purchased_at');

    table
      .integer('account_id')
      .unsigned()
      .references('id')
      .inTable('accounts')
      .onDelete('SET NULL')
      .index();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('assets');
};
