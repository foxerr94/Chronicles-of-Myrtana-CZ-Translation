Script to get translation status of the Czech branch of the Chronicles of Myrtana Crowdin project via Crowdin API v2.

## Info
 **Author**: L-Titan, 01/Feb/2022

 **The Chronicles of Myrtana Crowdin project**: https://crowdin.com/project/the-chronicles-of-myrtana
 
 **Requirements:**
 * Python
 * Crowdin Python client (https://github.com/crowdin/crowdin-api-client-python)

## High-level description
 (the algorithm should take approximately 10-15 minutes
  to finish)
  
 1. get list of project directories (1 GET request)
   * each directory, except for root, has a 'pointer' to
     its parent directory
   * full path of directory is generated by traversing
     the parent directories up to the root directory
   * if parent directory isn't contained in API response,
     the program terminates
   * API response is parsed and project directories are 
     stored in list with following structure of elements: 
     [directory ID, full path, word count, % translated, % approved]]

 2. get list of project files (2 GET requests)
   * the target project has roughly 900 files, but
     Crowdin API allows only 500 responses per one call,
     therefore the complete list of project files is 
     generated in two requests
   * the files are stored in list with following
     structure of elements: 
     [file ID, full path, word count, % translated, % approved]
   * elements 'word count', '% translated' and '% approved'
     are set to 'N/A' (they will be filled in next steps)
      
 3.  get translation status of directories (n GET requests,
     where n = number of directories in list)
   * word count and translation status is inserted to 
     directories list
   * ONLY translation for selected language is stored

 4.  get translations status of files (n GET requests,
     where n = number of files in list)
   * word count and translation status is inserted to files list,
   * ONLY translation for selected language is stored
 5. write all project files and directories to CSV file
