# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

CREATE DATABASE stocks;
CREATE TABLE stocks (id SERIAL, company VARCHAR(40), symbol VARCHAR(40));
CREATE TABLE prices (id SERIAL, date TIMESTAMP, price DECIMAL, stock_id INT);

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
