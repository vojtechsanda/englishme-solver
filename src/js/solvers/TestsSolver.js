export default class TestsSolver {
    solve() {
        window.ex.questions.forEach((question, i) => {
            question.use_last_round = (i+1)
            question.use_correct = 1;
            question.use_count = 1;
        })
        window.save(true);
        // window.location.href = window.ex.linkComplete;
    }

    fill() {
        const currentQuestion = window.ex.questions.find(question => question.question === document.querySelector('#question').innerHTML);

        if (currentQuestion) {
            const correctAnswer = currentQuestion.choices.find(choice => choice.correct);
    
            const answers = Array.from(document.querySelectorAll('#choices a[id^=choice]'));
            answers.forEach(answer => {
                if (Number(answer.dataset.id) !== correctAnswer.id) {
                    answer.style.visibility = 'hidden';
                }
            })
        }
    }
}