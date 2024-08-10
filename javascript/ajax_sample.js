let number = 0;
let data = []; // Variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = request.response; // Almacena los datos en la variable 'data'
      updateContent(); // Llama a la función para actualizar el contenido
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number = (number == 2) ? 0 : number + 1;
  }
}

function changeVideo() {
  if (data.length === 0) {
    getData(); // Si no se han recuperado datos, llama a getData para recuperarlos
  } else {
    updateContent(); // Si ya hay datos, solo actualiza el contenido
  }
}

button.addEventListener('click', changeVideo);

window.onload = fetchData;