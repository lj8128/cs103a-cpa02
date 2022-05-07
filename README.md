# Cocktail Journal Application (CS103A, CPA02)

Link to movie explaining the app: 

This is a web application that enables you to keep an online cocktail journal. You can use it to add and update journal entries, and search your journal based on certain inputs (e.g. name of drink, food pairing, rating, etc.).

After the installation description below, I proceed to give a page-by-page description of my app.

This application was developed with the API provided by https://www.thecocktaildb.com/

## Installation
Download the app from the github link: https://github.com/lj8128/cs103a-cpa02

Download nodejs and npm from https://nodejs.org and cd into the folder that contains the web app.

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```

## Welcome Page

When you first access the webpage, you are greeted by the welcome page, prompting you to sign-up or log in. The image of the cocktail is randomly generated, each time you visit the page.

<img width="726" alt="Welcome_page" src="https://user-images.githubusercontent.com/93382045/167271890-a0d8f85f-9d2a-4dba-991f-7bc2bcfa8033.png">

## Login Page

Login or Signup here. In signing up, choose your favorite cocktail type from the drop down. The drop down items have been populated by the categories of drinks that were made available by the API in https://www.thecocktaildb.com/

<img width="706" alt="Screen Shot 2022-05-07 at 5 16 40 PM" src="https://user-images.githubusercontent.com/93382045/167271938-b91d643d-dd20-453d-992f-caaba3d0d210.png">

## Add/Update Entry Page

You can view, update, and delete your journal entries from this page. Note that the page dynamically provides the number of entries that you have, as well as the average rating of your entries. The latter has been obtained using mongoose's aggregation feature.

<img width="926" alt="Screen Shot 2022-05-07 at 5 22 23 PM" src="https://user-images.githubusercontent.com/93382045/167272081-093d1613-066f-484a-8b8d-01000172262b.png">

To add a new entry, simply populate the fields with values. If the name of the drink you entered is available in the database of https://www.thecocktaildb.com/ a picture corresponding to the drink will automatically be paired with your entry upon submission.

The entries are sorted by the date and time of your entry (not the last time you updated the entry). So you may have to scroll down to see the entry you added most recently. Below are pictured a few entries:

<img width="704" alt="Screen Shot 2022-05-07 at 5 26 32 PM" src="https://user-images.githubusercontent.com/93382045/167272199-919c031a-503d-4003-aef4-f9cb6c945cc6.png">

To delete an entry, simply click on the "Delete Entry" link featured below every entry. To update an entry, click on the "Update Entry" corresponding to the entry you wish to update. Then, you will be redirected to the input fields, that will be prepopulated with the values of the entry you wish to update. Below is an example of the prepopulation.

<img width="945" alt="Screen Shot 2022-05-07 at 5 28 51 PM" src="https://user-images.githubusercontent.com/93382045/167272258-5000143c-5f94-441a-b123-c8b964bd01e4.png">

## Search Journal Page

You can search for an entry/entries based on the entry's/entries' drink name, food pairing, or rating. Simply populate the relevant input field and click submit. The searching was implemented using mongoose's query features. Below is an example search.

<img width="930" alt="Screen Shot 2022-05-07 at 5 32 04 PM" src="https://user-images.githubusercontent.com/93382045/167272313-41c59497-61a1-467f-b604-3ec54db3f4e8.png">
