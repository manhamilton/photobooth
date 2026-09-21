const video = document.getElementById("video");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user"
      },
      audio: false
    });

    video.srcObject = stream;
    await video.play();
  } catch (err) {
    alert("Kamera tidak bisa dibuka.");
    console.error(err);
  }
});