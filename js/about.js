const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id')
const countryCatalog = document.querySelector('.country__catalog')

const api = `https://countries-api-v7sn.onrender.com/countries?limit=250${id}`

const getID = async (resourse) =>{
  const request = await fetch(resourse)
  const response = await request.json()
   return response.data
}
getID(api)
.then((response)=>{
  getName(response)
})
function getName(data){
  data.forEach(item =>{
    console.log(item);
    countryCatalog.innerHTML = `
    <div class="countery__calatog_flag">
      <img class="country__catalog-img" src="${item.flags.png}" alt="country-flag" height="300" width="450">
    </div>
  <h2 class="country__catalog-title">${item.name.common}</h2>
        <div class="country__content_wrapper">
          <div class="country__context__description">
            <p>Native Name: <span>${item.name.nativeName}</span></p>
            <p>Population: <span>${item.population}</span></p>
            <p>Region: <span>${item.region}</span></p>
            <p>Sub Region: <span>${item.subregion}</span></p>
            <p>Capital: <span>${item.capital}</span></p>
          </div>
          <div class="context__desc">
            <p>Top Level Domenin: <span>.be</span></p>
            <p>Currencies: <span>${item.currencies}</span></p>
            <p>Languages: <span>${item.
              languages}</span></span></p>
          </div>
        </div>
        <div class="border__countries">
        <h5 class="border">Border countries:</h5>
        <div class="border__country">
        <span>${item.borders[0].common}</span>
        <span>${item.borders[1].common}</span>
      </div>
      </div>
      `
  })
}