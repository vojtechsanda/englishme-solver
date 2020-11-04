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