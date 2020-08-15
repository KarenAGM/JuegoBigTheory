var opcion = ['piedra','papel','tijera','lagarto','spock'];



document.getElementById('boton').addEventListener('click',(e)=>{
    var respUser = document.getElementById('res').value;
    console.log(respUser);
        
        var x = Math.floor(Math.random()*(5)+0);

        console.log(x);

        var select = opcion[x];

        console.log(select);


        switch (respUser){
            case 'tijera':
                if((select == 'papel') || (select == 'lagarto')){
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu ganas';
                }else if((select == 'spock') || (select == 'piedra')){
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu pierdes';
                }else{
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Empate';
                }
                break;

            case 'papel':
                if((select == 'piedra') || (select == 'spock')){
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu ganas';
                }else if((select == 'tijera') || (select == 'lagarto')){
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu pierdes';
                }else{
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Empate';
                }
                break;

            case 'piedra':
                if((select == 'lagarto') || (select == 'tijera')){
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu ganas';
                }else if((select == 'papel') || (select == 'spock')){
                    document.getElementById('compu').innerHTML = `Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu pierdes';
                }else{
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Empate';
                }
                break;

            case 'spock':
                if((select == 'tijera') || (select == 'piedra')){
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu ganas';
                }else if((select == 'lagarto') || (select == 'papel')){
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu pierdes';
                }else{
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Empate';
                }
                break;

            case 'lagarto':
                if((select == 'papel') || (select == 'spock')){
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu ganas';
                }else if((select == 'piedra') || (select == 'tijera')){
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Tu pierdes';
                }else{
                    document.getElementById('compu').innerHTML=`Su opcion ${respUser} vs ${select}`;
                    document.getElementById('text').innerHTML='Empate';
                }
                break;
        }

        
        /*
        if((respUser === 'tijera' ) && (select === 'papel' || 'lagarto')){
            console.log('Tu ganas');
        }
        
        else if((respUser === 'tijera' ) && (select === 'spock' || 'piedra')){
            console.log('Tu pierdes');
        } 
        else {
            console.log('Empate');
        }
        */
    e.preventDefault();
});