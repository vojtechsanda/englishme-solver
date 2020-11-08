# Englishme-solver
## Solver for the "words" task type
```javascript
// Solver for  the words type
window.ex.words.words.forEach((word,i) => {
    word.use_count = 1;
    word.use_wrong = 0;
    word.use_level = 2;
    word.use_last_round = (i+1);
});
window.save(true);
window.location.href = window.ex.getLinkComplete();
```
## Solver for the "tests" task type
```javascript
// Solver for the tests type
window.ex.questions.forEach((question, i) => {
    question.use_last_round = (i+1)
    question.use_correct = 1;
    question.use_count = 1;
})
window.save(true);
window.location.href = window.ex.linkComplete;
```
## Solver for the "senteces" task type
```javascript
window.reviewOneSentence = function() {return true};
for (let i = 0; i < window.ex.sentencesCount; i++) {
    window.reviewSentencesClick(document.querySelector('#review'));
    const next = window.ex.next();
    window.showSentence(next);
}
window.location.href = document.querySelector('#linkComplete').href;
```