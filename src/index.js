import './style.css';
import submit from '../modules/submit.js';
import refresh from '../modules/refresh.js';
import showList from '../modules/showList.js';

// the API's ID created for New game
const apiId = '00ReicpbLcq4J36lXTc4';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiId}/scores`;

// show List of scores when start the page
showList(url);

// clicking on submit button
submit(url);

// clicking on refresh button
refresh(url);