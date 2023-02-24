//h8 converter
let ft = document.getElementById("feet");
let inches = document.getElementById("inch");
let c = document.getElementById("cm");
ft.onkeyup = function feet(){
    inches.value= ft.value*12;
    c.value = ft.value*30.48;
}
inches.onkeyup = function inch(){
    ft.value= inches.value/12;
    c.value = inches.value* 2.54 ;
}
c.onkeyup = function cm(){
    ft.value= c.value/30.48 ;
    inches.value = c.value/ 2.54 ;
}
//w8 converter
let k = document.getElementById("kg");
let p = document.getElementById("pnd");
let o = document.getElementById("ounce");
k.onkeyup = function kg(){
    p.value= k.value*2.205;
    o.value = k.value*35.27;
}
p.onkeyup = function pound(){
    k.value= p.value/2.205;
    o.value = p.value* 16 ;
}
o.onkeyup = function ounce(){
    k.value= o.value/35.27 ;
    p.value = o.value/16 ;
}