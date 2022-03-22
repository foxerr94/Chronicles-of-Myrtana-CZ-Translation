# Description
A crude way of getting info about translation progress via parsing HTML code. Written for Chronicles of Myrtana Czech translation community. Tested on Google Chrome.

**WARNING: Parser works for desktop version of Crowdin webpage only and based on crowdin webpage structure as of 13.02.2022.**

## How to use (see README.jpg):

1. open the Elements panel in browser
2. find _<div>_ tag with id '_files-wrapper_'
3. right click -> _Edit as HTML_
4. copy ALL of the HTML code
5. open _source.html_
6. paste the copied HTML code to _source.html_
7. save _source.html_ and open it in browser
8. click on button

after few seconds a CSV-formated list of files appears.
