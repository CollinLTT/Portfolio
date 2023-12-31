const track = document.getElementById("image-track");
const flack = document.getElementById("image-flack");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  /*Scrolls standard photos*/
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  /*Scrolls flipped photos*/
  flack.animate({
    transform: `translate(${nextPercentage}%, 51%)`
  }, { duration: 1200, fill: "forwards" });

  /*Changes what part of the photo you see*/
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }

  /*Changes what part of the photo you see*/
  for (const image of flack.getElementsByClassName("image-flip")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }

  /*Moves flack images inside of image-track images + lowers opacity by scroll distance*/
  /*Removed due to clunky look*/
  /*
    if(((100 + nextPercentage)/100) <= 0.2){
      //Scrolls flipped photos but moves them upwards to -50%
      flack.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
  
      //Changes the part of the photo you see (same as other)
      for(const image of flack.getElementsByClassName("image-flip")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
    }
    for(const image of flack.getElementsByClassName("image-flip")) {
  
      //Changes flack images opacity based on distance scrolled, opacity rate is halved (50)
       flack.style.opacity = (100 + nextPercentage)/50;
      }
      */
  /*--------------------------------------End section----------------------------------------*/

}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

//----------------------------------------------------------------------------------------------------------
// Function to create a confetti animation
function createConfetti() {
  toggleConfetti();
}

// Attach the createConfetti function to the button's click event
document.getElementById('confettiButton').addEventListener('click', createConfetti);