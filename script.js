var searchBtn = document.querySelector("#searchItBtn");
searchBtn.addEventListener("click", getInput);

function getInput(e) {
  var userInput = document.querySelector("#search-box").value;
  fetchData(userInput);
  document.querySelector("#search-box").value = "";
}

function fetchData(text) {
  fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities") // take json
    .then(response => response.json()) // if success transform json in JS object
    .then(data => {
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        var city = "";
        if (data[i].City === "Delhi") {
          //console.log(data[0]);
          city +=
            "City name: " +
            data[i].City +
            "<br>" +
            "District: " +
            data[i].District +
            "<br>" +
            "State: " +
            data[i].State;

          var ouData = document.createElement("p");

          ouData.setAttribute("class", "searchResult");
          ouData.innerHTML = city;
          document.body.appendChild(ouData);
        }
      }

      var ouData = document.createElement("p");
      ouData.setAttribute("class", "searchResult");
      ouData.innerHTML = `Sorry, we couldn't find city`;
      document.getElementById('search-container').appendChild(ouData);
    });
}
