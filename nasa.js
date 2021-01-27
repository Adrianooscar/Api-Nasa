 
class nasamodel 
    let botao = document.getElementById("botao")
    botao.addEventListener("click", function(){
        let request = new XMLHttpRequest();

        request.open ("get", `https://api.nasa.gov/planetary/apod?api_key=lKHl6cgvef2uNruCJOwPpjobtefYcs99drofFNUI`, false)
        request.addEventListener("load",() =>{
            var site = JSON.parse(request.responseText);
            console(site)
        });
request.send();
    })
