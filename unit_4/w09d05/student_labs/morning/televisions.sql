-- Open up psql and create a sql_lab database if you haven't already done so.
-- If you already have a sql_lab database, no need to create it again.
-- Write SQL commands under the prompts below, and run the file to get results.
-- In case there is already a televisions table, drop it

-- Create a televisions table
--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url
CREATE TABLE televisions ( id serial, model_name varchar(20), screen_size int, resolution varchar(10), price decimal, release_date timestamp, photo_url text);

-- Insert 4 televisions into the tv_models table
INSERT INTO televisions (model_name, screen_size, resolution, price) VALUES
                        ('HTC', 42, '1080p', 4999.99),
                        ('HTC', 98, '1080i', 7999.99),
                        ('Hanspree', 36, '980z', 1000),
                        ('Vizio', 48, '2t', 499.75);

-- Select all entries from the tv_models table
SELECT * FROM televisions;

-- HUNGRY FOR MORE?
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns
