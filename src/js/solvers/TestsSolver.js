export default class TestsSolver {
    solve() {
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
    }
}