
var fecha = new Date().getHours();
console.log(fecha);
var salu = "";
if(fecha >= 1 & fecha <= 11)
{
    salu = "¡Buenos Días!";
}
else if(fecha >= 12 & fecha <= 18 )
{
    salu = "¡Buenas Tardes!";
}
else if(fecha >= 19 & fecha <= 24)
{
    salu = "¡Buenas noches!";
}
const app = new Vue({
    el: '#app',
    data:{
        op1:"Empresa",
        op2:"Servicios",
        op3:"Contacto",
        txt_em:"Somos ConstruArcos, empresa consolidada hace más de 20 años en la industria. Bridamos todo lo necesario para solucionar sus nececidades de construcción, poseemos el personal con experiencia para cada trabajo solicitado cumpliendo con sus expectativas. ConstruArcos es la mejor alternativa al remodelar, reparar y restaurar su hogar.",
        saludo: salu,
        serve1:"Pulido y vitrificación de parquet",
        serve2:"Construcción de quinchos",
        serve3: "Construcción en general",
        serve4: "Instalacion de piso flotante, revestimiento ceramico y porcelanato",
        serve5:"Pinturas y barnices todo tipo",
        }
    })

   