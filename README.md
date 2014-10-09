# Dashboard #

This is a coding project from [Birmingham Coding Sessions](http://www.meetup.com/Birmingham-Coding-Sessions).

The idea is to create a dashboard which can show live updates to streams such as:

- Company newsfeed.
- GitHub/Bitbucket commit info.
- Continuous integration server messages.
- Twitter/Facebook/general social media.
etc.

## How to use ##

This is built using nodeJS. To install the dependencies (locally to this project) you execute:
    cd project/directory
    npm install

Then to run the server you use:

    node index.js

If all is well this will come up with a message saying "Listening on *:3000".
Then you can see displayed messages by navigating to [localhost:3000](localhost:3000). To send messages here you need to navigate to [localhost:3000/admin](localhost:3000/admin). Then any messages added here should appear on the localhost:3000 page.

