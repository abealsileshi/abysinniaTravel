import fetch from 'node-fetch' 

function fetchJSONData() {
fetch("/Users/abealsileshi/Desktop/Coursera/abysinniaTravel/travelRecommendation/travel_recommendation_api.json")
  .then(response => response.json())
  .then(json => console.log(json));
}
fetchJSONData();