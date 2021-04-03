# [Englishme.cz](https://englishme.cz) Solver
## Table of Contents
* [Usage](#usage)
  * [Solve everything](#solve-everything)
  * [Fill current task](#fill-current-task)
* [Snippets](#snippets)
  * [Words](#words)
  * [Tests](#tests)
  * [Sentences](#sentences)
* [Supported exercises](#supported-exercises)
* [License](#license)
* [Changelog](#changelog)

## Usage
* Start the exercise you want to solve
* Copy the code from [`/dist/app.js`](https://github.com/vojtechsanda/englishme-solver/blob/master/dist/app.js#L1)
* [Open developer console](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers#answer-77337) and paste the code into it
* Hit `Enter`
* If the exercise type is not supported, there will be shown "Unsupported" or "Unable to analyze" text instead of the exercise type

### Solve everything
* By hitting that button, the exercise will be solved with a 100% score
* In most exercises, you will get 100% no matter what you've answered so far
* But in these ones, just the unanswered tasks will be solved
  * The "Sentences" exercise type

### Fill current task
* By hitting that button, just the current task will be filled out
* This feature is for those, who want to practice it, but don't want to get a bad score
  * You say/write your answer and then check it with this feature

## Snippets
* There is a list of solvers snippets
* You can paste those inside the console and solve the exercise without any GUI - instant "Solve everything"
* Always use the proper snippet for the exercise you are solving
* Be careful, there is no support check, so you can mess up the exercise

### Words
* The url starts with `https://englishme.cz/words/`
```javascript
// Solver for the words type
window.ex.words.words.forEach((word,i) => {
    word.use_count = 1;
    word.use_wrong = 0;
    word.use_level = 2;
    word.use_last_round = (i+1);
});
window.save(true);
```
### Tests
* The url starts with `https://englishme.cz/tests/`
```javascript
// Solver for the tests type
window.ex.questions.forEach((question, i) => {
    question.use_last_round = (i+1)
    question.use_correct = 1;
    question.use_count = 1;
})
window.save(true);
```
### Senteces
* The url starts with `https://englishme.cz/sentences/`
```javascript
// Solver for the sentences type
window.reviewOneSentence = function() {return true};
for (let i = 0; i < window.ex.sentencesCount; i++) {
    window.reviewSentencesClick(document.querySelector('#review'));
    const next = window.ex.next();
    window.showSentence(next);
}
```

## Supported exercises
* Basic type recognition is based on the url -> ht<span>tps://englishme.cz/**words**/
* Words type
  * :heavy_check_mark: Solve everything
  * :heavy_check_mark: Fill current task - English
  * :x: Fill current task - Czech
* Tests type
  * :heavy_check_mark: Solve everything
  * :heavy_check_mark: Fill current task
* Senteces type
  * :heavy_check_mark: Solve everything
  * :heavy_check_mark: Fill current task

## License
* Distributed under the ISC License. See `LICENSE` for more information.

## Changelog
* v2.1.1
  * Improved and fixed tests filling
* v2.1.0
  * Added fill feature
  * Added close popup feature
* v2.0.4
  * Quickfix for possible 0% success
* v2.0.3
  * Fixed analyzer
* v2.0.2
  * Added analyzer and solver for the "senteces" exercise type
  * Added normal README file
  * Simplified solvers code
  * Defined project under the ISC License
* v2.0.1
  * Added "solve everything" for the "tests" exercise type
  * Added "solve everything" for the "words" exercise type
  * Added dark/light mode
  * Added popup styles
  * Minor improvements
* v2.0.0
  * Just a popup, no functionality