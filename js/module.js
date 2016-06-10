var module = (function(){
	var data = a();
	function a(){
		var result = [];
		for(var i = 0; i < 4; i++){
	        result.push({
	            position: getCity(i),
	            datetime: setDatetime(),
	            humidity: setRandom(40, 90),
	            temperature: setRandom(15, 25),
	 			wind: setWind()
	        });
        }
        return result;
	};

	function Randomizer(min,max){
		return parseInt(Math.random() * (max - min + 1) + min);
	};

	function setRandom(min, max){
        var result = [];
        for (var i = 0; i < 30; i++){
            result.push(Randomizer(min, max));
        }
        return result;
    };

    function getCity(position) {
        var cities =['Рівне', 'Дубно', 'Сарни', 'Костопіль'];
        return cities[position];
    };

    function setDatetime(){
    	var result = [];
    	for(var j = 0; j < 30; j++){
			var d = new Date(2014, 5, j+1);
			var options = {				  
				year: 'numeric',
				month: 'long',
				day: 'numeric'				  
		    };
		    result.push(d.toLocaleString("ru", options));
		}
		return result;
    };

    function setWind(){
    	var result = [];
    	for(var j = 0; j < 30; j++){
			var windname = ["N","NE","E","SE","S","SW","W","NW"];
			var vector = parseInt(Randomizer(0,7));				
			result.push(windname[vector]);			
		}
		return result;
    };
	
	var searchByName = function(Position){		
		var result = [];		
		for(var i = 0; i < data.length; i++){
			if(data[i].position == Position){				
				result.push(data[i]);
			}
		}		
		return result;
	};
	function counter(arr){
	    var ret = {};
	        arr.forEach( function(elem,i,arr){            
	            if( elem in this) 
	                return;
	            var count = arr.filter( function( elemA ){
	                return elem === elemA;
	            });
	            this[elem] = count.length;              
	        }, ret);
	    return ret;
	}
	var AverageArray = function(arr){
		var result=[]
		  , averagehumidity = 0
      	  , averagetemperature = 0
      	  , averagewind=[]
      	  , max = 0
      	  , position;      	

		for(var i = 0; i < arr.length; i++){        
	        for(var j = 0; j < 30; j++){
	          averagehumidity += arr[i].humidity[j];
	          averagetemperature += arr[i].temperature[j];
	          averagewind.push(arr[i].wind[j]);         
	        }	 
	        result[0] = averagehumidity /= 30;
	    	result[1] = averagetemperature /= 30;              
	    }

	    var maxi = counter(averagewind);
	    for(key in maxi){
	        if(maxi[key] > max){
	            max = maxi[key];
	            position = key;            
	        }             
	    }

	    result[2] = position;
	    
		return result;
    };
    var MaxAndPosition = function(arr){
		var result=[]		      	  
      	  , max = 0
      	  , max1 = 0
      	  , position1
      	  , position;      	

		for(var i = 0; i < arr.length; i++){        
	        for(var j = 0; j < 30; j++){
	        	if(arr[i].humidity[j] > max){
	        		max = arr[i].humidity[j];
	        		position = arr[i].datetime[j];
	        	}
	        	if(arr[i].temperature[j] > max1){
	        		max1 = arr[i].temperature[j];
	        		position1 = arr[i].datetime[j];
	        	}	          	                   
	        }	                     
	    }
	    result[0] = max;
	    result[1] = position;  
	    result[2] = max1;
	    result[3] = position1;
	    
		return result;
    };
	return {
		data:data,
		MaxAndPosition:MaxAndPosition,
		AverageArray:AverageArray,
		searchByName:searchByName
	};
})();