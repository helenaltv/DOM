import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
   
    <h1>Nya Artiklar</h1>
    <div class="minkod">

    <button id="ny-artikel-knapp">Skapa ny artikel</button> 
     <input type="text" id="ny-artikel" placeholder="Skriv artikelns benämning" >
     <button id="klar">Klar</button>
     <button id="ta-bort">Ta bort</button>
    <ul id="artikelnamn"></
    </div>
    </div>
    `;

const nyArtikelButton = document.getElementById("ny-artikel-knapp");
const nyArtikelInput = document.getElementById("ny-artikel");
const klarButton = document.getElementById("klar");
const taBortButton = document.getElementById("ta-bort");
const artikelList = document.getElementById("artikelnamn");

nyArtikelButton.addEventListener("click", () => (nyArtikelInput.value = ""));
klarButton.addEventListener("click", () => {
  if (nyArtikelInput.value()) {
    const listItem = document.createElement("li");
    listItem.textContent = nyArtikelInput.value;
    artikelList.appendChild(listItem);
  }
});
taBortButton.addEventListener("click", () => {
  if (artikelList.lastChild) {
    artikelList.removeChild(artikelList.lastChild);
  }
});
