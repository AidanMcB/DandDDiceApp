
function d20 () {
    document.getElementById("d20").innerHTML = Math.floor((Math.random() * 20) + 1 );
}
function d12 () {
    document.getElementById("d12").innerHTML = Math.floor((Math.random() * 12) + 1 );
}
function d10 () {
    document.getElementById("d10").innerHTML = Math.floor((Math.random() * 10) + 1 );
}

function d8 () {
    document.getElementById("d8").innerHTML = Math.floor((Math.random() * 8) + 1 );
}

function d6 () {
    document.getElementById("d6").innerHTML = Math.floor((Math.random() * 6) + 1 );
}

function d4 () {
    document.getElementById("d4").innerHTML = Math.floor((Math.random() * 4) + 1 );
}

function convert(){
    var n1 = parseFloat(document.getElementById("c1").value);
    var n2 = document.getElementById("cT1").value;
    var n3 = document.getElementById("cT2").value;

    if(n2 == 'cp' && n3 === 'cp2'){
        document.getElementById("cur").value = n1;
    }
    if(n2 === 'cp' && n3 === 'sp2'){
        document.getElementById("cur").value = n1 / 10;
    }
    if(n2 === 'cp' && n3 === 'ep2'){
        document.getElementById("cur").value = n1 / 50;
    }
    if(n2 === 'cp' && n3 === 'gp2'){
        document.getElementById("cur").value = n1 / 100;
    }
    if(n2 === 'cp' && n3 === 'pp2'){
        document.getElementById("cur").value = n1 / 1000;
    }


    if(n2 == 'sp' && n3 === 'cp2'){
        document.getElementById("cur").value = n1 * 10;
    }
    if(n2 === 'sp' && n3 === 'sp2'){
        document.getElementById("cur").value = n1;
    }
    if(n2 === 'sp' && n3 === 'ep2'){
        document.getElementById("cur").value = n1 / 5;
    }
    if(n2 === 'sp' && n3 === 'gp2'){
        document.getElementById("cur").value = n1 / 10;
    }
    if(n2 === 'sp' && n3 === 'pp2'){
        document.getElementById("cur").value = n1 / 100;
    }


    if(n2 == 'ep' && n3 === 'cp2'){
        document.getElementById("cur").value = n1 * 50;
    }
    if(n2 === 'ep' && n3 === 'sp2'){
        document.getElementById("cur").value = n1 * 5;
    }
    if(n2 === 'ep' && n3 === 'ep2'){
        document.getElementById("cur").value = n1;
    }
    if(n2 === 'ep' && n3 === 'gp2'){
        document.getElementById("cur").value = n1 / 2;
    }
    if(n2 === 'ep' && n3 === 'pp2'){
        document.getElementById("cur").value = n1 / 20;
    }


    if(n2 == 'gp' && n3 === 'cp2'){
        document.getElementById("cur").value = n1 * 100;
    }
    if(n2 === 'gp' && n3 === 'sp2'){
        document.getElementById("cur").value = n1 * 10;
    }
    if(n2 === 'gp' && n3 === 'ep2'){
        document.getElementById("cur").value = n1 / 2;
    }
    if(n2 === 'gp' && n3 === 'gp2'){
        document.getElementById("cur").value = n1;
    }
    if(n2 === 'gp' && n3 === 'pp2'){
        document.getElementById("cur").value = n1 / 10;
    }


    if(n2 == 'pp' && n3 === 'cp2'){
        document.getElementById("cur").value = n1 * 1000;
    }
    if(n2 === 'pp' && n3 === 'sp2'){
        document.getElementById("cur").value = n1 * 100;
    }
    if(n2 === 'pp' && n3 === 'ep2'){
        document.getElementById("cur").value = n1 * 20;
    }
    if(n2 === 'pp' && n3 === 'gp2'){
        document.getElementById("cur").value = n1 * 10;
    }
    if(n2 === 'pp' && n3 === 'pp2'){
        document.getElementById("cur").value = n1;
    }
}  

function calculate() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var result = document.getElementById('operators').value;

    if(result === '+'){
       document.getElementById("result").value = input1 + input2;
    } 
    if(result === '-'){
        document.getElementById("result").value = input1 - input2;
     } 
     if(result === '*'){
        document.getElementById("result").value = input1 * input2;
     } 
     if(result === '/'){
        document.getElementById("result").value = input1 / input2;
     } 

}