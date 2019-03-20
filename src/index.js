module.exports = function getZerosCount(number, base) {
  var factors = [];
  var divisor = 2;
  var count =1;
  var masstepen = [];
  var zer = [];
  var zercount;
  while (base >= 2){
  if (base % divisor ==0){
  factors.push(divisor);
  base /= divisor;
  }
  else {
  divisor ++;
  }
  }
  for (var i =0; i< factors.length; i++){
  if (factors[i]==factors[i+1]){
  count ++;
  }
  else {
  masstepen.push(count); 
  count = 1;
  }
  }
  for (var k = 0; k< factors.length; k++){
  if (factors[k] == factors[k+1]){
    factors.splice(k,1);
    k = k-1;
  }
  else {continue;}
  }
  for (var z = 0; z< factors.length; z++){
  var st = 1;
  zercount = 0;
  while (Math.pow(factors[z],st) <= number){
  zercount += number/Math.pow(factors[z],st);
  c = Math.floor(zercount);
  zercount = c;
  st++;
  }
  zer[z] = c;
  }
  for (var i= 0; i< zer.length; i++){
  zer[i] = zer[i]/masstepen[i];
  }
  min = zer[0];
  for (var m = 0; m< zer.length; m++){
  if (zer[m]< min){
  min = zer[m];
  }
  }
  return Math.floor(min);
  }