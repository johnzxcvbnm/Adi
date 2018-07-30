# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CREATE TABLE gifts (id SERIAL, name VARCHAR(64), value INT, holiday VARCHAR(64), got_from VARCHAR(64));
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Toy Car', 15, 'X-Mas', 'Santa');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Real Car', 5000, 'Birthday', 'Dad');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('PS4', 499, 'Valentines Day', 'Girlfriend');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Nerf Gun', 25, 'X-Mas', 'Joe');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Family Guy Season One', 30, 'Friday', 'Girlfriend');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Xanthum Gum', 5, 'Birthday', 'Girlfriend');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Link Costume', 80, 'Anniversary', 'Girlfriend');
INSERT INTO gifts (name, value, holiday, got_from) VALUES ('Watch', 150, 'Work Party', 'Boss');
# SELECT * FROM gifts;
