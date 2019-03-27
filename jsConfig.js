function iniciar(){
	atualizarMiniMapa();
}



function atualizarMiniMapa(){ //Iniciar com algumas receitas (Por enquanto apenas para desenvolvimento)
	const phi = (1+Math.sqrt(5))/2;//1.618033988749895;//
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
	var numDeBolinhas = document.getElementById('numDeBolinhasId').value;
	if (document.getElementById("QualPadrao").value==1) {
		document.getElementById("razaoNumId").value = phi;
		document.getElementById("razaoNumId").disabled = true;
	}else{
		document.getElementById("razaoNumId").disabled =  false;
	}


	//document.getElementById("")
	//var objDiv = document.getElementById("HomePrincipal");
	//objDiv.scrollTop = objDiv.scrollHeight;

	//var t = document.getElementById('razao');                 // Create a <li> node
	//var textnode = document.createTextNode("Hello World");         // Create a text node
	//t.appendChild(textnode); 
	for (var i = 1; i <= numDeBolinhas; i++) { //Adicionar mais receitas //Só para fins de desenvolvimento		

	//document.getElementById('receitasFeed').id = 'receitasFeed'+i;
	//setTimeout(loopPOsicao Receitas, 2); //talvez precise
	//ESTRUTURA PHI
	var r = numDeBolinhas; 			//(pixels) r Inicial-----------------------------------------------r inicial
	
	//const pi = Math.PI;//3.14159265358979323846264338327950288;
	var angulo = 1;//2*pi; //Angulo de rotação
	let velocProporcao = 0.0003;//Apenas para teste
	let o = 1.55;
	//	window.setInterval(() => {
		o = o + velocProporcao;
		for (let i = 1; i <= numDeBolinhas; i++) {
			let j = i ;
			var proporcao = phi;//o; //PHI; user vai poder ajustar mais tarde nas configurações -------- AINDA TEM QUE CRIAR PÁGINA DE CONFIGURAÇÕES
			angulo = j * proporcao * 2 * Math.PI;
			let x = r*Math.cos(angulo);//coordenadas polares para coordenadas cartesianas
			let y = r*Math.sin(angulo);
			ctx.beginPath();
			ctx.arc(x+100,y+100,4.8,0,2*Math.PI);
			ctx.stroke();
			//document.getElementById('receitasFeed'+i).style.left = x; //x
			//document.getElementById('receitasFeed'+i).style.bottom = y;//y

			r = Math.sqrt(j*45); //j * A distância entre eles

		}

		if (o > 5 || o < 0) {
			velocProporcao *= (-1);
		}

	//}, 1000/60);
	}	
}



function resetMapa(){

}
