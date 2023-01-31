// const options = {
// 	method: 'GET',
// 	headers: {
// 		Authorization: 'Basic dGFsb25tZXllcjEyOlNvY2NlcjRmdW4h',
// 		'X-RapidAPI-Key': '7fcd994358msh60f475f1f05b959p190e13jsnde3ee049baef',
// 		'X-RapidAPI-Host': 'linkupjobsearch-linkup-job-search-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://linkupjobsearch-linkup-job-search-v1.p.rapidapi.com/developers/v-1/search-handler.js?api_key=%7Bapi_key%7D&embedded_search_key=%7Bsearch_key%7D&orig_ip=%7Bip_addr%7D&keyword=%7Bkeyword%7D&location=%7Blocation%7D&distance=%7Bradius%7D', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7fcd994358msh60f475f1f05b959p190e13jsnde3ee049baef',
// 		'X-RapidAPI-Host': 'workable.p.rapidapi.com'
// 	}
// };

// fetch('https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs?phase=published&per_page=5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7fcd994358msh60f475f1f05b959p190e13jsnde3ee049baef',
// 		'X-RapidAPI-Host': 'itsyourskills-skills-profiler-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://itsyourskills-skills-profiler-v1.p.rapidapi.com/api/skill-search?q=java', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
/**
   * Sample JavaScript code for search.cse.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

function loadClient() {
    gapi.client.setApiKey("AIzaSyAXIOtRbHo6aFZB6X7UmGy5ixqIRQkpPRg");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.search.cse.list({
        "c2coff": "1",
        "cr": "countryUS",
        "cx": "5077da0ce8b8849b0",
        "dateRestrict": "w[1]",
        "exactTerms": "job",
        "excludeTerms": "closed",
        "fileType": ".pdf",
        "filter": "1",
        "gl": "us",
        "googlehost": "google.com",
        "hl": "en",
        "lr": "lang_en",
        "q": "jobs",
        "rights": "cc_publicdomain",
        "safe": "off",
        "start": 10
      })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
//   loadClient();
//   execute();