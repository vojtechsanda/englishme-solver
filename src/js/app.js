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
                <h1 class="em-solver__heading">Englishme Solver</h1>
                <p>Task type: <strong>Questions</strong></p>
                <p>Unable to analyze the task type</p>
                <button>Solve!</button>
                <button>Fill current task</button>
                <div class="em-solver__footer">
                    <div>
                        <a href="https://github.com" target="_blank">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>github</title>
                                <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                            </svg>
                        </a>
                        <span>Created by <a href="https://vojtechsanda.cz" target="_blank">Vojtěch Šanda</a></span>
                    </div>
                    <div>
                        <span>v.2.0.0</span>
                    </div>
                </div>
            </div>
        `;

        let contentWrapper = document.querySelector('body');
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