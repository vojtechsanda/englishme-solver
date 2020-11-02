export default class Analyzer {
    constructor() {
        this.supportedTypes = [
            {
                code: 'words',
                urlPart: 'words',
                name: 'Words'
            }
        ]
    }

    isWords() {
        if (
            window.ex &&
            window.ex.words &&
            window.ex.words.words &&
            window.ex.words.words[0] &&
            window.ex.words.words[0].hasOwnProperty('use_count') &&
            window.ex.words.words[0].hasOwnProperty('use_wrong') &&
            window.ex.words.words[0].hasOwnProperty('use_level') &&
            window.ex.words.words[0].hasOwnProperty('use_wrong')
        ) {
            return true
        }

        return false
    }

    analyze() {
        let typeObjs;
        const hostname = location.hostname;
        const path = location.pathname;
        const pathParts = path.split('/');

        if (hostname !== 'englishme.cz' || pathParts.length < 2) {
            return null;
        }

        const urlType = pathParts[1];
        if ((typeObjs = this.supportedTypes.filter(typeItem => typeItem.urlPart === urlType)).length === 0) {
            return undefined;
        }

        const typeObj = typeObjs.find(typeObj => {
            const firstUpperCode = typeObj.code.split("")[0].toUpperCase() + typeObj.code.slice(1);

            return this[`is${firstUpperCode}`]();
        });

        return typeObj;
    }
}