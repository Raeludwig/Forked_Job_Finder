

  
  var host = 'data.usajobs.gov';  
  var userAgent = 'talonmeyer12@email.address';  
  var authKey = 'brojSsvqAyL337eVXT7ETHQdMM9bdvw590ZA4mU7ReY=';    
  var jobsURL = 'https://data.usajobs.gov/api/search?JobCategoryCode=2210'; // Right now set to find IT jobs
              

  // Fetches list of jobs with their corresponding job codes
  fetch('https://data.usajobs.gov/api/codelist/occupationalseries')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })

  // Fetches information for specified job
  fetch(jobsURL, {
    headers: {          
      "Host": host,          
      "User-Agent": userAgent,          
      "Authorization-Key": authKey      
  } 
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })

//testing fetch call using position title
function getJobListing (title) {
  var listingURL = "https://data.usajobs.gov/api/Search?PositionTitle=" + title;

  fetch(listingURL, {
    headers: {          
      "Host": host,          
      "User-Agent": userAgent,          
      "Authorization-Key": authKey      
  } 
  })
    .then(function(response) {
      if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
          });
      };
    });
}

//title variable will need to grab from survey results
//this is just temporary :)
var title = "cybersecurity"
getJobListing(title)