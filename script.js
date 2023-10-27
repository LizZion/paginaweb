// habilidades - show/hide

var habilidadeOn = true
var textHandlerHabilidade = document.getElementById("habilidadesShow").innerHTML

document.getElementById("habilidades").onclick = function(){
    if(habilidadeOn){
        habilidadeOn = false
        document.getElementById("habilidadesShow").innerHTML = ""
    } else{
        habilidadeOn = true
        document.getElementById("habilidadesShow").innerHTML = textHandlerHabilidade
    }
}