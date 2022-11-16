import CoreComponent from './core-component.js';

class AnnouncementComponent extends CoreComponent {
    set defaultData(data) {
        this._item = data;
        this.render();
    }

    get data() {
        return this._item;
    }

    set evenClickDetail(event) {
        this._eventClickDetail = event;
        this.render();
    }

    render() {
        const html = `
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span class="text-gray-600">
                        ${this._item?.Title || 'Loading...'} is a new movie from indonesia. 
                        <button class="font-semibold text-rose-600"><span class="absolute inset-0" type="button" id="announcementMovieDetailBtn">
                            </span>Details <span aria-hidden="true">&rarr;</span>
                        </button>
                    </span>
                </div>
            </div>
        `;

        super.render(html);

        // Add functionality to the modalToggle
        this.querySelector('#announcementMovieDetailBtn').addEventListener('click', this._eventClickDetail);
    }
}

customElements.define('announcement-component', AnnouncementComponent);
