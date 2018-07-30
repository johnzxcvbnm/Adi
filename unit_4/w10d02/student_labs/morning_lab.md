![](/ga_cog.png)

---

Title: Stock Prices <br>
Type: Lab <br>
Creator: Mark De May <br>

---

# Stock Price Database

Your boss wants you to design and build an API. The API is going to deliver some data about the **share prices** for saleable **stocks** on the stock market.

You know you will be dealing with **share prices** and **stocks**, and that the two things are related.

We will be continuing the lab in the afternoon.

## Set Up

1. Set up a new rails project and name the directory 'stock-prices'
  - :red_circle: Don't forget to set the database to postgresql _and_ use '--skip-git'!
1. Set up a postgres database called 'stocks'.
1. Create 'stocks' and 'prices' tables in your database. See below for the information the tables should store.
1. Set up a one-to-many relationship between stocks and prices

## User Stories

  - As a user, I can add a new stock to the database.
    - Stock information
      - Company name
      - Stock ticker symbol
  - As a user, I can add a new stock price to the database.
    - Price information
      - Date
      - Price
      - Stock ID
  - As a user, I can get all stocks in the database
  - As a user, I can get all prices in the database
  - As a user, I can get all prices for a single stock

Test your routes with Postman as you go.
   - :exclamation: Remember to use "raw" when post/putting.

## Hungry For More

Add routes for updating and deleting both stocks and prices.
