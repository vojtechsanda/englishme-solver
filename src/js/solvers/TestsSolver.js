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
}