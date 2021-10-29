const container = document.getElementById('conteiner');
const resetButton = document.getElementById('resetButton');
const randButton = document.getElementById('randButton');
const rooms = Array.from(document.querySelectorAll('.room'));

function highlightRoom(event) {
  if (event.target.classList.contains('room')) {
    event.target.classList.toggle('active')
  }
}

function resetRooms(event) {
  rooms.forEach(element => {
    element.classList.remove('active')
  });
}

function randomize() {
  for (let i = 1; i < 5; i++) {
    var randRoom = rooms[Math.floor(Math.random()*rooms.length)];
    randRoom.classList.add('active');
  }
}

container.addEventListener('click', highlightRoom);
resetButton.addEventListener('click', resetRooms);
randButton.addEventListener('click', randomize);
document.addEventListener('keydown', function(e){
  if (e.key === 'r') {
    resetRooms()
  }
  if (e.code === 'Space') {
    randomize()
  }
});