const container = document.getElementById('conteiner');
const resetButton = document.getElementById('resetButton');
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

container.addEventListener('click', highlightRoom);
resetButton.addEventListener('click', resetRooms);
document.addEventListener('keydown', function(e){
  if (e.key === 'r') {
    resetRooms()
  }
});