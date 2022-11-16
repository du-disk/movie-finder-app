import CoreComponent from './core-component.js';
import logo from '../assets/logo.webp';

class NavbarComponent extends CoreComponent {
    render() {
        const html = `
            <div class="px-6 pt-6 lg:px-12">
                <nav class="flex h-9 items-center justify-between" aria-label="Global">
                    <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Movie Finder</span>
                            <img class="h-12" src="${logo}" alt="Logo Movie Finder">
                        </a>
                    </div>
                    <div class="lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                        <a href="/" class="font-semibold text-gray-900 hover:text-gray-900 mr-2"> Home </a>
                        <button type="button" id="faqBtn" class="font-semibold text-gray-900 hover:text-gray-900 ml-2">FAQ</button>
                    </div>
                    <div class="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <a href="https://www.dicoding.com/users/brodud" target="blank" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        `;

        super.render(html);
    }
}

customElements.define('navbar-component', NavbarComponent);
