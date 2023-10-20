const API = "https://countries-api-v7sn.onrender.com/countries?limit=250"

const loaderEl = document.querySelector('#overlay')
const loader = (state)=>{
  if(state){
    loaderEl.classList.remove('hidden')
  }else{
    loaderEl.classList.add('hidden')
  }
}

const getData = (resourse) =>{
  return new Promise((resolve, reject)=>{
     const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", ()=>{
      if(request.readyState != 4){
        loader(true)
      }else if(request.readyState ==4 && request.status ==200){
        const response = JSON.parse(request.responseText)
        resolve(response.data);
        loader(false)
      }else if(request.readyState == 4){
        loader(false)
        reject("Error")
      }
    })

     request.open("GET", resourse)
     request.send()
  })
 }
 const load = () => {
  getData(API)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", load);
