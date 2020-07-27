const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const header = document.querySelector('.header');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  header.hidden = true;
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      header.hidden = false;
    }
    
  } catch (error) {
    console.log('oops', error);
  }
}

button.addEventListener('click', async () => {
  // Disable the button
  button.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  button.disabled = false;
});

// on Load
selectMediaStream();