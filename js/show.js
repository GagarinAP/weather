function ShowAll(){
  var GlobalArray = module.data;         
  var array = "";     
      for(var i = 0; i < GlobalArray.length; i++){        
        array += '<table class="table table-bordered"><caption><h1>' + GlobalArray[i].position + '</h1></caption><thead><tr><th>#</th><th>Дата</th><th>Вологість (%)</th><th>Температура (&#176;C)</th><th>Вітер (напрям)</th></tr></thead>';
        for(var j = 0; j < 30; j++){
          array += '<tbody><tr><th scope="row">' + (j + 1) + 
          '</th><td>' + GlobalArray[i].datetime[j] + 
          '</td><td>' + GlobalArray[i].humidity[j] + 
          '</td><td>' + GlobalArray[i].temperature[j] + 
          '</td><td>' + GlobalArray[i].wind[j] + '</td></tbody>';
        }
      }
  array += '</table>';
  $('#ShowAll').html(array);
}
  
function Search(){
      var NameFromSearchForm = $('#inputName').val();     
      var array = "";

      var form = document.forms[0];
      var select = form.elements.weather;       

      if(NameFromSearchForm){     
          var ArrayFromSearchName = module.searchByName(NameFromSearchForm);
      }
      var AverageAllData = module.AverageArray(ArrayFromSearchName);  
      /*Return Array ->
      MaxAndPos[0] = MaxByHumidity;
      MaxAndPos[1] = PositionByHumidity;  
      MaxAndPos[2] = MaxByTemperature;
      MaxAndPos[3] = PositionByTemperature; 
      */   
      var MaxAndPos = module.MaxAndPosition(ArrayFromSearchName);

      if(select.value > 2){
        for(var i = 0; i < ArrayFromSearchName.length; i++){
          array += '<table class="table table-bordered"><caption><h1>' + 
          ArrayFromSearchName[i].position + 
          '</h1></caption><thead><tr><th>Вітер (напрям)</th></tr></thead>'; 
        }               
        array += '<tbody><tr><td>' + 
        AverageAllData[2] + 
        '</td></tr></tbody><table>';           
      } else if (select.value == 2){
        for(var i = 0; i < ArrayFromSearchName.length; i++){
          array += '<table class="table table-bordered"><caption><h1>' + 
          ArrayFromSearchName[i].position + 
          '</h1></caption><thead><tr><th>Дата</th><th>Температура (&#176;C)</th></tr></thead>'; 
        }               
        array += '<tbody><tr><td>' +
        MaxAndPos[3] + '</td><td>' + 
        MaxAndPos[2] + '</td></tr></tbody><table>';             
      } else {        
        for(var i = 0; i < ArrayFromSearchName.length; i++){
          array += '<table class="table table-bordered"><caption><h1>' + 
          ArrayFromSearchName[i].position + 
          '</h1></caption><thead><tr><th>Дата</th><th>Вологість (%)</th></tr></thead>'; 
        }               
        array += '<tbody><tr><td>' +
        MaxAndPos[1] + '</td><td>' + 
        MaxAndPos[0] + '</td></tr></tbody><table>';       
      }
      $('#ResultSearchByName').html(array);
}
  
function AverageAll(){
      var GlobalArray = module.data;
      var AverageAllData = module.AverageArray(GlobalArray);
      var array = "";      

      array += '<table class="table table-bordered"><thead><tr><th>Вологість (%)</th><th>Температура (&#176;C)</th><th>Вітер (напрям)</th></tr></thead>';
      array += '<tbody><tr><td>' + 
      parseInt(AverageAllData[0]) + '</td><td>' + 
      parseInt(AverageAllData[1]) + '</td><td>' + 
      AverageAllData[2] + '</td></tr></tbody><table>';      
      $('#AverageResultAll').html(array);
}
  