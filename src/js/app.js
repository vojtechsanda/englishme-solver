const appCss = require('../scss/main.scss').toString();

class Solver {
    constructor() {
        this.state = {};
        this.elements = {};
    }
    render() {
        const markup = `
            <div class="js-em-solver__wrapper em-solver__wrapper">
                <style>${appCss}</style>
                qweqwdasd
            </div>
        `;

        let contentWrapper = document.querySelector('.app-content')
        contentWrapper ? contentWrapper : document.querySelector('body');
        contentWrapper.insertAdjacentHTML('beforeend', markup);
    }
    analyzeType() {
        const supportedTypes = [
            'words'
        ]

        const hostname = location.hostname;
        const path = location.pathname;
        const pathParts = path.split('/');

        if (hostname !== 'englishme.cz' || pathParts.length < 2) {
            return null;
        }

        const type = pathParts[1];
        if (supportedTypes.indexOf(type) === -1) {
            return undefined;
        }

        return type;
    }
    init() {
        this.render();
    }
}

const solver = new Solver;
solver.init();