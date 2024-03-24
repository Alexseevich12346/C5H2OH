import '../index.html';
import'../pages/homePage';

const val = document.getElementById('time');
var obj = document.getElementById('time');
obj.innerHTML = val;

const endTime = new Date();
endTime.setDate(endTime.getDate() + 18);
endTime.setHours(endTime.getHours() + 18); 
endTime.setMinutes(endTime.getMinutes() + 18); 
endTime.setSeconds(endTime.getSeconds() + 18); 


setInterval(() => {

  const currentTime = new Date();
  const diff = endTime - currentTime;


  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));


  console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
}, 1000);