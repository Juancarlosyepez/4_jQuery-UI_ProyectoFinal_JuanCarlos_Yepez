$(document).ready(function(){
	$(function(){
  var $jittery = $('.jiterry'),
      aText    = $jittery.text().split(''),
      letters = '';
  
  for(var i = 0; i < aText.length; i++){
    letters += '<span>'+aText[i]+'</span>';
  }
  
  $jittery.empty().append(letters);
  
  $.each($('span', $jittery), function(i){
    $(this).css('animation-delay', '-'+i+'70ms');
  });
});

	nuevojuego();

		$("#Fichas div").draggable({
			stack: "#Fichas div",

			drag:function(event,ui){
				$("[id^=ficha]").addClass("threed");	
				$("#mensaje").removeClass("text2",0);
			},
			stop:function(event,ui){
					
				$("[id^=ficha]").removeClass("threed");
				
				var posx=parseInt(ui.offset.left);
				var posy=parseInt(ui.offset.top);
				mensaje="Posicion X:"+posx+"-"+"Posicion Y:"+posy;
				$("#posicion").html(mensaje)
			},		
		});
  
	$(".tablero").droppable({
		accept:"#Fichas div",
		hoverClass:'tableroHover',
		drop:function(event,ui){
		//$("[id^=ficha]").effect("bounce",0.1);
			var str = ui.draggable.attr("id"); 
			var jugador=str.substr(0,6);
			color="";
   			//console.log(jugador);
   			if (jugador == "fichaR"){
   					jugador="Jugador Azul"
					
   					$("#mensaje").switchClass("textRed","textBlue",1000,"easeOutBounce");
   			}else{
   					jugador="Jugador Rojo"
   				
   				
   				$("#mensaje").switchClass("textBlue","textRed",1000,"easeOutBounce");
   			}
	
			
			$("#mensaje").html("<strong>Le Toca Mover Ficha al  "+jugador+"!!!</strong>");
			
		
			console.log($("#mensaje").attr("class")); 

			
		}

	});


	function nuevojuego(){
		var fichaRed="";
		var tablaRed="";
		var fichaBlue="";
		var tablaBlue="";

		for (var i = 1; i <= 12; i++) {

			fichaRed=$("#fichaRed"+i);
			tablaRed="#red"+i;
			fichaBlue=$("#fichaBlue"+i);
			tablaBlue="#blue"+i;

			fichaRed.position({
				my:"center",
				at:"center",
				of:tablaRed,
			});

			fichaBlue.position({
				my:"center",
				at:"center",
				of:tablaBlue,
			});
		}	
	}

		$("#boton1").click(function(){
			nuevojuego()
			$("#mensaje").html("<strong>Comenzar Juego!!!</strong>");
			$("#mensaje").addClass("text2");
			console.log($("#mensaje").attr("class")); 

		});


});

