function updateClock() {
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  document.getElementById('day').textContent = dayNames[now.getDay()];
  document.getElementById('date').textContent = now.getDate();
  document.getElementById('month').textContent = monthNames[now.getMonth()];
}

setInterval(updateClock, 1000);
updateClock(); // initial call
