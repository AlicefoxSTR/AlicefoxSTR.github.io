for (var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';

}

var hod = 0;

//создаем клики
document.getElementById('game').onclick = function(event){
    console.log(event);
    if (event.target.className== 'block'){
        if (hod%2==0){
            event.target.innerHTML = 'x';
        }
        else {
            event.target.innerHTML = '0';
        }
        hod++;
        checkWinner();
    }
}

//завершение игры (проверка условия выигрыша)
function checkWinner() {
    //собираем все блоки в 1 переменную,чтобы 
    var allblock = document.getElementsByClassName('block');
    //console.log(allblock);
    //проверки
    //крестики
    if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' &&allblock[2].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' &&allblock[5].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' &&allblock[8].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' &&allblock[6].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' &&allblock[7].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' &&allblock[8].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' &&allblock[8].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }
    if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' &&allblock[6].innerHTML=='x'){
        alert('Темная сторона силы побеждает!');
    }


    //нолики
    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' &&allblock[2].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' &&allblock[5].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' &&allblock[8].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' &&allblock[6].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' &&allblock[7].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' &&allblock[8].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' &&allblock[8].innerHTML=='0'){
        alert('Мятежники победили!');
    }
    if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' &&allblock[6].innerHTML=='0'){
        alert('Мятежники победили!');
    }
 
}


