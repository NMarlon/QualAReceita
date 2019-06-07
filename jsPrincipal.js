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


	//}, 1000/60);
}

function loopPosicaoReceitas(){

}

//!!!!!!!!! 	FUNÇÃO MOVER COM MOUSE     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//document.getElementById("body").onmousemove = function(event) {myFunction(event)};
//
//function myMoveFunction(e) {
//  var x = e.clientX;
//  var y = e.clientY;
//  var coor = "Coordinates: (" + x + "," + y + ")";
//  document.getElementById("coord").innerHTML = coor;
//}



//$( "#body" ).mousemove(function( event ) {
//  //var msg = "Handler for .mousemove() called at ";
//  //msg += event.pageX + ", " + event.pageY;
//  //$( "#coord" ).append( "<div>" + msg + "</div>" );
//
//  var coor = "Coordinates: (" + event.pageX + "," + event.pageY + ")";
//  document.getElementById("coord").innerHTML = coor;
//});




function myMoveFunction(event) {
	var x = event.clientX;
	var y = event.clientY;
	var coor = "X coords: " + document.getElementById('ArrastarFundo').scrollLeft + ", Y coords: " + document.getElementById('ArrastarFundo').scrollTop;
	document.getElementById("coord").innerHTML = coor;
	wdocument.getElementsByTagName('html').scrollLeft = x;
	//document.getElementsByTagName('html').scrollTop = y;
	//window.scrollTo(x,y);
	//document.getElementById('html').scrollIntoView();
}

function clearCoor() {
  document.getElementById("coord").innerHTML = "";
}

//$(function() { 
//    $("#ArrastarFundo").draggable(); 
//});



//9ªTentativa
//document.addEventListener( 'mousedown', onMouseDown, false );
//
//function onMouseDown(e) {
//    e.preventDefault(); //prevents browser to follow links or move images
//    // code to execute on mouse click
//    onMouseMove(e);
//    onMouseUp(e);
//}
//
//document.addEventListener( 'mousemove', onMouseMove, false );
//
//function onMouseMove(e) {
//    // code to execute on mouse mouse move
//    var x = event.clientX;
//	var y = event.clientY;
//	window.scrollTo(x,y);
//}
//
//document.addEventListener( 'mouseup', onMouseUp, false );
//
//function onMouseUp(e) {
//    // code to execute on mouse mouse up
//}
//$('a').click(function() {
//   window.location = this.href;
//});

//$('#HomePrincipal').mousedown(function(ev){ //Não faz nada, deveria mover o div principal
//    console.log(ev.target.id+' pressed');
//    if ( !$(ev.target).data("ui-draggable") ) {
//        $(ev.target).draggable();
//        $(ev.target).trigger(ev);
//    }
//});
//$("#HomePrincipal").draggable();



//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_scrolltop_draw_svg Vai ser útil mais tarde quando for carregar as receitas, ao chegar Num limite de scroll, ele vai carregar mais receitas






////jsPrincipal.js:158 Uncaught TypeError: Cannot set property 'onmousedown' of null
//dragElement(document.getElementById("ArrastarFundo"));
//
//function dragElement(elmnt) {
//  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//  if (document.getElementById("ArrastarFundo")) {
//    /* if present, the header is where you move the DIV from:*/
//    document.getElementById("ArrastarFundo").onmousedown = dragMouseDown;
//  } else {
//    /* otherwise, move the DIV from anywhere inside the DIV:*/
//    elmnt.onmousedown = dragMouseDown;
//  }
//
//  function dragMouseDown(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // get the mouse cursor position at startup:
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    document.onmouseup = closeDragElement;
//    // call a function whenever the cursor moves:
//    document.onmousemove = elementDrag;
//  }
//
//  function elementDrag(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // calculate the new cursor position:
//    pos1 = pos3 - e.clientX;
//    pos2 = pos4 - e.clientY;
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    // set the element's new position:
//    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//  }
//
//  function closeDragElement() {
//    /* stop moving when mouse button is released:*/
//    document.onmouseup = null;
//    document.onmousemove = null;
//  }
//}
//


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