// Mario H. Yañez - maheya@gmail.com

const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Pide al usuario que seleccione el media stream, lo pasa al video element y entonces Play

async function selectMediaStream() {

    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        
        videoElement.onloadedmetadata = () =>{
          
            videoElement.play();

        }
        

    } catch (error) {
        console.log('Algo salió mal')
    }
    
}




button.addEventListener('click', async () => {

button.disabled = true;

await videoElement.requestPictureInPicture();

button.disabled = false;


})




// CARGA DE LA FUNCIÓN

selectMediaStream();
