// ///////////////////////////////////////////////////////////
Crowdin files progress parser
author: L-Titan
13.02.2022

DESCRIPTION:
A crude way of getting info about translation progress via
parsing HTML code.

Written for Chronicles of Myrtana Czech translation community.
Tested on Google Chrome.

// ///////////////////////////////////////////////////////////
WARNING
Parser works for desktop version of Crowdin webpage 
only and based on crowdin webpage structure as of 13.02.2022.

// ///////////////////////////////////////////////////////////
HOW-TO-USE (see README.jpg):

1. open the Elements panel in browser
2. find <div> tag with id 'files-wrapper'
3. right click -> Edit as HTML
4. copy ALL of the HTML code
5. open source.html
6. paste the copied HTML code to source.html
7. save source.html and open it in browser
8. click on button

after few seconds a CSV-formated list of files appears.
