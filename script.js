function insulina() {
let ini= document.getElementById("txti")
let fim = document.getElementById("txtf")
let res = document.getElementById("res")

if (ini.value.length == 0 || fim.value.length == 0 ){
   res.innerHTML = "Impossivel Contar"

}else {
 res.innerHTML = "Calculando:"
 let i = Number(ini.value)
 let f = Number(fim.value)

 let l = i / f 

 res.innerHTML = `Aplique ${(l.toFixed(1))} unidades de insulina rapida`
}
 







}