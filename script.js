var title = document.getElementById("title");
var description = document.getElementById("description");
var data1 = document.getElementById("response1");
var data2 = document.getElementById("response2"); 
const btnEl = document.getElementById("qoute-btn");

 
const generate= async () => {
    var lower = 1;
    var upper = 1330 ;
    var url = "https://api-thirukkural.vercel.app/api?num="+(Math.floor(Math.random()*(upper-lower))+lower)
    const result = await fetch(url);
    const data = await result.json();
    title.innerText = data.chap_tam;
    description.innerText = data.tam_exp;
    data1.innerText = data.line1;
    data2.innerText = data.line2;     
  }; 
  btnEl.addEventListener("click", generate);
  generate()