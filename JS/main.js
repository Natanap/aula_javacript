
function clicou (){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){

     window.open("https://loiane.training/curso/java-basico/"); // direciona para página em outra guia
    //window.location.href ="https://loiane.training/curso/java-basico/"; //direciona para a pagina na propria pagina // mais função html <button type="button" onclick="clicou()">Clique Aqui</button> <p id="agradecimento" onclick="redirecionar()"></p> 
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"   ;
}  

function voltar(elemento){
     elemento.innerHTML = "Passe o mouse aqui"  ;
    //document.getElementById("mousemove").innerHTML = "Passe a seta aqui";
}

function load(){

    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value); // seleciona uma das opções 
}
/*
function soma (n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar=true
    }else{
    validar=false
}
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log(validaIdade(idade));



function setReplace (frase,nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace ("Vai Japão", "Japão", "Brasil"))


var d = new Date();
alert(d.get()); // data getDate, get e qual a data ou número deseja

var count; // contador em for
for ( count= 0; count <=5 ; count ++){
     
    alert(count);
}


repetição while
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt ("Qual a sua idade?"); // recebe idade

if (idade >= 18){

    alert("maior de idade");
}else{
    alert("menor de idade") ;  
}

*/

/*
var frutas = [{nome:"maça", cor:"vermelha"} , {nome:"laranja", cor:"amarela"} ]
console.log(frutas);
alert(frutas[1].nome);// Dicionario


var lista = ["maça","pera", "laranja"];
lista.push("uva"); adiciona a lista
lista.pop(); // remove o último da lista

console.log(lista); // lista todos + adicionado número da lista[] 


//console.log(lista.toString()); //leva para uma string e exibe. Como [número] ele imprime apenas parte do  item da lista
//console.log(lista.join(" - ")) // troca a virgula no meio de exibição console
//console.log(lista.length); //Tamanho da lista em número real
//console.log(lista.reverse()); //mostra a lista em ordem reversa

//var nome ="Natan Alves"; //declara var
//var n1= 29 ;
//var n2= 10 ;
//var frase = "Japão é o melhor time do mundo";

//alert(nome+"tem"+idade+"anos");
//alert(idade+idade2); //exibe na tela por poup pup
//console.log(nome); 
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
*/