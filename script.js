var textArea = document.querySelector("#text-area");
var btnPrimary = document.querySelector(".btn-primary");
var output = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructUrlString(text) {
  return `${url}?text=${text}`;
}

btnPrimary.addEventListener("click", getInputData);

function getInputData() {
  getTranslation(constructUrlString(textArea.value));
}

function getTranslation(text) {
  fetch(text)
    .then(function responseHandler(response) {
      return response.json();
    })
    .then(function logJSON(jsonData) {
      output.innerText = jsonData.contents.translated;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
  console.error("Error Occured", error);
}
