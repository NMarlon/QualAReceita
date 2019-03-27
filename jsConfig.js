//var script = document.createElement('script');  //JQUERY import
//script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);



function iniciar(){
	switch(document.getElementById('QualPadrao').value){
		case '1':
			document.getElementById("razaoNumId").value = (1+Math.sqrt(5))/2; //PHI 1.618033988
			document.getElementById("razaoNumId").disabled = true;		
	   		document.getElementById("razaoRangId").disabled = true;	   		
			document.getElementById('razaoRangId').value = document.getElementById('razaoNumId').value;
	   	break;
		case '2':
			document.getElementById("razaoRangId").disabled = false;		
			document.getElementById("razaoNumId").disabled =  false;
		break;
		default:
		alert('ERRO AO INICIAR, #QualPadrao, jsConfig.js linha: 9... Phi, outros ou o que?');
	}
	atualizarMiniMapa();
}



function atualizarMiniMapa(){ //Iniciar com algumas receitas (Por enquanto apenas para desenvolvimento)
	//!!!!!!!!FUTURAMENTE ADICIONAR BOLINHA DE LOADING SEMELHANTE À DO YOUTUBE!!!!!

	//window.onload = document.getElementById('myCanvas').appendChild(spinner.el);

	//setTimeout( atualizarMiniMapa2(), 0);
	

    var c = document.getElementById("myCanvas");//Canvas
    var ctx = c.getContext("2d");

    var bar1 = new ldBar("#loading"); //loading
    var bar2 = document.getElementById('loading').ldBar;
   

	ctx.clearRect(0, 0, c.width, c.height); //Resetar Canvas a Cada Atualização (!Para não haver sobreposição de bolinhas!)

	var numDeBolinhas = document.getElementById('numDeBolinhasId').value;
	//document.getElementById('receitasFeed').id = 'receitasFeed'+i;
	//setTimeout(loopPOsicao Receitas, 2); //talvez precise
	//ESTRUTURA PHI
	var r = numDeBolinhas; 			//(pixels) r Inicial-----------------------------------------------r inicial
	//const pi = Math.PI;//3.14159265358979323846264338327950288;
	var angulo = 1;//2*pi; //Angulo de rotação
	const initNumBolinhas = document.getElementById('initNumBolinhasId').value;
	let iInit = 1;//Valor Inicial da contagem:
	for (let i = iInit; i <= numDeBolinhas; i++) {
		let j = i + parseInt(initNumBolinhas);
		var proporcao = document.getElementById('razaoNumId').value;//o; //PHI; user vai poder ajustar mais tarde nas configurações -------- AINDA TEM QUE CRIAR PÁGINA DE CONFIGURAÇÕES
		angulo = j * proporcao * 2 * Math.PI;
		let x = r*Math.cos(angulo);//coordenadas polares para coordenadas cartesianas
		let y = r*Math.sin(angulo);
		ctx.beginPath();
		ctx.arc(x+100,y+100,4.8,0,2*Math.PI);
		ctx.stroke();
		//document.getElementById('receitasFeed'+i).style.left = x; //x
		//document.getElementById('receitasFeed'+i).style.bottom = y;//y
		let rBolinhas = (45/50000)*document.getElementById('DistBolinhas').value; // 50000 é o raio padrão das RECEITAS, 45 é o padrão para esse canvas... Regra de 3, 50000 -> 45
		r = Math.sqrt(j*rBolinhas); //j * A distância entre eles
		bar2.set((i-iInit) / (numDeBolinhas-iInit));
	}

}

$(document).ready(function(){ //Ao mudar o tipo de padrão (#QualPadrao), muda o (#razaoNumId) 
    $('#QualPadrao').change(function(){
    	switch(document.getElementById('QualPadrao').value) {
    		case '1':
    			const phi = (1+Math.sqrt(5))/2;
				document.getElementById("razaoNumId").value = phi;
   				document.getElementById("razaoRangId").disabled = true;
				document.getElementById("razaoNumId").disabled = true;
    		break;
    		case '2':
				document.getElementById("razaoNumId").disabled =  false;				
				document.getElementById('razaoRangId').disabled = false;
    		break;
    		default:
    	}
	   	$('#razaoNumId').change(function(){
			document.getElementById('razaoRangId').value = document.getElementById('razaoNumId').value;
	   		atualizarMiniMapa();
	   	});
	   
    });
    $('#DistBolinhas').change(function(){
	   	atualizarMiniMapa();
	});
	$('#numDeBolinhasId').change(function(){
	   	atualizarMiniMapa();
	});
	$('#initNumBolinhasId').change(function(){
	   	atualizarMiniMapa();
	});

	$('#razaoRangId').change(function(){
		document.getElementById('razaoNumId').value = document.getElementById('razaoRangId').value;
	   	atualizarMiniMapa();
	});
});



function resetMapa(){
	document.getElementById('QualPadrao').value = 1;
	document.getElementById("razaoNumId").value = (1+Math.sqrt(5))/2; 
	document.getElementById("razaoRangId").disabled = true;
	document.getElementById("razaoNumId").disabled = true;	
	document.getElementById('razaoRangId').value = document.getElementById('razaoNumId').value;
	document.getElementById('DistBolinhas').value = 50000;
	document.getElementById('numDeBolinhasId').value = 250;
	document.getElementById('initNumBolinhasId').value = 1;


	atualizarMiniMapa();
}
