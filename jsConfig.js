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

	//document.getElementById('myCanvas').height = 200; //!!!!!!!!Largura e Altura do Canvas (QUANDO O BANCO DE DADOS ESTIVER PRONTO, 200 SE TORNA O QUE FOI SALVO PELO USER DA ULTIMA VEZ)!!!!!!!!!!!	
	//document.getElementById('myCanvas').width = 200;
	atualizarMiniMapa();
}



function atualizarMiniMapa(){ //Iniciar com algumas receitas (Por enquanto apenas para desenvolvimento)
	//!!!!!!!!FUTURAMENTE ADICIONAR BOLINHA DE LOADING SEMELHANTE À DO YOUTUBE!!!!!

	//window.onload = document.getElementById('myCanvas').appendChild(spinner.el);

	//setTimeout( atualizarMiniMapa2(), 0);
	//document.getElementById('myCanvas').height = document.getElementById('xCanvas');	
	//document.getElementById('myCanvas').width = document.getElementById('yCanvas');

    var c = document.getElementById("myCanvas");//Canvas
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height); //Resetar Canvas a Cada Atualização (!Para não haver sobreposição de bolinhas!)

    var bar1 = new ldBar("#loading"); //loading
    var bar2 = document.getElementById('loading').ldBar;

    var numDeBolinhas = document.getElementById('numDeBolinhasId').value;

	let dist =  (150/50000)*document.getElementById('DistBolinhas').value;
    let iInit = 1; //Valor Inicial da contagem:
    if(document.getElementById("planoPolar").checked == true){//Se for Plano Polar
		
		//document.getElementById('receitasFeed').id = 'receitasFeed'+i;
		//setTimeout(loopPOsicao Receitas, 2); //talvez precise
		//ESTRUTURA PHI
		var r = numDeBolinhas; 			//(pixels) r Inicial-----------------------------------------------r inicial
		//const pi = Math.PI;//3.14159265358979323846264338327950288;
		var angulo = 1;//2*pi; //Angulo de rotação
		const initNumBolinhas = document.getElementById('initNumBolinhasId').value;

		for (let i = iInit; i <= numDeBolinhas; i++) {
			let j = i + parseInt(initNumBolinhas);
			var proporcao = document.getElementById('razaoNumId').value;//o; //PHI; user vai poder ajustar mais tarde nas configurações -------- AINDA TEM QUE CRIAR PÁGINA DE CONFIGURAÇÕES
			angulo = j * proporcao * 2 * Math.PI;
			let x = r*Math.cos(angulo);//coordenadas polares para coordenadas cartesianas
			let y = r*Math.sin(angulo);
			ctx.beginPath();
			ctx.arc(x+document.getElementById('myCanvas').height/2,y+document.getElementById('myCanvas').width/2,4.8,0,2*Math.PI);
			ctx.stroke();
			//document.getElementById('receitasFeed'+i).style.left = x; //x
			//document.getElementById('receitasFeed'+i).style.bottom = y;//y
			let rBolinhas = dist; // 50000 é o raio padrão das RECEITAS, 45 é o padrão para esse canvas... Regra de 3, 50000 -> 45
			r = Math.sqrt(j*rBolinhas); //j * A distância entre eles
			bar2.set((i-iInit) / (numDeBolinhas-iInit));//Função da Porcentagem
		}
	}else{//Se for plano cartesiano
		//xy,00,10,11,01,-11,-10,-1-1,0-1,1-1//20,21,22,12,02,-12,-22,-21,-20,-2-1,-2-2,-1-2,0-2,1-2,2-2,2-1//
		//x=0;
		//y=0;
		let contagem = 1;

		let xAnt = 0;
		let yAnt = 0;
	//	while (i <= numDeBolinhas) {
	//	distanciaCartesiana(ctx,x,y);
		dist/=3.2;

		var passos = 1;
		// coordenadas do centro da espiral
		var x = 10;
		var y = 10;
		let xCanvas = document.getElementById('xCanvas').value/2;
		let yCanvas = document.getElementById('yCanvas').value/2;
		let init = 1;
		let k = 1;
	    distanciaCartesiana(ctx, xCanvas, yCanvas);
        for (let i=1; i<numDeBolinhas; ++i){ //numDeBolinhas%8

        	for (var j = init; j < contagem  && k <numDeBolinhas; j++) {
        		distanciaCartesiana(ctx, xCanvas+dist*j, yCanvas+dist*k);      		       		
      		}
      		i+=j;
        	for (var j = init; j < contagem  && k <numDeBolinhas; j++) {
        		distanciaCartesiana(ctx, xCanvas+dist*k, yCanvas+dist*j);
        	}
      		i+=j;

        	for (var j = init; j < contagem  && k <numDeBolinhas; j++) {
        		distanciaCartesiana(ctx, xCanvas-dist*j, yCanvas-dist*k);        		
        	}
      		i+=j;
	       	for (var j = init; j < contagem && k <numDeBolinhas; j++) {
	       		distanciaCartesiana(ctx, xCanvas-dist*k, yCanvas-dist*j);
	       	}
      		i+=j;
	       	for (var j = init; j < contagem && k <numDeBolinhas; j++) {
	       		distanciaCartesiana(ctx, xCanvas+dist*j, yCanvas-dist*k);
	       	}
      		i+=j;
	       	for (var j = init; j < contagem && k <numDeBolinhas; j++) {
	       		distanciaCartesiana(ctx, xCanvas+dist*k, yCanvas-dist*j);
	       	}	
      		i+=j;       	
	       	for (var j = init; j < contagem && k <numDeBolinhas; j++) {
	       		distanciaCartesiana(ctx, xCanvas-dist*j, yCanvas+dist*k);
	       	}
      		i+=j;
	       	for (var j = init; j < contagem && k <numDeBolinhas; j++) {
	       		distanciaCartesiana(ctx, xCanvas-dist*k, yCanvas+dist*j);
	       	}
      		i+=j;
	       	distanciaCartesiana(ctx, xCanvas+dist*k, yCanvas+dist*k);
	       	distanciaCartesiana(ctx, xCanvas-dist*k, yCanvas+dist*k);
	       	distanciaCartesiana(ctx, xCanvas+dist*k, yCanvas-dist*k);
	       	distanciaCartesiana(ctx, xCanvas-dist*k, yCanvas-dist*k);
     	  	distanciaCartesiana(ctx, xCanvas, yCanvas+dist*k);
     	  	distanciaCartesiana(ctx,xCanvas+dist*k, yCanvas);        	
     	  	distanciaCartesiana(ctx,xCanvas, yCanvas-dist*k);
       		distanciaCartesiana(ctx,xCanvas-dist*k, yCanvas);
       		i+=8;
       		k++;
       		
        	contagem+=1;
            //g.drawLine(xCanvas/2+10*i,     yCanvas/2-10*i,         xCanvas/2+10*i,     yCanvas/2+10*(i+1));
            //g.drawLine(xCanvas/2+10*i,     yCanvas/2+10*(i+1), xCanvas/2-10*(i+1), yCanvas/2+10*(i+1));
            //g.drawLine(xCanvas/2-10*(i+1), yCanvas/2+10*(i+1), xCanvas/2-10*(i+1), yCanvas/2-10*(i+1));
            //g.drawLine(xCanvas/2-10*(i+1), yCanvas/2-10*(i+1), xCanvas/2+10*(i+1), yCanvas/2-10*(i+1));
            
           
        }
			




	//		x+=dist;
	//		i++; //00,10,11
		//}		 //00,00,
	}			 //_1

}

