



require('../scss/style.scss');

const API_KEY = 'GAkTLeEXEJJEAOdY8QmAzzwyNmjwIlOP'

const BASE_URL = 'https://api.nytimes.com/svc/';
const endpoints = {
   mostPopularByViews: 'mostpopular/v2/viewed/'
 
}
 
  async function fetchMostPopularByViews(days = 7) {
   const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);
 
   url.searchParams.set('api-key', API_KEY);
 
   const response = await fetch(url);
   const data = await response.json();
 //console.log("fetchMostPopularByViews: "+data)
   return data;
}
module.exports = fetchMostPopularByViews;

