//import fetch from 'node-fetch' 

//For use-cases where you cannot update Node, you can conditionally import the Fetch API.
//Note: this uses top-level await
//https://stackoverflow.com/questions/72434338/using-node-fetch-in-js-file-in-browser-and-in-node


//container.append(el);

/* use this to scroll when making a div
style="overflow-y:scroll;"
*/

let fetch = globalThis?.fetch;

if (!fetch && process?.versions?.node) {
  fetch = (await import('node-fetch')).default;
}

console.log(fetch);

var squery;

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('button[type="submit"]');
  searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    console.log('Made it Abeal');
    
   
    squery = document.querySelector('input[type=search]').value;
    
    // Pass a callback function to fetchJSONData
    fetchJSONData(handleApiData);
  });

  const clearButton = document.querySelector('button[type="reset"]');
  clearButton.addEventListener('click', (event) => {
     //clear previous search results
     if(document.getElementsByClassName('right-element').length > 0){
      document.getElementsByClassName("right-element")[0].remove()
    }
  });
});

// Callback function that will handle the API data
function handleApiData(data) {
  
  console.log('API Data received in callback:', data);
  // Do something with the data here (e.g., update the DOM)
  //creating a card for each search result
  var container = document.getElementsByClassName('container-fluid');
  container = container[0]
  var el = document.createElement("div");
  //el.setAttribute("style", "overflow-y:scroll;");
  el.className ="right-element";
  
  squery = squery.toLowerCase();
  if(squery.includes('beach') ){
    data = data.beaches
    console.log('look at beach data', data )

    var img1 = document.createElement("img");
    var text1 = document.createElement('p')
    img1.src = data[0].imageUrl;
    text1.innerText = data[0].description;
    text1.style.color = 'white'
    el.appendChild(img1)
    el.appendChild(text1)
    
    var img2 = document.createElement("img");
    img2.src = data[1].imageUrl;
    var text2 = document.createElement('p')
    text2.innerText = data[1].description;
    text2.style.color = 'white'

    el.appendChild(img2)
    el.appendChild(text2)

    container.appendChild(el)

  }
  if(squery == 'countries'|| squery.includes('country')){
    data = data.countries
    console.log('look at country data', data )
    console.log('urls', data[1].cities[0].imageUrl)

    var img1 = document.createElement("img");
    //img1.style.height = 'auto';
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    var img6 = document.createElement("img");
    //australia entries (sydney, melbourne)
    img1.src = data[0].cities[0].imageUrl
    img2.src = data[0].cities[1].imageUrl
    //japan images (tokyo, kyoto)
    img3.src = data[1].cities[0].imageUrl
    img4.src = data[1].cities[1].imageUrl
    // //japan brazil (rio, saopaulo)
    img5.src = data[2].cities[0].imageUrl
    img6.src = data[2].cities[1].imageUrl

    el.appendChild(img1)
    el.appendChild(img2)
    el.appendChild(img3)
    el.appendChild(img4)
    el.appendChild(img5)
    el.appendChild(img6)
    container.appendChild(el)
  }
  if(squery == 'temples' || squery.includes('temple')){
    data = data.temples
    console.log('look at temple data', data )

    var img1 = document.createElement("img");
    img1.src = data[0].imageUrl;
    el.appendChild(img1)
    
    var img2 = document.createElement("img");
    img2.src = data[1].imageUrl;
    el.appendChild(img2)
    container.appendChild(el)
  }

}

export function fetchJSONData(callback) {
  fetch('http://127.0.0.1:5500/travelRecommendation/travel_recommendation_api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed with HTTP code " + response.status);
      }
      return response.json();
    })
    .then(response => {
      // Call the callback function and pass the data
      callback(response);
    })
    .catch(error => {
      console.error("Abeal the error is: " + error);
      // You can also call the callback with an error, if needed
      callback(null, error);
    });
}

