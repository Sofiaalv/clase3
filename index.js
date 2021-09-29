//* En un club se va a realizar elecciones para elegir su próximo presidente, de la misma participan 2 partidos el A y el B. Se sabe que van a votar 10 personas. Crear un programa que determine que partido gano. Se debe mostrar por consola el resultado de la elección.//

for( let i = 0; i <10 ; i++){
    
    let nombreUsuario = prompt("Ingresar nombre");
    let votoAb = prompt("Ingresar A o B");

    if( votoAb == "A" || votoAb == "a"){
        console.log("Usuario" + nombreUsuario + "Voto A");
    }
    else if( votoAb =="B" || votoAb == "b"){
        console.log("Usuario" + nombreUsuario + "Voto B");
    }
    
    else{
        console.log("Voto incorrecto");
        break;
    }

    console.log( i );


    if(i == 10){
        alert("Votación completa")
        break;
    }
}