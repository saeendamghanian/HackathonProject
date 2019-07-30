var searchBtn = document.querySelector("#searchItBtn");
searchBtn.addEventListener("click", getInput);

function getInput() {
  var userInput = document.querySelector("#search-box").value;
  fetchData(userInput);
  document.querySelector("#search-box").value = "";
}

function fetchData(text) {
  fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities") // take json
    .then(response => response.json()) // if success transform json in JS object
    .then(data => {
      //console.log(data);
      var city = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].City === text) {
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
        }
      }
      if (city.length > 0) {
        var checkEl = document.getElementById("searchResult");
        if (checkEl) {
          checkEl.innerHTML = city;
        } else {
          var ouData = document.createElement("p");

          ouData.setAttribute("id", "searchResult");
          ouData.innerHTML = city;
          document.body.appendChild(ouData);
        }
      } else {
        alert("Sorry we couldn't find " + text + " City");
      }
    });
}
