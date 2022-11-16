import './movie-item.js';
import CoreComponent from './core-component.js';

class MoviewListComponent extends CoreComponent {
    set defaultData(data) {
        const defaultItem = {
            Search: [],
            totalResults: 0,
        };
        this._item = data || defaultItem;
        this.render();
    }

    set setKeyword(keyword) {
        this._keyword = keyword;
    }

    get keyword() {
        return this._keyword;
    }

    set setPage(keyword) {
        this._page = keyword;
    }

    get page() {
        return this._page;
    }

    get data() {
        return this._item?.Search;
    }

    set loadMoreEvent(event) {
        this._loadMoreEvent = event;
        this.render();
    }

    set evenClickDetail(event) {
        this._eventClickDetail = event;
    }

    render() {
        const html = `
            <div class="">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900" id="movieResult">Results ${(this._item?.Search || []).length} of ${this._item?.totalResults || 0}</h2>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" id="wrapper-list">
                    </div>
                    <div id="wrapper-pagination" class="mt-6 text-center"></div>
                </div>
            </div>
        `;

        super.render(html);

        // Preparation for then item
        this._item?.Search.forEach((item) => {
            const movieItemComponent = document.createElement('movie-item-component');
            movieItemComponent.defaultData = item;
            movieItemComponent.evenClickDetail = this._eventClickDetail;
            this.querySelector('#wrapper-list').appendChild(movieItemComponent);
        });

        // Add Load More Button
        if ((this._item?.totalResults || 0).toString() !== this._item?.Search.length.toString()
            && this._item?.totalResults > 0) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.id = 'loadMoreButton';
            loadMoreButton.classList.add('w-full', 'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'focus:ring-rose-500', 'focus:border-rose-500', 'sm:max-w-xs', 'mx-auto', 'mt-4', 'text-center', 'bg-rose-600', 'text-white', 'font-semibold', 'hover:bg-rose-700', 'hover:ring-rose-700');
            loadMoreButton.innerText = 'Load More';
            loadMoreButton.addEventListener('click', this._loadMoreEvent);
            this.querySelector('#wrapper-pagination').appendChild(loadMoreButton);
        }
    }
}

customElements.define('movie-list-component', MoviewListComponent);
