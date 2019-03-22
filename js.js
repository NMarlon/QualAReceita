

//document.addEventListener('keyup', EnterTab);
//function EnterTab(inputPesq,Evento){//Ao precionar Enter, Pesquisa
//		if(Evento.keyCode == 13){		
//
//			document.getElementById(inputPesq).focus();
//			window.location.reload();
//		}
//
//	}

function sobreFunction() { //Abrir PopUp do Contato do Menu Superior Esquerdo
    var popup = document.getElementById("sobre");
    popup.classList.toggle("show");
}

function initReceitas(){ //Iniciar com algumas receitas (Por enquanto apenas para desenvolvimento)
	var numDeReceitas = 1000;

	var t = document.getElementById('razao');                 // Create a <li> node
	var textnode = document.createTextNode("Hello World");         // Create a text node
	t.appendChild(textnode); 
	for (var i = 1; i <= numDeReceitas; i++) { //Adicionar mais receitas //Só para fins de desenvolvimento		
		
		var receitasFeed = document.getElementById('receitasFeed');  
		var clone = receitasFeed.cloneNode(true);
		document.getElementById('Home').appendChild(clone); 
		document.getElementById('receitasFeed').id = 'receitasFeed'+i;

	}
	document.getElementById('receitasFeed').id = 'receitasFeed0';
	//setTimeout(loopPOsicao Receitas, 2); //talvez precise
	//ESTRUTURA PHI
	var rinit = Math.sqrt(numDeReceitas); //(pixels) r Inicial-----------------------------------------------r inicial
	var r = rinit;
	const phi = (1+Math.sqrt(5))/2;//1.618033988749895;//
	//const pi = Math.PI;//3.14159265358979323846264338327950288;
	var angulo = 1;//2*pi; //Angulo de rotação
	let velocProporcao = 0.0003;//Apenas para teste
	let o = 1.55;
//	window.setInterval(() => {
		o = o + velocProporcao;
		for (let i = 0; i <= numDeReceitas; i++) {
			var proporcao = phi;//o; //PHI; user vai poder ajustar mais tarde nas configurações -------- AINDA TEM QUE CRIAR PÁGINA DE CONFIGURAÇÕES
			var veloc_r = 1; //Quanto r vai crescer --- User edita também nas configurações
			let x = r*Math.cos(angulo)+'px';//coordenadas polares para coordenadas cartesianas
			let y = r*Math.sin(angulo)+'px';
			document.getElementById('receitasFeed'+i).style.left = x; //x
			document.getElementById('receitasFeed'+i).style.bottom = y;//y
			angulo = proporcao * i * 2 * Math.PI;
			r += veloc_r;
		}

  		t.removeChild(t.childNodes[0]);
		textnode = document.createTextNode(angulo);
		t.appendChild(textnode,document.getElementById('razao'));  
		rinit;
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