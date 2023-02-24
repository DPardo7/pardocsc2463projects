let sounds = new Tone.Players({

  "Dogs Barking": "sounds/barking.wav",
  "Class Begins": "sounds/bell.mp3",
  "Knocking at the Door": "sounds/knocking.mp3",
  "Rain Drops": "sounds/rain.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["Dogs Barking", "Class Begins", "Knocking at the Door", "Rain Drops"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(450, 450);

  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index * 50);
    buttons[index].mousePressed(() => buttonSound(word));
  });

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased(() => {
    delay.delayTime.value = dSlider.value();
  })

   
  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased(() => {
    delay.feedback.value = fSlider.value();
  })
}

function draw() {
  background(100, 100, 200);
  text('(6 Seconds)', 100, 15);
  text('(7 Seconds)', 100, 64);
  text('(1 Second)', 150, 114);
  text('(10 Seconds)', 90, 163);
  text('Press the Buttons for a Specific Sound.', 0, 215);
  text('Use the Sliders to change the delay time and/or feedback for the chosen audio.', 0 , 385);
  text('Delay Time Value: ', 15, 430);
  text('Feedback Value: ', 150, 430);
}

function buttonSound(whichSound) {

  sounds.player(whichSound).start();

}