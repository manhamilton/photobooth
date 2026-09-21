const video = document.getElementById("video");
const frame = document.getElementById("frame");

document.getElementById("start").onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }
    });

    video.srcObject = stream;
  } catch (err) {
    alert("Kamera tidak bisa dibuka.");
  }
};

document.getElementById("frameUpload").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  frame.src = URL.createObjectURL(file);
};