var arr = [];

function natNums(from, to) {
	top:
 	for (var i = from; i < to; i++) {
 			
	  	for (var x = i-1; x > 1; x--) { 
		    	
			if (i % x == 0) {			    	
		    	continue top;			    	
	    	}
		}	
    	arr.push(i);    	
	}   
}
natNums(1, 100);

console.log(arr);