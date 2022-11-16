import CoreComponent from './core-component.js';

class MoviewItemComponent extends CoreComponent {
    set defaultData(data) {
        this._item = data;
        this.render();
    }

    set evenClickDetail(event) {
        this._eventClickDetail = event;
        this.render();
    }

    render() {
        const html = `
            <div class="group relative" id="${this._item?.imdbID}">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src="${this._item?.Poster}" alt="${this._item?.Title}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <a href="#"> <span aria-hidden="true" class="absolute inset-0"></span> ${this._item?.Title} </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500"> ${this._item?.Type} </p>
                    </div>
                    <p class="text-sm font-medium text-gray-900"> ${this._item?.Year} </p>
                </div>
            </div>
        `;

        super.render(html);

        // Add functionality to the modalToggle
        this.querySelector(`#${this._item?.imdbID}`).addEventListener('click', () => this._eventClickDetail(this._item?.imdbID));
    }
}

customElements.define('movie-item-component', MoviewItemComponent);
