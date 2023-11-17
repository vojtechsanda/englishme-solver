export default class SentencesSolver {
  solve() {
    window.reviewOneSentence = function () {
      return true;
    };
    for (let i = 0; i < window.ex.sentencesCount; i++) {
      window.reviewSentencesClick(document.querySelector('#review'));
      const next = window.ex.next();
      window.showSentence(next);
    }
    // window.location.href = document.querySelector('#linkComplete').href;
  }

  fill() {
    const currentSentenceNum = ex.getCurrentSentence();
    const currentSentence = document.querySelector(`#sentence-${currentSentenceNum}`);
    const usefulElements = Array.from(
      currentSentence.querySelectorAll('span[data-words-questions-id], .title-input input')
    );

    let answers = [];
    let currentInputIndex = -1;

    usefulElements.forEach((element) => {
      if (element.tagName === 'INPUT') {
        currentInputIndex++;
        answers[currentInputIndex] = [];
      } else {
        answers[currentInputIndex].push(element.innerHTML);
      }
    });
    answers = answers.map((answer) => answer.join(' '));

    const emptyInputs = usefulElements.filter((element) => element.tagName === 'INPUT');

    emptyInputs.forEach((emptyInput, i) => {
      emptyInput.value = answers[i];
    });
  }
}
