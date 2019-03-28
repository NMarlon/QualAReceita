//JavaScript COMPLETO - Neste Arquivo contém todos os efeitos e estilos, mas pode PREJUDICAR PERFORMANCE
//jsOtimizado.js - Neste só tem as funções fundamentais para o funcionamento do site. O User pode escolher isso nas configurações.


//document.addEventListener('keyup', EnterTab);
//function EnterTab(inputPesq,Evento){//Ao precionar Enter, Pesquisa
//		if(Evento.keyCode == 13){		
//
//			document.getElementById(inputPesq).focus();
//			window.location.reload();
//		}
//
//	}

function MoverFundo(){
	document.onmousedown = function(e){

	 // da um geito de pegar a posicao do mouse aqui ou usa e.pageX, ou e.screenX ou outra
	//mouse = funcao_pega_posicao_do_mouse(e);

	//este elemento é o que tem imagem de fundo
	//document.body.scrollTop = event.clientX+"px";
	scrollX = event.clientX+"px";
	document.body.scrollLeft =  event.clientY+"px";
	}

}


//document.addEventListener("mousemove", MoverImagemBackground);
//function MoverImagemBackground(){
//	var el = document.getElementsByClassName("receitas");
//	var i = el.length;
//	while (i--){		
//		el[i].addEventListener("mousemove", (e) => {
//			el.style.backgroundPositionX = -event.offsetX + "px";
//			el.style.backgroundPositionY = -event.offsetY + "px";
//		});	
//	}	
//	var closeIcons = document.getElementsByClassName('receitas');
	
	
//
	//el.addEventListener("mousemove", (e) => {
	//	el.style.setProperty('--x', -e.offsetX + "px");
	//	el.style.setProperty('--y', -e.offsetY + "px");
	//});
//}

function initReceitas(){ //Iniciar com algumas receitas (Por enquanto apenas para desenvolvimento)
	var numDeReceitas = 1000;
	loopPosicaoReceitas();// Ainda Arrumar

	//var objDiv = document.getElementById("HomePrincipal");
	//objDiv.scrollTop = objDiv.scrollHeight;

	//var t = document.getElementById('razao');                 // Create a <li> node
	//var textnode = document.createTextNode("Hello World");         // Create a text node
	//t.appendChild(textnode); 
	for (var i = 2; i <= numDeReceitas; i++) { //Adicionar mais receitas //Só para fins de desenvolvimento		
		
		var receitasFeed = document.getElementById('receitasFeed1');  
		var clone = receitasFeed.cloneNode(true);
		document.getElementById('HomePrincipal').appendChild(clone); 
		document.getElementById('receitasFeed1').id = 'receitasFeed'+i;
	}
	document.getElementById('HomePrincipal').insertBefore(document.getElementById('receitasFeed1'), document.getElementById('receitasFeed2')); //receitas1 sempre fica no final, ao fazer o código da estrutura, o 'receitasFeed1' fica de fora  e torto.. Por isso todas as receitas precisam estar em ordem crescente...

	//document.getElementById('receitasFeed').id = 'receitasFeed'+i;
	//setTimeout(loopPOsicao Receitas, 2); //talvez precise
	//ESTRUTURA PHI
	var r = numDeReceitas; 			//(pixels) r Inicial-----------------------------------------------r inicial
	const phi = (1+Math.sqrt(5))/2;//1.618033988749895;//
	//const pi = Math.PI;//3.14159265358979323846264338327950288;
	var angulo = 1;//2*pi; //Angulo de rotação
	let velocProporcao = 0.0003;//Apenas para teste
	let o = 1.55;
	//	window.setInterval(() => {
		o = o + velocProporcao;
		for (let i = 1; i <= numDeReceitas; i++) {
			let j = i + 20;
			var proporcao = phi;//o; //PHI; user vai poder ajustar mais tarde nas configurações -------- AINDA TEM QUE CRIAR PÁGINA DE CONFIGURAÇÕES
			angulo = j * proporcao * 2 * Math.PI;
			let x = r*Math.cos(angulo)+'px';//coordenadas polares para coordenadas cartesianas
			let y = r*Math.sin(angulo)+'px';
			document.getElementById('receitasFeed'+i).style.left = x; //x
			document.getElementById('receitasFeed'+i).style.bottom = y;//y

			r = Math.sqrt(j*50000); //50000 é para diferenciar os 
	
		}

  		//t.removeChild(t.childNodes[0]);
		//textnode = document.createTextNode(angulo);
		//t.appendChild(textnode,document.getElementById('razao'));  

		if (o > 5 || o < 0) {
			velocProporcao *= (-1);
		}

	//}, 1000/60);
}

function loopPosicaoReceitas(){

}


//function posicaoReceitasjs(){
//
//	var elementStyle = document.getElementById("receitasFeed").style;  //Para a posição das receitas no Feed
//
//	var i = 0;
//	var idReceitaFeed = i;
//	//document.getElementById("receitasFeed").style.background-color = "blue";
//	//document.getElementById("receitasFeed").style.background = "blue";
//	document.body.style.background = "blue";
//}