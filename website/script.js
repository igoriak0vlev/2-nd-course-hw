function answerMonth() {
  let getMonth = +prompt(`Введите номер месяца от 1 до 12`);

  if (Number.isNaN(getMonth)) {
    console.log(`Ошибка: введите число от 1 до 12`);
  } else {
    switch (getMonth) {
      case 12:
      case 1:
      case 2:
        console.log(`Зима`);
        break;
      case 3:
      case 4:
      case 5:
        console.log(`Весна`);
        break;
      case 6:
      case 7:
      case 8:
        console.log(`Лето`);
        break;
      case 9:
      case 10:
      case 11:
        console.log(`Осень`);
        break;
      default:
        console.log(`Введите номер месяца повторно`);
        break;
    }
  }
}

const wordsArr = [
  "Яблоко",
  "Груша",
  "Дыня",
  "Виноград",
  "Персик",
  "Апельсин",
  "Мандарин",
];

const shuffled = [...wordsArr].sort(() => Math.random() - 0.5);

function memberWords() {
  let answer = confirm(
    `Сейчас появятся слова, из которых тебе нужно запомнить первое и последнее слово, а после этого написать.`
  );

  if (answer) {
    console.log(1);
    showWordsTemporarily(shuffled);
  } else {
    alert(`Хорошо, сыграем позже.`);
  }
}

function showWordsTemporarily(words, duration = 2000) {
  const wordBox = document.createElement("div");
  wordBox.id = "wordBox";
  wordBox.textContent = words.join(", ");
  document.body.appendChild(wordBox);
  console.log(2);

  setTimeout(() => {
    wordBox.remove();
    setTimeout(() => askUserInput(words[0], words[words.length - 1]), 1);
  }, duration);
  console.log(3);
}

function askUserInput(correctFirst, correctLast) {
  console.log(4);

  const userWords = prompt(`Введи первое и последнее слово через запятую`);
  const userWordsArr = userWords.split(`, `);

  let check =
    userWordsArr[0].toLowerCase() === correctFirst.toLowerCase() &&
    userWordsArr[1].toLowerCase() === correctLast.toLowerCase();

  if (check) {
    alert(`У тебя отличная память.`);
  } else {
    alert(`Попробуй снова.`);
  }
}

function mysteryRigth(a) {
  return a.toLowerCase() === "марка";
}

function getMystery() {
  alert(`Что может путешествовать по свету, оставаясь в одном и том же углу?`);

  let getAns = prompt(`Ведите ответ`);

  if (mysteryRigth(getAns)) {
    alert(`Верно`);
  } else {
    alert(`Это что-то маленькое, что можно наклеить.`);
    getAns = prompt(`Ведите ответ`);
    if (mysteryRigth(getAns)) {
      alert(`Верно`);
    } else {
      alert(`Это используется для отправки писем.`);
      getAns = prompt(`Ведите ответ`);
      if (mysteryRigth(getAns)) {
        alert(`Верно`);
      } else {
        alert(`Не верно. Ответ - Марка`);
      }
    }
  }
}
