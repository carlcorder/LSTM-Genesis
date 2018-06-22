/* ===
LSTM Text Generator with ml5.js & p5.js
This uses a pre-trained model on the Book of Genesis.
http://www.gutenberg.org/cache/epub/8001/pg8001.txt
=== */

// Create the LSTM Generator passing it the model directory
const lstm = ml5.LSTMGenerator('models/genesis/', modelReady);

let textInput;
let lengthSlider;
let tempSlider;
let button;

function toggleSpinner() {
    let spinner = document.getElementById('spinner');
    (spinner.style.display === 'none' || spinner.style.display === '') ? 
            spinner.style.display = 'inline-block' :
            spinner.style.display = 'none';
}

function load() {
    select('#status').html('');
    toggleSpinner();
    setTimeout(() => generate(), 250);
}

function modelReady() {
    document.getElementById('status').innerHTML = 'Model Loaded';
}

function setup() {
    noCanvas();

    // Grab the DOM elements
    textInput = select('#textInput');
    lengthSlider = select('#lenSlider');
    tempSlider = select('#tempSlider');
    button = select('#generate');

    // DOM element events
    button.mousePressed(load);
    lengthSlider.input(updateSliders);
    tempSlider.input(updateSliders);

    // Update the slider values
    function updateSliders() {
        select('#length').html(lengthSlider.value());
        select('#temperature').html(tempSlider.value());
    }
}

// Generate new text
function generate() {

    // Grab the original text
    let original = textInput.value();
    // Make it to lower case
    let txt = original.toLowerCase();

    // Check if there's something to send
    if (txt.length > 0) {
        // This is what the LSTM generator needs
        // Seed text, temperature, length to outputs
        let data = {
            seed: txt,
            temperature: tempSlider.value(),
            length: lengthSlider.value()
        };
        
        // Generate text with the lstm
        lstm.generate(data, gotData);

        // When it's done
        function gotData(result) {
            toggleSpinner();
            // Update the status log
            select('#status').html('Ready!');
            select('#result').html(txt + result.generated);
        }
    }
}