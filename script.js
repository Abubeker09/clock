let hour = document.getElementById('hour');
let min = document.getElementById('mins');
let sec = document.getElementById('sec');
let d = document.getElementById('D');
let y = document.getElementById('Y');
let dey = document.querySelector('h2');

  function time() {
    let currentTime = new Date()
  hour.innerHTML = (currentTime.getHours() < 10 ? '0':'') +currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() < 10 ? '0':'') +currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? '0':'') +currentTime.getSeconds();
  d.innerHTML = ((hour>12)? "PM" :"AM");
  y.innerHTML = currentTime.getDate() + '/' + currentTime.getMonth() + '/' + currentTime.getFullYear();
  
  let deys = ['SUN','MON', 'TUS', 'WEN', 'TUR', 'FRI', 'SUT']
  dey.innerHTML = deys[currentTime.getDay()]
  };

setInterval(time,1000);
