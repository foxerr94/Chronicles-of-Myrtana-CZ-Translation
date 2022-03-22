AUTHORS: 
L-Titan - injecting strings
jeek313 - injecting voiceover, code refactoring & updates

Made for Czech Chronicles of Myrtana translation community

// ------------------- 

OVERVIEW
The 'CoM Crowdin PL injecter' is a primitive 'ad-hoc made' Chrome extension for injecting Polish strings and voiceover to the Crowdin editor page.
The Polish strings used by injector were obtained from CoM github on February 5th, 2022. 
https://github.com/TheChroniclesOfMyrtana/localization

The performance is not optimal, sometimes the Polish text doesn't appear. In that case, click on another string and then click back on the previous one.

If the injector doesn't get ready after page load or if it isn't working properly, try resetting it manually by clicking on the extension button.

WARNING! 
Extension works based on the Crowdin website structure as of March 22th, 2022. Should any changes in the structure of website happen, the extension might not work properly anymore.

// -------------------

HIGH-LEVEL DESCRIPTION:
The extension finds corresponding Polish string based on the string ID and appends the Polish string after the English string.
For this purpose a MutationObserver monitors changes on the page relevant to the displayed English string. When such change occurs, the Polish string is appended.

The injector works only on pages with URL in format specified in manifest.json in the "matches" list.
When the injector is ready, it is indicated by an pop-up box, logs in the console and - obviously - appended Polish string after the English one.

// -------------------

INJECTING AUDIO
If you want to enable/disable injecting audio, uncomment/comment the following line in the function 'updateState()'  in 'content.js':
   
updateVoiceoverPlayer(stringID); // remove this line if you want to disable voiceover injection.

// -------------------

CHANGELOG
1.1
	- removed pop-up box after injector start
	- injector starts automatically when the required page-elements are ready (in 1.0 it started after fixed time after window load)
	- removed leading space that was mistakenly added in Polish strings
1.2
	- added voiceover injection
	- improved performance
1.3
	- removed bug of duplicitly displayed PL texts

1.4
	- updated manifest