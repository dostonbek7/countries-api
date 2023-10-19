const chooseEl = document.querySelector('.country');
const selectEl = document.querySelector('#country__list');
const form = document.getElementById('form');
const countryList = document.getElementById('country__lists')

// Add select parts
chooseEl.addEventListener("click", ()=>{
  selectEl.classList.toggle('hidden')
})

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const inputVal = form.search.value.trim();
  const names = document.querySelectorAll('.country_item');
  names.forEach((name)=>{
    if(name.lastElementChild.firstElementChild.textContent.toLowerCase().includes(inputVal)){
      name.classList.remove('hidden')
    }else{
      name.classList.add('hidden')
    }
  })
  form.reset()
})

 function updateUI(data){
  data.forEach((item=>{
    countryList.innerHTML += `
    <li class="country_item">
          <img class="country_item_img" src="${item.flags.png}" alt="flag" width="264px" height="160px">
          <div class="country_item-content">
            <h3 class="country_item-name">${item.name.common}</h3>
            <p>Population: ${item.population}</p>
            <p>Region: ${item.region}</p>
            <p>Capital: ${item.capital}</p>
            <a href="../about.html">Learn More</a>
          </div>
        </li>
    `
  }))
}
