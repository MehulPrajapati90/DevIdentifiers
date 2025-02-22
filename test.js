const questionBank = [
    {
        question: "What comes next in the sequence: A, C, F, J, O, ?",
        options: ["T", "U", "V", "S"],
        answer: "U"
    },
    {
        question: "Decode the pattern: 2, 5, 10, 17, 26, ?",
        options: ["35", "37", "39", "41"],
        answer: "37"
    },
    {
        question: "What is the missing symbol: △, ◻, ⬟, ?, ⬢",
        options: ["⬡", "⬣", "⬤", "⬥"],
        answer: "⬡"
    },
    {
        question: "Find the next number: 1, 1, 2, 3, 5, 8, ?",
        options: ["12", "13", "14", "15"],
        answer: "13"
    },
    {
        question: "What comes next: Z, X, V, T, R, ?",
        options: ["P", "Q", "O", "S"],
        answer: "P"
    },
    {
        question: "Decode the pattern: 3, 9, 27, 81, ?",
        options: ["243", "162", "324", "123"],
        answer: "243"
    },
    {
        question: "What is the missing symbol: ♠, ♣, ♥, ?, ♦",
        options: ["♣", "♥", "♦", "♠"],
        answer: "♦"
    },
    {
        question: "Find the next number: 12, 23, 34, 45, ?",
        options: ["56", "57", "58", "59"],
        answer: "56"
    },
    {
        question: "What comes next: A, D, G, J, ?",
        options: ["M", "N", "O", "P"],
        answer: "M"
    },
    {
        question: "Decode the pattern: 1, 4, 9, 16, 25, ?",
        options: ["36", "49", "64", "81"],
        answer: "36"
    },
    {
        question: "What is the missing symbol: ⚀, ⚁, ⚂, ?, ⚄",
        options: ["⚃", "⚅", "⚂", "⚀"],
        answer: "⚃"
    },
    {
        question: "Find the next number: 2, 6, 12, 20, 30, ?",
        options: ["42", "44", "46", "48"],
        answer: "42"
    },
    {
        question: "What comes next: B, E, H, K, ?",
        options: ["N", "O", "P", "Q"],
        answer: "N"
    },
    {
        question: "Decode the pattern: 5, 10, 20, 40, ?",
        options: ["80", "85", "90", "95"],
        answer: "80"
    },
    {
        question: "What is the missing symbol: ♪, ♫, ♬, ?, ♩",
        options: ["♭", "♮", "♯", "♫"],
        answer: "♭"
    },
    {
        question: "Find the next number: 1, 3, 6, 10, 15, ?",
        options: ["21", "22", "23", "24"],
        answer: "21"
    },
    {
        question: "What comes next: C, F, I, L, ?",
        options: ["O", "P", "Q", "R"],
        answer: "O"
    },
    {
        question: "Decode the pattern: 7, 14, 28, 56, ?",
        options: ["112", "114", "116", "118"],
        answer: "112"
    },
    {
        question: "What is the missing symbol: ☀, ☁, ☂, ?, ☃",
        options: ["☔", "❄", "⚡", "☁"],
        answer: "☔"
    },
    {
        question: "Find the next number: 1, 2, 4, 7, 11, ?",
        options: ["16", "17", "18", "19"],
        answer: "16"
    }
];



//  select 5 random question

function RandomQuestion() {

    const arr = [];
    let i = 0;
    let length = questionBank.length;
    while (i < 10) {
        const index = Math.floor(Math.random() * length);
        arr.push(questionBank[index]);
        [questionBank[index], questionBank[length - 1]] = [questionBank[length - 1], questionBank[index]];
        length--, i++;
    }

    return arr;
}

const form = document.querySelector('form');
const selected_question = RandomQuestion();
const correct_answer = {};

//  create the input field of the form

selected_question.forEach((problem, index) => {

    const div_element = document.createElement('div');
    div_element.className = "question";

    const para = document.createElement('p');
    para.innerText = `${index + 1}. ${problem['question']}`;
    div_element.appendChild(para);

    //  Now create option for each field
    problem['options'].forEach((data) => {
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = data;

        const label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.append(label);
        div_element.appendChild(document.createElement('br'));
    })

    correct_answer[`q${index + 1}`] = problem['answer'];
    form.append(div_element);
})

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = "submit-btn";
submitButton.innerText = "SUBMIT";
form.appendChild(submitButton);


// check result of submitted result


form.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = new FormData(form);


    let result = 0

    for (let [key, value] of data.entries()) {
        if (value === correct_answer[key])
            result++;
    }

    // const out = document.getElementById('out');
    // out.innerText = `${result} out of 5 is correct`;

    const testresult = document.getElementById("test-result");
    const testresulth2 = document.getElementById("testid");
    testresulth2.textContent = `${result} out of 10 correct.`


    form.reset();

})



const navbar = document.querySelector(".navbar");

window.onscroll = () => {
    this.scrollY > 20
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
};
