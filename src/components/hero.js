import CoreComponent from './core-component.js';

class HeroComponent extends CoreComponent {
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#inputQuery').value;
    }

    render() {
        const html = `
        <div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                Hola, Welcome to Movie Finder 👋
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                let's explore the best movies in the world, use search to get accurate results, and see the ranking of your favorite movies on OMDB
            </p>

            <div class="mt-8 flex gap-x-4 sm:justify-center">
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:max-w-xs" placeholder="Search Movie" id="inputQuery">
                <a href="#" id="btnSearch" class="inline-block rounded-lg bg-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-600 hover:bg-rose-700 hover:ring-rose-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
        `;

        super.render(html);

        // Add functionality to the button
        this.querySelector('#btnSearch').addEventListener('click', this._clickEvent);
    }
}

customElements.define('hero-component', HeroComponent);
