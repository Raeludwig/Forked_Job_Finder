  // Instance vars that will be used in the USA Jobs API fetch
  var host = 'data.usajobs.gov';  
  var userAgent = 'talonmeyer12@email.address';  
  var authKey = 'brojSsvqAyL337eVXT7ETHQdMM9bdvw590ZA4mU7ReY=';    
  var title = localStorage.getItem('Chosen Role');


// Function gets joblistings from the USA Jobs API using a fetch call with the position title
// Function then sets the fetched data into the UI
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

            for (i = 0; i < 10; i++) {
               // Variable to push information into html
              var listingInfo = $( 
                '<div class="tile is-child box has-background-black">' +
                  '<h4 class="title is-4" style="color: lime;">Job Title: ' + data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionTitle + '</h4>' +
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

// Searches Wikipedia for the given search query and returns 5 article titles, URLs, and snippets
// Then sets fetched data into the UI
function wikiSearch(search) {
  fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=' + search) 
  
  .then(function(response) {
    if (response.ok) {
      return response.json()
      .then(function(data) {
        
        var pageURLs = [];
        var pageTitles = [];
        for (var i = 0; i < 5; i++) {
          pageURLs[i] = "https://en.wikipedia.org/?curid=" + data.query.search[i].pageid;
          pageTitles[i] = data.query.search[i].title;

        }

        // Set data into page UI
        for (var i = 1; i <= 5; i++) {
          $("#title" + i).text(pageTitles[i - 1]);
          $("#URL" + i).text(pageURLs[i - 1]);
          $("#URL" + i).attr("href", pageURLs[i - 1]);
        }
      })
    }
  })
  
}

// Populating the results

var nameLocation = document.querySelector('#name-location');

function jobDescription() {
  const description = document.querySelector("#description");
  var jobName;
 
  if (title === "Back%20End%20Developer") {
    jobName = "Back End Developer";
  } else if (title === "Game%20Developer") {
    jobName = "Game Developer";
  } else if (title === "Front%20End%20Developer") {
    jobName = "Front End Developer";
  } else {
    jobName = title;
  }

  if (description) { // check if the element exists
    description.innerHTML = jobName; // set the innerHTML property
  }
}


// Calls the getJobListing(), wikiSearch(), and jobDescription() method to fetch data and show data on the results page
getJobListing(title);
wikiSearch(title);
jobDescription();


// Sends user to retake the quiz
$("#retake-btn").click(function() {
  document.location.replace('./quiz.html');
});

