//import fetch from 'node-fetch' 

//For use-cases where you cannot update Node, you can conditionally import the Fetch API.
//Note: this uses top-level await
//https://stackoverflow.com/questions/72434338/using-node-fetch-in-js-file-in-browser-and-in-node

let fetch = globalThis?.fetch;

if (!fetch && process?.versions?.node) {
  fetch = (await import('node-fetch')).default;
}

console.log(fetch);
//window.fetchJSONData = fetchJSONData();

export function fetchJSONData() {
fetch('http://127.0.0.1:5500/travelRecommendation/travel_recommendation_api.json')
  .then(response => {
    if (!response.ok) {
        throw new Error("Failed with HTTP code " + response.status);
    }
    return response.json();
  })
  .then(json => console.log(json.countries))
  .catch(error => console.error("Abeal the error is : " + error));

  console.log('HERE1 !!!')
  document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('button[type="submit"]');
    searchButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        console.log('Made it Abeal');
    });
  });

}

console.log('In module: ' + (this === undefined));