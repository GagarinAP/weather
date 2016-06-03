var module = ( function(){	
	var arr = [
	{
		pos: 'Рівне',
		date: [],
		humidity: [],		
		temperature: [],
		wind: []
	},
	{
		pos: 'Дубно',
		date: [],
		humidity: [],		
		temperature: [],
		wind: []
	},
	{
		pos: 'Костопіль',
		date: [],
		humidity: [],		
		temperature: [],
		wind: []
	},
	{
		pos: 'Сарни',
		date: [],
		humidity: [],		
		temperature: [],
		wind: []
	}
	]; 
	for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < 30; j++){
				var d = new Date(2011, 5, j+1);
				var options = {				  
				  year: 'numeric',
				  month: 'long',
				  day: 'numeric'				  
				};
			arr[i].date[j] = d.toLocaleString("ru", options);					
		}
	};
	for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < 30; j++){							
				arr[i].humidity[j] = parseInt(Math.random() * 40 + 60);			
		}
	};	
	for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < 30; j++){							
				arr[i].temperature[j] = parseInt(Math.random() * 20 + 10);			
		}
	};
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < 30; j++){
			var result = ["ПнСх","ПдЗх","ПнЗх","ПдСх"];
			var key = parseInt(Math.random() * 4);				
			arr[i].wind[j] = result[key];			
		}
	};
	var GlobalArray = function(){
		var result = [];
		for(var i = 0; i < arr.length; i++){
			result.push(arr[i]);
		}
		return result;
	};
	var searchByName = function(Position){		
		var result = [];
		for(var i = 0; i < arr.length; i++){
			if(arr[i].pos == Position){				
				result.push(arr[i]);
			}
		}
		return result;
	};
	return{		
		GlobalArray : GlobalArray,
		searchByName : searchByName
	}
})();