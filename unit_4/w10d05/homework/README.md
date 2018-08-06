![](/ga_cog.png)

---
Title: Tweet_r <br>
Type: Homework<br>
Duration: Weekend homework<br>
Creator: Thom Page <br>
Modified By: Jerrica Bobadilla, Mark De May<br>
Topics: Rails, routes, Postman

---

# TWEET_R

Real Cool Twitter API in the Sky

![](https://i.imgur.com/VGAxKX1.png)


## Activity

You'll be making a Rails API for a twitter-like app. By the end of the assignment, the app should have 3 models (tweets, users, likes) with both a one-to-many and many-to-many relationship. The app should have full CRUD functionality that can be tested via cURL or Postman. It will be up to you how you want to tackle the workflow on building this API based on the app requirements provided below.

### Setting up

- In your homework folder for tonight, create a new rails app called `tweeter_app_api`.
  - Don't forget to set your database to postgresql
  - Don't forget to `--skip-git`
- In terminal, create a database called `tweeter_app_api_development`

### Users Model

- In your postgres database, create a table for users with the following columns (you decide the datatypes):
   - id
   - username
   - password
- User stories for the users model:
  - As a user, I can create a new user account
  - As a user, I can see my user account data, including all my tweets
  - As a user, I can delete my user account
  - As a user, I can edit my user account

### Tweets Model

- In your postgres database, create a table for tweets with the following columns (you decide the datatypes):
  - id
  - tweet_content
  - user_id
    - Note: This user_id should belong to the user account that "created" the tweet
- User stories for the tweets model:
  - As a user, I can create a tweet and have it related to my user account
    - It should be a one-to-many relationship: tweets belong to users, users can have many tweets
  - As a user, I can get all tweets in the database and see what user account they belong to
  - As a user, I can get an individual tweet and see what user account it belongs to
  - As a user, I can delete a tweet
  - As a user, I can edit a tweet

### Likes Model

- In your postgres database, create a join table for likes with the following columns:
  - id
  - tweet_id
  - user_id
    - Note: This user_id should belong to the user account _liking_ the tweet, not the user who created the tweet
- User stories for the likes model:
  - As a user, I can "like" several tweets and save it to my user account's likes
    - This should be a many-to-many relationship: a user can like many tweets, a tweet can have many likes
  - As a user, I can look at a single user and see all tweets that they liked
  - As a user, I can look at a single tweet and see all users that liked it

### Hints

> :red_circle: Note that the examples given with the hints may not fit exactly as written with how you've written your API. So, try not to completely copy the code, but think about the logic behind it and try to apply it to your own.

  - <details>

     <summary> Viewing a single tweet and seeing who created the tweet *as well as* seeing everyone who liked the tweet will require joining the same table (users) twice. Remember that in order to do so, you'll need to join the tables with aliases.</summary>

     ![](https://i.imgur.com/DZqe9wL.png)

    </details>

  - <details>

    <summary> Similarly, viewing a single user and seeing their tweets *as well as* their liked tweets will also require joining the same table (tweets) twice. Utilize aliases again!</summary>

    ![](https://i.imgur.com/iZyUpII.png)

    </details>

---

## Hungry for More

- When viewing _all tweets_, instead of it showing in order of id, have it show up in order of tweets with the most likes
- Similarly, when viewing _a user_, instead of showing their tweets in order of id, have it show up in order of tweets with the most likes
- Try using the faker gem you used during lab to seed your database
- Add an Angular front end. Put your html files in the `public` directory and the rails server will serve them up.
- Get a head start on React. Check out [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
