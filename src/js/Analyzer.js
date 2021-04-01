export default class Analyzer {
    constructor() {
        this.supportedTypes = [
            {
                code: 'words',
                urlPart: 'words',
                name: 'Words',
                solveSupport: true,
                fillSupport: false,
            },
            {
                code: 'tests',
                urlPart: 'tests',
                name: 'Tests',
                solveSupport: true,
                fillSupport: true,
            },
            {
                code: 'sentences',
                urlPart: 'sentences',
                name: 'Sentences',
                solveSupport: true,
                fillSupport: false,
            }
        ]
    }

    isWords() {
        let solveSupport = false;
        let fillSupport = false;

        if (
            window.ex &&
            window.ex.words &&
            window.ex.words.words &&
            window.ex.words.words[0] &&
            window.ex.words.words[0].hasOwnProperty('use_count') &&
            window.ex.words.words[0].hasOwnProperty('use_wrong') &&
            window.ex.words.words[0].hasOwnProperty('use_level') &&
            window.ex.words.words[0].hasOwnProperty('use_wrong') &&
            typeof window.save === 'function' &&
            typeof window.ex.getLinkComplete === 'function'
        ) {
            solveSupport = true;
        }
        
        if (false) {
            fillSupport = true;
        }

        return [solveSupport, fillSupport];
    }

    isTests() {
        let solveSupport = false;
        let fillSupport = false;

        if (
            window.ex &&
            window.ex.questions &&
            window.ex.questions[0] &&
            window.ex.questions[0].hasOwnProperty('use_last_round') &&
            window.ex.questions[0].hasOwnProperty('use_correct') &&
            window.ex.questions[0].hasOwnProperty('use_count') &&
            window.ex.hasOwnProperty('linkComplete') &&
            typeof window.save === 'function'
        ) {
            solveSupport = true;
        }

        if (
            window.ex &&
            window.ex.questions &&
            document.querySelector('#question') &&
            document.querySelectorAll('#choices a[id^=choice]')
        ) {
            fillSupport = true;
        }

        return [solveSupport, fillSupport];
    }

    isSentences() {
        let solveSupport = false;
        let fillSupport = false;

        if (
            window.ex &&
            window.ex.sentencesCount &&
            typeof window.ex.next === 'function' &&
            typeof window.reviewOneSentence === 'function' &&
            typeof window.reviewSentencesClick === 'function' &&
            typeof window.showSentence === 'function' &&
            document.querySelector('#review') &&
            document.querySelector('#linkComplete') &&
            document.querySelector('#linkComplete').href
        ) {
            solveSupport = true;
        }

        if (false) {
            fillSupport = true;
        }

        return [solveSupport, fillSupport];
    }

    analyze() {
        let typeObjs;
        const hostname = location.hostname;
        const path = location.pathname;
        const pathParts = path.split('/');

        if ((hostname !== 'englishme.cz' && hostname !== 'www.englishme.cz') || pathParts.length < 2) {
            return null;
        }

        const urlType = pathParts[1];
        if ((typeObjs = this.supportedTypes.filter(typeItem => typeItem.urlPart === urlType)).length === 0) {
            return undefined;
        }

        let isSupported;
        const typeObj = typeObjs.find(typeObj => {
            const firstUpperCode = typeObj.code.split("")[0].toUpperCase() + typeObj.code.slice(1);

            isSupported = this[`is${firstUpperCode}`]();

            return isSupported[0] || isSupported[1];
        });

        if (typeObj) {
            typeObj.solveSupport = typeObj.solveSupport && isSupported[0] ? true : false;
            typeObj.fillSupport = typeObj.fillSupport && isSupported[1] ? true : false;
        }

        return typeObj;
    }
}