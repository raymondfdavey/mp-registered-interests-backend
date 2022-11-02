0AFTER A NIGHTMARE WITH ENV VARIABLES I FOUND THIS:



Figured out the issue, when deploying with heroku you must configure the config vars to match the environment variables in .env

The other answers in StackOverflow aren't so clear on how to do this, I have outlined the steps I took below.

Go to Application > Settings > Reveal config vars
you will be presented with two text fields one labelled key and the other value
For the key make it equal the name of your environment variable for me it was MONGODB_URI
For the value field it should equal whatever you need your environment variable to be, for me it was the url for MongoDB Atlas.