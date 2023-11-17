export default class Analyzer {
  constructor() {
    this.supportedTypes = [
      {
        code: 'words',
        urlPathPrefix: '/app/words',
        name: 'Words',
        solveSupport: true,
        fillSupport: true,
      },
      {
        code: 'tests',
        urlPathPrefix: '/app/tests',
        name: 'Tests',
        solveSupport: true,
        fillSupport: true,
      },
      {
        code: 'sentences',
        urlPathPrefix: '/app/sentences',
        name: 'Sentences',
        solveSupport: true,
        fillSupport: true,
      },
    ];
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

    if (
      window.ex &&
      window.ex.type === 'basic' &&
      typeof window.ex.getCurrentWord === 'function' &&
      document.querySelector('#exercise input#answer_0')
    ) {
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
      typeof window.ex.getCurrentQuestion === 'function' &&
      typeof window.ex.getCorrectChoice === 'function' &&
      document.querySelector('#exercise #choices a[id^=choice]')
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

    if (
      window.ex &&
      typeof window.ex.getCurrentSentence === 'function' &&
      document.querySelector('*[id^=sentence]') &&
      document.querySelector('.title-input input') &&
      document.querySelector('.title-input + span[data-words-questions-id]')
    ) {
      fillSupport = true;
    }

    return [solveSupport, fillSupport];
  }

  analyze() {
    let typeObjs;
    const hostname = location.hostname;

    if (hostname !== 'englishme.cz' && hostname !== 'www.englishme.cz') return null;

    if (
      (typeObjs = this.supportedTypes.filter((typeItem) =>
        location.pathname.startsWith(typeItem.urlPathPrefix)
      )).length === 0
    ) {
      return undefined;
    }

    let isSupported;
    const typeObj = typeObjs.find((typeObj) => {
      const firstUpperCode = typeObj.code.split('')[0].toUpperCase() + typeObj.code.slice(1);

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
