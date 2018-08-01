# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CREATE TABLE games (id SERIAL, game_name VARCHAR(32), image TEXT, has_been_released BOOLEAN);

INSERT INTO games (game_name, image, has_been_released) VALUES ('Zelda', 'qqq.qqq', true), ('Pac Man', 'eee.eee', true), ('Detroit', 'rrr.rrr', false);

CREATE TABLE amiibos (id SERIAL, character_name VARCHAR(32), game_id INT, image TEXT, has_been_released BOOLEAN);

INSERT INTO amiibos (character_name, game_id, image, has_been_released) VALUES ('Link', 1, 'www.www', true), ('Pac Man', 2, 'zzz.zzz', false), ('Zelda', 1, 'xxx.xxx', true);
