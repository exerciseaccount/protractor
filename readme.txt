In order to run the tests, the following has to be done:

1) Install Node globally on your computer (of course there's no need to do this if it's already installed)
2) Install NPM globally on your computer (of course there's no need to do this if it's already installed)
3) Go to the main project directory (that would be /protractor, and inside of it you should see the package.json file among others)
4) Run the following command to initialize the file package.json: npm init -f
5) Execute the following commands one at the time:
npm run update-webdriver
npm run preprotractor
npm run protractor




These are the 5 test cases I chose to automate:

1) Successfully upload an image
2) Delele the previously uploaded image
3) Validation of 300 characters maximum limit on description textbox
4) Validation of required text on textbox
5) Successfull edition of the text of the image of the first row

