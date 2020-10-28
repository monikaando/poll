## Table of contents
* [Setup](#setup)
* [Name](#name)
* [General info](#general-info)
* [Stack](#stack)
* [Content](#content)
    - [Navigation bar](#navigation-bar)
    - [Breweries button](#breweries-button)
    - [Beers button](#beers-button)
* [Footer](#footer)
* [Visuals](#visuals)
* [Contact](#contact)
## Setup
To run the application: npm start after installing node modules (npm i)
## Name
Poll App
Voting app with a column chart
## General info
    1) Application is built in frontend without backend interactions.
    2) The application is a single page application.
    3) When something changes the application is automatically updated (User can see changes in real time). 
    4) I made the application by using React and Chart.js
    5) The whole application is responsive.
    6) I took care to keep the code is clean and readable.
    7) For images I used Cloudinary.
    8) For styling I used Bootstrap and CSS.
    9) I added a favicon and the title for the website.
## Stack
    React, Chart.js, Bootstrap

## Content    
    The application is divided into three sections (and the footer).
## Create
    User can:
    - add a title 
    - add answers
    - update answers
    - delete answers
    - check how many possible answers left
    - reset the whole application by clicking "Reset" button.
    - see alerts when something is not allowed to do.

    User is not allowed to:
    - add answer when title is not provided (title should have at least 3 characters)
    - provide only spaces in input fields
    - add answer with an emply value
    - add more than 80 characters (in question and answers)
   
## Vote
    User can:
    - see the question
    - see all answers with radio buttons
    - choose one answer
    - vote on this answer
    - vote multiple times

    User is not allowed to:
    - vote before user added at least two answers
    - vote before user choose an answer
    
## Results
    User can:
    - see the question
    - see the column chart with labels and number of votes 
    - observe how chart is dynamically changing
    - see number of total votes
    
        
## Footer
    An additional element with the link to my portfolio.
    
## Visuals
Click a <a href="https://youtu.be/SOFQ6ZrYIBA"><b>video</b></a> and see how Poll App works.

<b>Desktop version:</b>

<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603906798/PollApp/PollApp-1.png" />
</div>

<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603906796/PollApp/PollApp-2.png" />
</div>

<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603906794/PollApp/PollApp-3.png" />
</div>


<b>Mobile version:</b>
<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603913990/PollApp/PollApp-mob1.png" />
</div>

<div style="display: flex; justify-content: center; width: 200px">
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603913990/PollApp/PollApp-mob2.png" />
</div>

<div>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1603913990/PollApp/PollApp-mob3.png" />
</div>


## Contact
    Created by Monika Swidzinska
