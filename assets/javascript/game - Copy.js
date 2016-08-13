

	$( document ).ready(function() {

		var buttonID = ["purple", "green", "red", "blue"];
		var divID = ["gameTitle", "rule", "randomSum", "status", "text", "total"];
		var userTotal, gameTotal, wins, losses, value;
		var bodyID = ["cont", "mainRow1", "mainRow2", "mainRow3", "mainCol1", "mainCol2", "mainCol3", "display", "buttons", "score"]
	
	for (var i = 0; i < 4 ; i++) {	
			if (i <3){		
			var row = $('<div id=' + i + '>');
			row.addClass('row');
		    $("#display").append(row);
			var div = $('<div id=' + divID[i] + '>');
			div.html("M & M Collector!")
		    $("#" + i).append(div);	
			} else {
			var div = $('<div id=' + divID[i] + '>');
			div.html("M & M Collector!")
		    $("#2").append(div);	
			}		   	    		    
	};	
	for (var i = 0; i < buttonID.length; i++) {
			var button = $('<button id=' + buttonID[i] + '>');
		    button.addClass('btn-group btn btn-default btn-lg');
		  	button.attr('value', generateValue());
		    $("#buttons").append(button);		    
	};
	for (var i = 4; i < 6 ; i++) {
			var row = $('<div id=' + i + '>');
			row.addClass('row');
		    $("#score").append(row);
			var div = $('<div id=' + divID[i] + '>');
			div.html("M & M Collector!")
		    $("#" + i).append(div);		    
	};

	initializeMM ();

	$('.btn-group').on('click', function() {
	    
	    userTotal= addValue(parseInt(this.value));
	    $('#total').html(userTotal);
	    compare(userTotal); 	    
		});   		
	});

	function initializeMM () {
        wins = 0;
        losses = 0;
        value = 0;
        userTotal = 0;
        gameTotal = generateTotal();

        $('#rule').html( "<br> <br> <br> <br> you will be given a random number at the start of the game. <br> " + "<br>  There are four m & m below. By clicking on a m & m you will add a specific amount of points to your total score. <br>" + " <br> you win the game by matching your total score to random number, you lose the game if your total score goes above the random number. <br>" + " <br> The value of each m & m is hidden from your until you click on it. " + "<br> Each time when the game starts, the game will change the values of each m & M." );	       
        $('#randomSum').html(gameTotal);
        $('#status').html("Wins " + wins + "<br> Losses " + losses);
        $('#text').html("Your total score is:");
        $('#total').html(userTotal);
    }

    function resetMM () {
    	value = 0;
    	userTotal = 0;
        gameTotal = generateTotal();
                
        $('#randomSum').html(gameTotal);
        $('#status').html("Wins " + wins + "<br> Losses " + losses);
        $('#total').html(userTotal);
    }

    function generateValue(){
   		return (Math.floor(Math.random()*11)+1);
	}

	function generateTotal(){
			return (Math.floor(Math.random()*111)+19);
	}

	function addValue(newValue) {
			return userTotal = userTotal + newValue ;			
	}

	function compare(totalValue){ 
		
		if (totalValue == gameTotal){
			wins ++ ;
			var gameOn = confirm("You Win !!!  Would you like to continue ?" );
			if(gameOn){
				resetMM();
			}else{
				initializeMM();
			}
		}else if (totalValue > gameTotal){
			losses ++;
			var gameOn = confirm("You Lose !!!  Would you like to continue ?" );
			if(gameOn) {
				resetMM();
			}else{
				initializeMM();
			}
		}else{
			return ;
		}		
	}

	
