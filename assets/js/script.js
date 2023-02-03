

  
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

           

            for (i = 0; i < 10; i++) {
               //variable to push information into html
              var listingInfo = $( 
                '<div class="tile is-child box">' +
                  '<h4 class="title is-4">Job Title: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionTitle + '</h4>' +
                  '<h6 class="subtitle is-6">Department: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.DepartmentName + '</h6>' +
                  '<h6 class="subtitle is-6">Organization: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.OrganizationName + '</h6>' +
                  '<p>Position Start Date: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionStartDate + '</p>' +
                  '<p> Pay Range: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange + '-' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange + ' ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionRemuneration[0].Description + '</p>' +
                  '<p> Start Date: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionStartDate + '</p>' +
                  '<h6 class="subtitle is-6">See full details and Apply ' + '<a href=' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionURI + '>Here</a></h6>' +
                '</div'
              )
              $('.job-posting-box').append(listingInfo)
            };
          
          });
      };
    });
}

//title variable will need to grab from survey results
//this is just temporary :)
var title = localStorage.getItem('Chosen Role');
getJobListing(title)