var input = document.getElementById("FI");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

var input = document.getElementById("CI");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

var input = document.getElementById("RI");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

var input = document.getElementById("KI");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

document.getElementById('FO').readOnly = true;
document.getElementById('CO').readOnly = true;
document.getElementById('RO').readOnly = true;
document.getElementById('KO').readOnly = true;

document.getElementById("submitButton").onclick = function(){
  if(document.getElementById("FI").value != '')
  {
    document.getElementById("FO").value = `${document.getElementById("FI").value}°F`;
    document.getElementById("CO").value = `${((document.getElementById("FI").value-32)*5/9).toFixed(2)}°C`; 
    document.getElementById("RO").value = `${((document.getElementById("FI").value+459.67)*1).toFixed(2)}°R`;
    document.getElementById("KO").value = `${((document.getElementById("FI").value-459.67)*5/9).toFixed(2)}°K`;
  }
  else if(document.getElementById("CI").value != '')
  {
    document.getElementById("FO").value = `${(document.getElementById("CI").value*9/5)+32}°F`;
    document.getElementById("CO").value = `${((document.getElementById("CI").value)*1).toFixed(2)}°C`; 
    document.getElementById("RO").value = `${((document.getElementById("CI").value+273.15)*9/5).toFixed(2)}°R`;
    document.getElementById("KO").value = `${((document.getElementById("CI").value+273.15)*1).toFixed(2)}°K`;
  }
  else if(document.getElementById("RI").value != '')
  {
    document.getElementById("FO").value = `${(document.getElementById("RI").value-459.67)}°F`;
    document.getElementById("CO").value = `${((document.getElementById("RI").value-491.61)*5/9).toFixed(2)}°C`; 
    document.getElementById("RO").value = `${((document.getElementById("RI").value)*1).toFixed(2)}°R`;
    document.getElementById("KO").value = `${((document.getElementById("RI").value)*5/9).toFixed(2)}°K`;
  }
  else
  {
    document.getElementById("FO").value = `${(document.getElementById("KI").value*9/5)-459.67}°F`;
    document.getElementById("CO").value = `${((document.getElementById("KI").value)-273.15).toFixed(2)}°C`; 
    document.getElementById("RO").value = `${((document.getElementById("KI").value)*9/5).toFixed(2)}°R`;
    document.getElementById("KO").value = `${((document.getElementById("KI").value)*1).toFixed(2)}°K`;
  }
}

document.getElementById("absolute").onclick = function(){
  document.getElementById("FO").value = '';
  document.getElementById("CO").value = '';
  document.getElementById("RO").value = '';
  document.getElementById("KO").value = '';
  document.getElementById("FI").value = '';
  document.getElementById("CI").value = '';
  document.getElementById("RI").value = '';
  document.getElementById("KI").value = '';
}
