/*cometarios igual que
en css cuando queres que sea
varias lineas*/

//cometarios solo en una linea






//FAVOR COLOCAR ESTE "SALUDO" COMO FUNCION
let joda;
alert ("Bienvenido");

let nombre = prompt ("Cual es tu nombre?");

if (nombre == "mary" || nombre ==  "Mary" || nombre == "MARY") {

    alert (`Bienvenida Mary, ojala existieran mas personas como tu. Gracias por el apoyo. Eres Genial!!`)
}

else if (nombre == "Zair" || nombre ==  "zair" || nombre == "ZAIR") {

    alert (`Bienvenida Zair. Exitos donde quieras que estes!! Un megaabrazo!!`)    
}

else if (nombre == "johan" || nombre ==  "Johan" || nombre == "JOHAN") {

    alert (`Bienvenido Johan. Gracias por el apoyo. Eres TU viejo. Te debo unas cervezas!!`)
}

else if (nombre == "miguelangel" || nombre ==  "Miguelangel" || nombre == "MIGUELANGEL") {

    alert (`Bienvenido Migue. Gracias por el apoyo, los consejos y las conversas viejo. Eres Genial!! Panorama: Probando condicionales en js. `)
}

else if (nombre == "Alexander" || nombre ==  "alexander" || nombre == "ALEXANDER") {

    alert (`ACCEXO DENEGADO`)
    joda = prompt ("Escribe tu VERDADERO nombre")
    if (joda != "jacob" || joda != "Jacob" || joda != "JACOB") {

        alert (`Tu no te llamas ${nombre} ni ${joda} . Tu te llamas jacob... JACOB!`)
        
    }
    else {
    
        alert ("Que mas viejito... Yo aqui probando algunos condicionales en Javascript.")
    }

} 
else {
    
    alert (`Bienvenido ${nombre}`);
   
}

