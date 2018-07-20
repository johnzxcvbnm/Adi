![](/ga_cog.png)

---
Title: Instaphoto <br> 
Type: Lab <br>
Creator: Jerrica Bobadilla<Br>
Competencies: Rails 

---

# Instaphoto 

![](https://imgur.com/CSP45cO.png)

> You've decided there aren't nearly enough photo sharing apps out there, so let's make a new one!

## Activity 

#### Set up a new rails project 
1. Inside the `student_labs` folder for today, set up a new rails project and name it instaphoto like so: 
    
    `rails new instaphoto -d postgresql --skip-git`

    :red_circle: Don't forget the --skip-git flag so that you don't initialize a repo within a repo!
    
1. In terminal, create a database called `instaphoto` 
1. Still in terminal and inside of your `instaphoto` database, create a table called `photos` with the following columns, you decide what data type each column should be: 
    - id
    - img_url 
    - caption
    - likes 
    - date 
1. Still inside your database, insert some data, for example:
    ```
    INSERT INTO photos (img_url, caption, likes, date) VALUES ('https://imgur.com/gFT4Iwg.png', 'nine NINE!', 0, current_timestamp);
    INSERT INTO photos (img_url, caption, likes, date) VALUES ('https://imgur.com/yw77pz0.png', 'cheddar ♡ terry', 0, current_timestamp);
    ```
#### Connecting your database to your rails project 
1. Open your `instaphoto` rails project in atom
1. Create an index route for the photos 
1. Create a model for your photos 
    - Connect it to your postgres `photos` database 
    - Set up an initializer so that we can create new Photos
        - Don't forget about `attr_reader`
1. Create a controller for your photos
    - Define the index and have it render all your `photos` data as json 

#### Set up full CRUD for the photos
1. Create a show route 
1. Create a create route 
1. Create a delete route 
1. Create an update route 

#### Creating users 
1. Create a table for `users` with the following columns, again it's up to you to decide the datatypes 
    - id
    - username 
1. Set up full CRUD for users!

## Hungry for More

Finish early? You'll be learning it tomorrow, but see if you can find out how to relate your `users` and `photos` table so that they have a one-to-many relationship (i.e. users have many photos, photos belong to a user) 
