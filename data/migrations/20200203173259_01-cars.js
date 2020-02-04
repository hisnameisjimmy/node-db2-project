
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('cars', tbl => {
        tbl.increments();
        tbl.text('vin', 128)
            .unique()
            .notNullable();
        tbl.text("make", 128)
            .notNullable();
        tbl.text("model", 128)
            .notNullable();   
        tbl.text("mileage", 128)
            .notNullable();
        tbl.text("transmission_type"); 
        tbl.text("title_status"); 
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
