
var totKr;

var loadKr = localStorage.getItem('Kr');

window.onload = function() {
  if (loadKr >= 0) {
    totKr = Number(loadKr);
  }
  
  else {
   totKr = 0;
  }
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
};

function femKr() {
  totKr+=5;
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
  localStorage.setItem('Kr', totKr);
}

function tioKr() {
  totKr += 10;
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
  localStorage.setItem('Kr', totKr);
}

function tvahalvKr() {
  totKr += 2.5;
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
  localStorage.setItem('Kr', totKr);
}

function tjugoKr() {
  totKr += 20;
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
  localStorage.setItem('Kr', totKr);
}

function reset() {
  var conf = confirm('Vill du verkligen nollställa?');
  if (conf) {
    totKr = 0;
    document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
    localStorage.setItem('Kr', totKr);
  }
}

function costum() {
  var costNum = document.getElementById('cost').value;
  totKr += Number(costNum);
  document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
    
  if (totKr < 0) {
    totKr = 0;
    document.getElementById('tot').innerHTML = totKr + ' ' + 'Kr';
  }
  localStorage.setItem('Kr', totKr);
}
