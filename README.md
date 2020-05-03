This is the server part of a project created as an interview challenge for (Applifting)[https://applifting.cz/]

The main motivation behind creating custom server was to enable the use of sockets.

## Running the project

In order to run the project [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) need to be installed.

`yarn dev`

Run the app in the development mode.

`yarn build`

Build the app for production.

`yarn start`

Run the production build of the project.

## Used technologies

This project was built with [express](https://expressjs.com/) and uses [mongoDB](https://www.mongodb.com/) for data storage.

For data modeling and querying, [mongoose](https://mongoosejs.com/) is used.

## Data querying

### `/api/leaderboard`

**Available methods:**

**GET**

Returns all of the scores in a descending order.

Response:

```
[
    {
        "order": 1,
        "team": "NumberOneTeam",
        "clicks": 402
    },
    {
        "order": 2,
        "team": "Losers",
        "clicks": 305
    }
```

### `/api/klik`

**Available methods:**

**GET**

Returns the score of a given team and session.

Parameters:

- **team** - team for which the score should be retrieved
- **session** - session for which the score should be retrieved

Response:

```
{
    "team_clicks": 402,
    "your_clicks": 0
}
```

**POST**

Increments the score of for a given team and session and returns it.

Request body:

```
{
    "team": 'NumberOne',
    "session": 'a3365eca-3977-42fb-a2ca-9866e5213638'
}
```

Response:

```
{
    "team_clicks": 403,
    "your_clicks": 2
}
```
