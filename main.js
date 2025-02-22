let mental_age = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const suggestion1 = document.getElementById("suggestion1");
const suggestion2 = document.getElementById("suggestion2");
const suggestion3 = document.getElementById("suggestion3");
const score = document.getElementById("score");
const chrono_age = document.getElementById("age");
const show = document.getElementById("show");

function display_IQ() {
    // Get user inputs
    let text = parseInt(score.value);  // IQ score
    let chro_age = parseInt(chrono_age.value);  // Chronological age
    
    // Validate input
    if (isNaN(text) || isNaN(chro_age) || chro_age <= 0 || text <= 0) {
        alert("Please enter valid scores and age.");
        return;
    }

    // Calculate brain age index
    let idx = Math.floor(text / 7);
    let brain_age = parseInt(mental_age[idx]);

    // Calculate IQ (based on your formula)
    let IQ = Math.floor((brain_age / chro_age) * 100);
    console.log(IQ);

    // Display IQ
    show.innerHTML = "Your IQ is " + IQ;

    // Provide suggestions based on IQ level
    suggestion1.innerHTML = "";
    suggestion2.innerHTML = "";
    suggestion3.innerHTML = "";

    if (IQ < 100) {
        low_student();
    } else if (IQ >= 100 && IQ < 170) {
        avg_student();
    } else if (IQ >= 170 && IQ < 250) {
       exc_student();
    } else {
        console.log("Enter correct age and score");
    }
}

function low_student() {
    suggestion1.innerHTML = `
        <p>You look less effective. Let me help you with some interesting videos:</p>
        <iframe src="https://www.youtube.com/embed/5ryCb5jvx4Q" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/1P0Uvh7ruC0" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/C5OJJD3Eytk" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/bSDprg24pEA" allowfullscreen></iframe>
    `;
}

function avg_student() {
    suggestion2.innerHTML = `
        <p>You are an average student. Here are some videos to improve yourself:</p>
        <iframe src="https://www.youtube.com/embed/1P0Uvh7ruC0" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/T4CB5RPbtCk" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/cfiw3lwrkp0" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/bSDprg24pEA" allowfullscreen></iframe>
    `;
}

function exc_student() {
    suggestion3.innerHTML = `
        <p>You are an excellent student. Here are some videos to become more productive:</p>
        <iframe src="https://www.youtube.com/embed/3kKB6wYqP7Y" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/bSDprg24pEA" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/cfiw3lwrkp0" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/a3YHEkci3P4" allowfullscreen></iframe>
    `;
}