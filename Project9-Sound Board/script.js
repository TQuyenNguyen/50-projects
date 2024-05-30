const sounds = ["kani"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopPlaying();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").append(btn);
});
function stopPlaying() {
  sounds.forEach((sounds) => {
    const audio = document;
  });
}
