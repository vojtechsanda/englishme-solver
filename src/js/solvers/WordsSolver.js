export default class WordsSolver {
  solve() {
    window.ex.words.words.forEach((word, i) => {
      word.use_count = 1;
      word.use_wrong = 0;
      word.use_level = 2;
      word.use_last_round = i + 1;
    });
    window.save(true);
    // window.location.href = window.ex.getLinkComplete();
  }

  fill() {
    const currentWord = ex.getCurrentWord();

    document.querySelector(`#exercise input#answer_0`).value = currentWord.english;
  }
}
