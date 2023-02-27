// Esse código javascript vai capturar o valor inserido na caixa de inserção do html e definir o valor como a variável "número misterioso". Quando a pessoa usuária clicar no botão revelar número que está no html, ele vai executar a seguir: 

let numeroMisterioso = document.getElementById('saberNumero');

function revelarNumero (){
    if((numeroMisterioso.value % 2) == 0){
        alert('esse número é par!');
    } else{
        alert('esse número é impar!');
    }
}



