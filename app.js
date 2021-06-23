/*cometarios igual que
en css cuando queres que sea
varias lineas*/

//cometarios solo en una linea






//FAVOR COLOCAR ESTE "SALUDO" COMO FUNCION
let joda;
alert ("Bienvenido(a)!");

let nombre = prompt ("Coloca tu nombre.");

if (nombre == "mary" || nombre ==  "Mary" || nombre == "MARY") {

    alert (`Bienvenida Mary, ojala existieran mas personas como tu. Gracias por el apoyo. Eres Genial!!`)
}

else if (nombre == "Zair" || nombre ==  "zair" || nombre == "ZAIR") {

    alert (`Bienvenida Zair. Exitos donde quieras que estes!! Un megaabrazo!!`)    
}

else if (nombre == "Indra" || nombre ==  "indra" || nombre == "INDRA") {

    alert (`Bienvenida Amore. Que tengas un lindo dia!!`)

}    

else if (nombre == "johan" || nombre ==  "Johan" || nombre == "JOHAN") {

    alert (`Bienvenido Johan. Gracias por el apoyo. Eres TU viejo. Te debo unas cervezas!!`)
}

else if (nombre == "miguelangel" || nombre ==  "Miguelangel" || nombre == "MIGUELANGEL") {

    alert (`Bienvenido Migue. Gracias por el apoyo, los consejos y las conversas viejo. Eres Genial!! Panorama: Probando condicionales en js. `)
}

else if (nombre == "Alexander" || nombre ==  "alexander" || nombre == "ALEXANDER") {

    alert (`ACCESO DENEGADO`)
    joda = prompt ("Escribe tu VERDADERO nombre")
    if (joda != "jacob" || joda != "Jacob" || joda != "JACOB") {

        alert (`Tu no te llamas ${nombre} , ni ${joda} . Tu te llamas es Jacob...`)
        
    }
    else {
    
        alert ("Que mas viejito... Yo aqui probando algunos condicionales en Javascript.")
    }

} 
else {
    
    alert (`Bienvenido(a) ${nombre} !`);
   
}





/* INTENTO DE "FUNCION SALUDO"  -_-  

alert ("Bienvenido(a)!");



let joda;

let nombre; 





funtcion saludo (nombre) {

    if ((nombre == "mary" || nombre ==  "Mary" ) || (nombre == "MARY")) {
        


        return ("Bienvenida Mary, ojala existieran mas personas como tu. Gracias por el apoyo. Eres Genial!!");
    }

    if (nombre == "Zair" || nombre ==  "zair" || nombre == "ZAIR") {

        return `Bienvenida Zair. Exitos donde quieras que estes!! Un megaabrazo!!`;    
    }

    if (nombre == "johan" || nombre ==  "Johan" || nombre == "JOHAN") {

    return `Bienvenido Johan. Gracias por el apoyo. Eres TU viejo. Te debo unas cervezas!!`;
    }

    if (nombre == "miguelangel" || nombre ==  "Miguelangel" || nombre == "MIGUELANGEL") {

        return `Bienvenido Migue. Gracias por el apoyo, los consejos y las conversas viejo. Eres Genial!! Panorama: Probando condicionales en js. `;
    }

    if (nombre == "Alexander" || nombre ==  "alexander" || nombre == "ALEXANDER") {

        return (`ACCEXO DENEGADO`);
        joda = prompt ("Escribe tu VERDADERO nombre");
        if (joda != "jacob" || joda != "Jacob" || joda != "JACOB") {

            return `Tu no te llamas ${nombre} ni ${joda} . Tu te llamas jacob...`;
        
        }
        {
    
            return "Que mas viejito... Yo aqui probando algunos condicionales en Javascript.";
    }

    } 
    else {
    
        return `Bienvenido ${nombre}`;
   
    }


}

alert (saludo (prompt ("Cual es tu nombre?")));
*/