let areaPaises = document.querySelector('[data-paises]')
const inputPais  = document.querySelector('.inputPais')
inputPais.addEventListener('keydown',pesquisaPais) 
async function pesquisaPais(event){
 const nomePais = event.target.value
 const paisApi = await fetch(`https://restcountries.eu/rest/v2/name/${nomePais}`)
 const paisJson = await paisApi.json() 
 console.log(paisJson)
 let htmlPais = ""  
 paisJson.map((pais)=>{
  htmlPais += `<div class="cards-paises">
  <img src="${pais.flag}"> 
  <h2> ${pais.name}</h2> 
 
  <h4>
 População:<span>${pais.population}</span>
  </h4>
  <h4>Região:<span>${pais.region}</span>
  </h4>
  <h4>Capital:<span>${pais.capital}</span>
  </h4>
 
  </div>`
  areaPaises.innerHTML = htmlPais
 })
 
}

const regiao  = document.querySelector('#regiao')
regiao.addEventListener('click',pesquisaRegiao) 
async function pesquisaRegiao(event){
 const nomeRegiao = event.target.value
 console.log(nomeRegiao)
 const regiaoApi = await fetch(`https://restcountries.eu/rest/v2/region/${nomeRegiao}`)
 const regiaoJson = await regiaoApi.json() 
 console.log(regiaoJson)
 let htmlPais = ""  
 regiaoJson.map((pais)=>{
  htmlPais += `<div class="cards-paises">
  <img src="${pais.flag}"> 
  <h2> ${pais.name}</h2> 
 
  <h4>
 População:<span>${pais.population}</span>
  </h4>
  <h4>Região:<span>${pais.region}</span>
  </h4>
  <h4>Capital:<span>${pais.capital}</span>
  </h4>
 
  </div>`
  areaPaises.innerHTML = htmlPais
 })
 
}











async function start(){
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const dados = await response.json() 
  let html = ""  
  dados.map((paises)=>{ 
    html += `<div class="cards-paises">
                <img src="${paises.flag}"> 
                <h2> ${paises.name}</h2> 
               
                <h4>
               População:<span>${paises.population}</span>
                </h4>
                <h4>Região:<span>${paises.region}</span>
                </h4>
                <h4>Capital:<span>${paises.capital}</span>
                </h4>
              
              </div>`
              areaPaises.innerHTML = html
    
  })
}
start() 
const modoDark = document.querySelector('.modo-dark')
function alternarModo(){
  
  document.body.classList.toggle('dark')
}
