import './top-particle.js';
import CoreComponent from './core-component.js';

class ModalMovieDetailComponent extends CoreComponent {
    set defaultData(data) {
        this._item = data;
        this.render();
    }

    set toggle(show) {
        this._show = show;
        this.render();
    }

    render() {
        const html = `
        <div id="movieDetailModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full ${this._show ? 'show' : ''} mt-5 transition-all" style="display:${this._show ? 'block' : 'hidden'}">
            <div class="relative w-full max-w-2xl h-full md:h-auto m-auto">
                <div class="relative bg-white rounded-lg shadow isolate">
                    <top-particle-component></top-particle-component>
                    <div class="flex justify-between items-start p-4 rounded-t border-">
                        <h3 class="text-xl font-semibold text-gray-900">
                            ${this._item?.Title || 'Loading...'}
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="movieDetailModal" id="movieDetailModalToggle">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="overflow-y-auto max-h-[85vh]">
                    ${this._item?.Title ? (`
                        <div class="p-6 space-y-6">
                            <div class="flex justify-center">
                                <img src="${this._item?.Poster}" alt="${this._item?.Title}" class="rounded">
                            </div>
                            <p class="mt-6 text-sm text-gray-600 sm:text-center">
                                ${this._item?.Plot}<br>
                                ${this._item?.Actors}
                            </p>
                            <table class="table-auto w-full text-sm">
                                <tbody>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Released</td>
                                        <td class="px-4 py-2">${this._item?.Released}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Genre</td>
                                        <td class="px-4 py-2">${this._item?.Genre}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Director</td>
                                        <td class="px-4 py-2">${this._item?.Director}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Writer</td>
                                        <td class="px-4 py-2">${this._item?.Writer}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Language</td>
                                        <td class="px-4 py-2">${this._item?.Language}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Country</td>
                                        <td class="px-4 py-2">${this._item?.Country}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Awards</td>
                                        <td class="px-4 py-2">${this._item?.Awards}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">BoxOffice</td>
                                        <td class="px-4 py-2">${this._item?.BoxOffice || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 text-gray-600">Ratting</td>
                                        <td class="px-4 py-2">${this._item?.imdbRating}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `) : ''}
                    </div>
                </div>
            </div>
        </div>
        ${this._show ? (`
            <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        `) : ''}
        `;

        super.render(html);

        // Add functionality to the modalToggle
        this.querySelector('#movieDetailModalToggle').addEventListener('click', () => {
            this._show = false;
            this.render();
        });
    }
}

customElements.define('modal-movie-detail-component', ModalMovieDetailComponent);
