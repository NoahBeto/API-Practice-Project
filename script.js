// script.js

async function getCountryInfo() {
    const countryName = document.getElementById('countryInput').value;
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const countryDataDiv = document.getElementById('countryData');
      if (data.status === 404) {
        countryDataDiv.innerHTML = `<p>Country "${countryName}" not found.</p>`;
      } else {
        const country = data[0];
        countryDataDiv.innerHTML = `
          <div class="country-info">
            <h2>${country.name.common}</h2>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area} square kilometers</p>
          </div>
        `;
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }
