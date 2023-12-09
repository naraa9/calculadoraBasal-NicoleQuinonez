const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        if(DATO<=30){
            let mantenimiento = flujo*1.5;
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        }
        else {
            FLU.innerHTML="- SC*1500= "+Math.round(flujo*1500)+"cc/hr";
            MAN.innerHTML="- SC*2000= "+Math.round(flujo*2000)+"cc/hr  ";
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } 
    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

    function calcFlujo(peso){
        if(peso<=30){
           return menorA30(peso); 
        }
        else if(peso>30){
            return((peso*4)+7)/(Number(peso)+90);
           
        }
    }
    function menorA30(peso){
        let resto = peso;
        let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo += aux*1;
            resto -= aux;
        } 
        if (resto>10){
            let aux = resto-10;
            flujo += aux*2;
            resto -= aux;
        }
        flujo += resto*4;
        return flujo;
    }

