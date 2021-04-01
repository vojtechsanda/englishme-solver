export default class SentencesSolver {
    solve() {
        window.reviewOneSentence = function() {return true};
        for (let i = 0; i < window.ex.sentencesCount; i++) {
            window.reviewSentencesClick(document.querySelector('#review'));
            const next = window.ex.next();
            window.showSentence(next);
        }
        // window.location.href = document.querySelector('#linkComplete').href;
    }
}