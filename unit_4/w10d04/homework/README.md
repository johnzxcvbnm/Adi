![](/ga_cog.png)

---
Title: Instaphoto - Part2 <br>
Type: Lab <br>
Creator: Mark De May<Br>
Competencies: Rails, Many-to-Many relationships

---

# Instaphoto - Part 2

![](https://imgur.com/CSP45cO.png)

Your new photo sharing app is insanely popular! Let's update it so you can tag people in photos.

## Activity

### Before You Start

:red_circle: We don't want to break last night's homework, so copy last night's homework into today's homework folder. Be sure to commit any change you have before copying. Git is your friend!
```
cp -r unit_4/w10d03/homework/instaphoto unit_4/w10d04/homework/instaphoto
```

#### The Linking Table

1. Create a table for `tags` in the `instaphoto` database with the following columns:
  - id
  - comment
  - user_id
  - photo_id
1. You don't need to do full CRUD for `tags`. Just do:
  - index
  - show
  - create

##### User Stories

1. As a user, I can tag a user in a photo (create a `tag`)
1. As a user, I can see a single tag.
1. As a user, I can see all tags.
1. As a user, I can see a user. Update the user show route to include all photos the user is in.
1. As a user, I can see a photo. Update the photo show route to include all users in the photo

## Hungry for More

1. Additional User Stories:
  1. As a user, I can see all users, including which photos they're in.
  1. As a user, I can see all photos, including which users are in the photo.
1. Create full CRUD for `tags`.
1. Use the [faker](https://github.com/stympy/faker) gem to seed your database. Faker::Placeholdit creates urls to images.
