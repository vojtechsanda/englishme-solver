const appCss = require('../scss/main.scss').toString();

import Analyzer from './Analyzer'
import WordsSolver from './solvers/WordsSolver'
import TestsSolver from './solvers/TestsSolver'
import SentencesSolver from './solvers/SentencesSolver';

class EmSolver {
    constructor() {
        this.id = Math.floor(Math.random()*1000000);
        this.version = '2.0.2'
        this.state = {};
        this.solvers = {};
        this.elements = {};
    }

    render() {
        const typeTxt = this.state.type === undefined ? 'Unsupported' : (this.state.type ? this.state.type.name : 'Unable to analyze');

        const markup = `
            <section class="js-em-solver em-solver" data-em-solver-id="${this.id}">
                <style>${appCss}</style>
                <header class="em-solver__header">
                    <h1 class="em-solver__heading">Englishme Solver</h1>
                    <h2 class="em-solver__subheading">Exercise type: <strong class="js-em-solver__exercise-type">${ typeTxt }</strong></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="em-solver__close-btn">
                        <title>Close</title>
                        <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/>
                    </svg>
                </header>
                <main class="em-solver__main">
                    <div class="js-emsolver__errors-wrapper em-solver__errors-wrapper">
                        <!-- <p class="em-solver__error">Unable to analyze the exercise type</p> -->
                    </div>
                    <div class="em-solver__btns-wrapper">
                        <button class="em-solver__btn js-em-solver__btn--solve"${!this.state.type ? ' disabled' : ''}>Solve everything!</button>
                        <button class="em-solver__btn" disabled>Fill current task!</button>
                    </div>
                </main>
                <footer class="em-solver__footer">
                    <div class="em-solver__author-wrapper">
                        <a href="https://github.com/vojtechsanda/englishme-solver" target="_blank" class="em-solver__link-block">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="em-solver__icon">
                                <title>Englishme Solver on GitHub</title>
                                <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                            </svg>
                        </a>
                        <span class="em-solver__author-txt">Created by <a href="https://vojtechsanda.cz" target="_blank" class="em-solver__link">Vojtěch Šanda</a></span>
                    </div>
                    <div>
                        <span>v.${ this.version }</span>
                    </div>
                </footer>
            </section>
        `;

        const contentWrapper = document.querySelector('body');
        contentWrapper.insertAdjacentHTML('beforeend', markup);
    }

    analyzeType() {
        this.analyzer = new Analyzer;
        this.state.type = this.analyzer.analyze();
    }

    solve(code) {
        this.solvers[code].solve();
    }

    saveElements() {
        const solverWrapper = document.querySelector(`.js-em-solver[data-em-solver-id="${this.id}"]`);
        
        this.elements.solverWrapper = solverWrapper;
        this.elements.solveBtn = solverWrapper.querySelector('.js-em-solver__btn--solve');
    }

    setupSolvers() {
        this.solvers.words = new WordsSolver;
        this.solvers.tests = new TestsSolver;
        this.solvers.sentences = new SentencesSolver;
    }

    setupEvents() {
        this.elements.solveBtn.addEventListener('click', () => {
            this.solve(this.state.type.code);
        })
    }

    init() {
        this.analyzeType();
        this.render();
        this.saveElements();
        this.setupSolvers();
        this.setupEvents();
    }
}

const solver = new EmSolver;
solver.init();