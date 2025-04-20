const username = "jayxdcode";
const BASE_URL = "https://api.github.com/"

const ENDPOINT = `${BASE_URL}users/${username}/repos`;

let CACHED_GITHUB_DATA = localStorage.getItem(`githubRepoCache_${username}`);

if (CACHED_GITHUB_DATA) {
  alert(CACHED_GITHUB_DATA)
}

fetch(ENDPOINT)
  .then(response => {
    // Handle the response here
    console.log('Response received:', response);
    // You'll typically need to process the response body (e.g., as JSON)
    return response.json(); // Returns another Promise
  })
  .then(data => {
    // Use the data from the response body
    GITHUB_DATA = data;
    console.log('Data:', data);
    
    
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Fetch error:', error);
  });