// esta funcion debe estar en el click del icono
function handlePlay($event) {
  // tener el mismo id para la imagen y el audio
  const id = $event.target.id;
 
  // obtener el elemento img con el id
  const img = document.querySelector(`img[id='${id}']`);

  // obtener el elemento audio con el id
  const audio = document.querySelector(`audio[id='${id}']`);

  if (audio.paused) {
    audio.play();
    img.src = "./assets/pause.png";
  } else {
    audio.pause();
    img.src = "./assets/play.png";
  }
}