/*

Equipe 05

Augusto 195304 1ºSI
Denis 199988 1ºSI
Hanne 097353 1ºSI
Cristian 196094 1ºSI
Andre 198246 1ºSI
Elize 196260 1ºSI
Davi 184975 3ºSI
Guilherme Paulino 052974 5ºEG
Julia 199633 1ºSI

*/


let encoded_func = () =>{
    let num1 = window.document.querySelector('input#txtNum').value
    let dig = window.document.querySelector('input#txtDig').value
    let msg = window.document.querySelector("div#msg")
    if(dig == '')
      dig = 7
    Number(dig)
    var encodedd = encoded(String(num1), Number(dig))
    msg.innerHTML = `${encodedd}`

}

let decoded_func = () =>{
    let num1 = window.document.querySelector('input#txtNum').value
    let dig = window.document.querySelector('input#txtDig').value
    let msg = window.document.querySelector("div#msg")
    if(dig == '')
      dig = 7
    Number(dig)
    var decodedd = decoded(String(num1), Number(dig))
  
    msg.innerHTML = `${decodedd}`

}

function encoded(palavra, trilhos){
    if(trilhos === void 0 || trilhos == null)
        trilhos = 7

    var rails = new Array(trilhos).fill('')
    var direcao = 1
    var rail = 0

    for(var i = 0; i < palavra.length; i++){
        rails[rail] += palavra[i]
        rail += direcao
        if(rail === trilhos -1 || rail === 0)
            direcao *= -1
        
    }
    return rails.join('')
}


function decoded(palavra, trilhos){
    if(trilhos === void 0)
        trilhos = 3

    var rails = new Array(trilhos).fill("")
    var direcao = 1
    var rail = 0

    for(var i = 0; i < palavra.length; i++){
        rails[rail] += '*'
        rail += direcao
        if(rail === trilhos -1 || rail === 0)
            direcao *= -1
    }

    var index = 0
    for(var k = 0; k < rails.length; k++){
        for(var j = 0; j < rails[k].length; j++){
            rails [k] = rails[k].replace('*', palavra[index])
            index++
        }
        
    }
    return rails.join('')
}