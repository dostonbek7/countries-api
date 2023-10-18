const API = "https://countries-api-v7sn.onrender.com/countries?limit=250"

const getData = async (resourse) =>{
  const request = await fetch(resourse)
  const response = await request.json()
   return response.data
}
getData(API)
.then((data)=>{
  updateUI(data)
})
