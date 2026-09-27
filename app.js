const form = document.querySelector('#searchForm');
const cityInput = document.querySelector('#cityname');
const searchButton = document.querySelector('#searchButton'); 
const resultDiv = document.querySelector('#result');
async function searchStations(keyword, token) {
    const url = `https://api.waqi.info/search/?token=${token}&keyword=${keyword}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data); // list of matching stations with their correct 'station.name' / uid
    const first = data.data[0]; // just take the first match for now
    resultDiv.innerHTML = `<p>${cityInput.value} — AQI: ${first.aqi}</p>`;
    
}


searchButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const cityName = cityInput.value;
    if (cityName) {
        const token = '5dc81981a0f1e5fb0c89dc651e4dc66dfbd61235';
        searchStations(cityName, token);
    }
});
