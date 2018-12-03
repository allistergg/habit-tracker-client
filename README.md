


This app tracks completion of habits by day and week. Upon registration, the user is taken to an empty dashboard, from which they can navigate via top navigation bar to the edit habits page where they can add and remove habits. Once a habit has been added, the user can then check off completion of the habit by day and by week. They are given feedback below about how many habits they have completed on each day. I created this app as a tool to use personally each day to monitor and hopefully improve my habits.


A demo of the currently deployed version of the app can be found at :

https://hidden-waters-84453.herokuapp.com/

The client was built using create-react-app to create a react app and uses React and Redux.

The server was built using Joe Turner's server template, and uses Node, Express, Passport, JWT, MongoDb and Mongoose.

The endpoints used are /api/habits, /api/habits/names.

The habits endpoint is called by the Days and Weeks components to store user checks of habits by day.

The names endpoint is used to store the list of user habits.

Plans and Ideas for improvement:

- Add validation to add-habit input
- Add matching password input for registration page
- Improve semantics of mark-up and code
- Improve responsiveness for larger screens
- Include landing page to explain app to users
- Create larger custom checkboxes, or change checkboxes to generally clickable areas
- Give more visually appealing feedback to user 
- Display errors and loading message to users on screen
- Add support for multiple weeks, dates, months, etc., extend to include and show more data, tracking over time
- Add ability to view habits on own page
- Add ability to edit habits
- Add a calendar
- Add Enzyme tests