function distanciaCartesiana(ctx,x,y){
	ctx.beginPath();
	ctx.arc(x,y,4.8,0,2*Math.PI);//+100 é para centralizar com o canvas
	ctx.stroke();
}


$(document).ready(function(){ //Ao mudar algum INPUT vai mudar todo o miniMapa, Sem precisar do botão ATUALIZAR
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
	//Plano CARTESIANO

	$('input[name=planoName]').change( function() {
		if (document.getElementById('planoPolar').checked==true) { //PlanoPolar "true", Valor padrão para PlanoPolar
			resetMapa(true);
		}else{			
			document.getElementById('DistBolinhas').value = 12000;
	   		resetMapa(false);
		}
	});
	$('#distanciaX').change(function(){
		atualizarMiniMapa();
	});
	$('#distanciaY').change(function(){
		atualizarMiniMapa();
	})
	$('#xCanvas').change(function(){
		document.getElementById('myCanvas').width = document.getElementById("xCanvas").value;
		atualizarMiniMapa();
	});
	$('#yCanvas').change(function(){
		document.getElementById('myCanvas').height = document.getElementById("yCanvas").value;
		atualizarMiniMapa();
	});
	
});



function resetMapa(MudaPlano){ // RESET DAS CONFIGURAÇÕES DA ESTRUTURA DAS RECEITAS //MudaPlano é um boolean,quando "true" ele reseta o RADIO "planoPolar" também
	document.getElementById('QualPadrao').value = 1;
	document.getElementById("razaoNumId").value = (1+Math.sqrt(5))/2; 
	document.getElementById("razaoRangId").disabled = true;
	document.getElementById("razaoNumId").disabled = true;	
	document.getElementById('razaoRangId').value = document.getElementById('razaoNumId').value;
	document.getElementById('numDeBolinhasId').value = 250;
	document.getElementById('initNumBolinhasId').value = 1;
	if (MudaPlano) {		
		document.getElementById('DistBolinhas').value = 50000;
		document.getElementById('planoPolar').checked = true;
	}
	atualizarMiniMapa();
}
