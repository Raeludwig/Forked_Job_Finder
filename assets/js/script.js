

  
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
wikiSearch(title)
jobDescription(title)

// Searches Wikipedia for the given search query and returns 5 article titles, URLs, and snippets
function wikiSearch(search) {
  fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=' + search) 
  
  .then(function(response) {
    if (response.ok) {
      return response.json()
      .then(function(data) {
        console.log(data);
        var pageURLs = [];
        var pageTitles = [];
        var pageSnippets = [];
        for (var i = 0; i < 5; i++) {
          pageURLs[i] = "https://en.wikipedia.org/?curid=" + data.query.search[i].pageid;
          pageTitles[i] = data.query.search[i].title;
          pageSnippets[i] = data.query.search[i].snippet;

        }
        console.log(pageURLs);
        console.log(pageTitles)
        console.log(pageSnippets)

        // Set data into page UI
        for (var i = 1; i <= 5; i++) {
          $("#info" + i).text(pageSnippets[i - 1]);
          $("#title" + i).text(pageTitles[i - 1]);
          $("#URL" + i).text(pageURLs[i - 1]);
        }
      })
    }
  })
  
}



//populating the results

var nameLocation =document.querySelector('#name-location');

function jobDescription() {
  nameLocation.innerHTML=""
  var titleInsert= document.createElement('h3')
  titleInsert.textContent =('Chosen Role')
  
  card.setAttribute("class", "card")
  nameLocation.appendChild(card)
card.append(titleInsert)
}

  // async function searchWikipedia(searchQuery) {
  //   const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  //   const response = await fetch(endpoint);
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   const json = await response.json();
  //   return json;
  // }
