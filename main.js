const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const btnAnswer = document.querySelector(".btnAnswer");
const btnReset = document.querySelector(".btnReset");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

btnAnswer.addEventListener("click", () => {
  if (input.value === "" || isNaN(input.value) === false) {
    return;
  }

  answer.textContent = randomValueFromArray(replies);
});

btnReset.addEventListener("click", () => {
  input.value = "";
  answer.textContent = "";
});
