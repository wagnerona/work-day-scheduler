# Week 7 challenge: Work Day Scheduler


I will create a simple calendar application that allows me, the user, to save events for each hour of the day by modifying the starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. 

I will use the Moment.js library to work with date and time. I'll make sure to carefully read the documentation and concentrate on using Moment.js in the browser.

## Deployed site

https://wagnerona.github.io/work-day-scheduler/

## Source code

https://github.com/wagnerona/work-day-scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

The following animation demonstrates the application functionality:

## Mockup and usage:

<img src = "./images/Sequence 01.gif>

 To use this app:
 
 1. Scroll to the time you wish to add an event/note 
 2. Write it inside the box
 3. Click save if you wish to save your input
 4. If you wish to reset all text/inputs just click on yellow button "reset all text fields"


## Resources:

OpenAi, for specific questions on "how to use" and consolidate code:

- https://chat.openai.com/


Tag to input text:

- https://www.w3schools.com/tags/tag_textarea.asp

.ready handler, run codes as soon as pages DOM is safe to manipulate:

- https://api.jquery.com/ready/

.siblings selector, get siblings of each element, in the set of matched elements:

- https://api.jquery.com/siblings/#:~:text=siblings()%20method%20allows%20us,pass%20to%20the%20%24()%20function.

.parent, get parent of element:

- https://api.jquery.com/parent/

Jquery .each

- https://api.jquery.com/each/


JS this and $(this) keyword:

- https://www.youtube.com/watch?v=gvicrj31JOM&ab_channel=ProgrammingwithMosh
- https://www.geeksforgeeks.org/this-in-javascript/
- https://www.geeksforgeeks.org/difference-between-this-and-this-in-jquery/

## License 

MIT License

Copyright (c) 2023 wagnerona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

