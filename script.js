var searchBtn = document.querySelector("#searchItBtn");
searchBtn.addEventListener("click", getInput);

function getInput() {
  return document.querySelector("#search-box").value;
}
