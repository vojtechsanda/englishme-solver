# Englishme-solver
## Solver for the "words" task type
```javascript
// Solver for  the words type
window.ex.words.words.forEach((words, i) => {
    words.use_count = 1;
    words.use_wrong = 0;
    words.use_level = 2;
    words.use_last_round = (i+1);
})
window.abcd();
window.location.href = window.window.ex.getLinkComplete();
```
## Solver for the "tests" task type
```javascript
// Solver for the tests type
window.ex.questions.forEach((question, i) => {
    const correctChoiceId = (question.choices.find(choice => choice.correct)).id;
    question.use_choice = correctChoiceId;
    question.use_last_round = (i+1)
    question.use_correct = 1;
    question.use_count = 1;
})
window.ex.next();
window.showQuestion(window.ex.getCurrentQuestion());
window.location.href = window.ex.linkComplete;
```