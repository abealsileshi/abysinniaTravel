import fetch from 'node-fetch' 

function fetchJSONData() {
fetch('./travelRecommendation/travel_recommendation_api.json')
  .then(response => response.json())
  .then(json => console.log(json));
}
fetchJSONData();
