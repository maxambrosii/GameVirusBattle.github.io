window.onload = function() {

//=================================== My playing field

for (var i = 0; i < 25; i++) {


        document.getElementById('gameMyBlocks').innerHTML += '<div class="blockMy"></div>';  // Создаем поле игрока

    }	


    var MatrixForKomputer = [];


    for (var i = 0; i < 7; i++) {

    	MatrixForKomputer[i] = new Array(7);
    	
    }



  var allblockMy = document.getElementsByClassName('blockMy') ;


  allblockMy[0].innerHTML = " <img src='computer.png'>";

var PositionI=0;


document.getElementById('gameMyBlocks').onclick = function(event){

    	
    	console.log(event);       
    	
    	if (event.target.className == 'blockMy'){
     
       
    		event.target.innerHTML = 'x';
PositionI = 0;
    		for (var i=0; i<25; i++) {

    			if (allblockMy[i].innerHTML == 'x') PositionI=i;
    		}


alert('PositionI = ' + PositionI);




    }
}
    








//==================================== Playing field apponnent


var cislo = 1;
var kord = 0 ;
while (kord < 5)
{ 
var n = 6;
var mas = new Array(n);
var masCoordinates = new Array(n);

var k = 0;



mas[0]=0;

var matrix = [];
for(var i=0; i<7; i++) {
    matrix[i] = new Array(7);
}

for (var i = 0; i < 7; i++) {

	for (var j = 0; j < 7; j++) {
		 matrix[i][j]=9;
	}
}


while (k < 5 ) {

	k = 0;
	StringCuter = '';
for (var i = 1; i < 6; i++) {
	
	for (var j = 1; j < 6; j++) {

if (matrix[i][j]!=0 && k != 5 ){
		
		matrix[i][j]=Math.floor(Math.random() * 2);

		if (matrix[i][j] == '1'){
			    matrix[i-1][j-1] = 0;
         		matrix[i-1][j] = 0;
         		matrix[i-1][j+2] = 0;
         		matrix[i][j-1] = 0;
         		matrix[i][j+1] = 0;
         		matrix[i+1][j-1] = 0;
         		matrix[i+1][j] = 0;
         		matrix[i+1][j+1] = 0;
         		k++;
		} 
} else {
	matrix[i][j]=0;
}
		


	}
}
};


var position = 0;



for (var i = 1; i < 6; i++) {
  for (var j = 1; j < 6; j++) {

 	mas[position] = matrix[i][j]; 
    position++;

  }

}


	for (var i = 0; i < position; i++) {

  if (mas[i] == 1) { 

  	masCoordinates[kord] = i; 
  
  	kord++; 

  } 
   
   }


if (kord < 5) { kord = 0; }


}

	for (var i = 0; i < 25; i++) {


        document.getElementById('game').innerHTML += '<div class="block"></div>';

    }	

   

    document.getElementById('game').onclick = function(event){
    	
    	console.log(event);
        

        var allblock = document.getElementsByClassName('block');
         var coord = 0;

         var masCoordinatesHit = new Array(6);
         
        for (var i = 0; i < 5; i++) {
        	    masCoordinatesHit[i] = -1; 
        	}

    	if (event.target.className == 'block'){
     
        
    		event.target.innerHTML = 'x';
         
         for (var i = 0; i < 25 ; i++) {
 
         	if ( allblock[i].innerHTML == 'x' ) {
                
         		if( (i == masCoordinates[0] || i == masCoordinates[1] || i == masCoordinates[2] || i == masCoordinates[3] || i == masCoordinates[4]) 
         			)
         		{
         			var question = '4'; //prompt('Сколько будет 2 + 2 = ');

         			if (question == '4'){


         			event.target.innerHTML = " <img src='HIT.png'>";
         			masCoordinatesHit[coord] = i;
         			coord++;

                
                } else {

                        event.target.innerHTML = 'x';
                    
                       }

         		} else {

         			event.target.innerHTML = " <img src='NoHIT.png'>";

         		 }
         	  } 
           }	
        }
    }
}

//=============================================================



