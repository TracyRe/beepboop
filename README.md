# Beep Boop

#### Array and Looping Project for Epicodus - 2019-0125

#### By Tracy Reith

## Description

Takes a number and returns 'beep' in place of numbers containing 1, 'boop' in place of numbers containing 2, and 'I'm sorry Dave, I can't do that.' in place of numbers containing 3.

### Learning Objective

Arrays, loops, if else statements.

### Specs

Specification | Input | Output
------------- | ----- | ------
User must enter a number | " " | System returns message that an entry is required
 | Any entry not a number | System does not accept entry
Takes a number from a user and returns a range of numbers from 0 to the user-inputted number | "4" | "0, 1, 2, 3, 4"
Where number contains "1", replace entire number with "Beep!" | "11" | "Beep!"
Where number contains "2", replace entire number with "Boop!" | "22" | "Boop!"
Where number contains "3", replace entire number with ""I'm sorry, Dave. I'm afraid I can't do that." | "33" | "I'm sorry, Dave. I'm afraid I can't do that."
Higher numbered rules take precedence over lower numbered rules | "13" | "I'm sorry, Dave. I'm afraid I can't do that."
.  | "12" | "Boop!"
.  | "23" | "I'm sorry, Dave. I'm afraid I can't do that."
When the user enters a new number, the application will replace the current result with new results | **Current:** "4" | "0, Beep!, Boop!, 3, 4"
.  | **New:** "3" | "0, Beep!, Boop!, 3"


### Stretch Goals

* Let user enter name, return user name in place of "Dave"

## Setup/Installation Requirements

* View at https://tracyre.github.io/beepboop/
* Clone from https://github.com/TracyRe/beepboop.git
* Open in browser of your choice
* Edit files as desired


## Known Bugs

None known

## Support and contact details

N/A

## Technologies Used

HTML, CSS with Bootstrap, Javascript with jQuery

### License

N/A

Copyright (c) 2019 Tracy Reith
