/**
 * Initial Application
 * @date Nov 01, 2022
 * @author Dudi.I
 */
import _ from 'lodash';

import './components/hero.js';
import './components/navbar.js';
import './components/modal-faq.js';
import './components/movie-list.js';
import './components/announcement.js';
import './components/top-particle.js';
import './components/bottom-particle.js';
import './components/modal-movie-detail.js';
import { renderHTML } from './utils/index.js';
import MovieDataSource from './data-sources/movie-data-source.js';

const App = () => {
    const root = document.getElementById('root');

    renderHTML(root, `
        <div class="isolate bg-white">
            <top-particle-component></top-particle-component>
            <navbar-component></navbar-component>
            <main>
                <div class="relative px-6 lg:px-8">
                    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <announcement-component></announcement-component>
                        <hero-component></hero-component>
                        <movie-list-component></movie-list-component>
                        <bottom-particle-component></bottom-particle-component>
                    </div>
                </div>
            </main>
        </div>
        <modal-faq-component></modal-faq-component>
        <modal-movie-detail-component></modal-movie-detail-component>
    `);

    /**
     * Querying DOM
     */
    const modalMovieDetailComponent = document.querySelector('modal-movie-detail-component');
    const announcementComponent = document.querySelector('announcement-component');
    const movieListComponent = document.querySelector('movie-list-component');
    const modalFaQComponent = document.querySelector('modal-faq-component');
    const heroComponent = document.querySelector('hero-component');
    const faqBtn = document.getElementById('faqBtn');

    /**
     * Functions Declaration
     */
    const searchMovie = async (event, keyword = 'marvel', page = 1) => {
        const loadMoreBtn = document.getElementById('loadMoreButton');
        let tempData = movieListComponent.data;
        let query = heroComponent.value;

        if (_.isEmpty(tempData)) tempData = [];
        if (_.isEmpty(query)) query = keyword;
        if (loadMoreBtn) {
            loadMoreBtn.setAttribute('disabled', true);
            loadMoreBtn.innerHTML = 'Loading...';
        }

        // Clean Data
        if (!_.isEmpty(event)) {
            tempData = [];
            movieListComponent.defaultData = null;
            movieListComponent.render();
        }

        document.getElementById('movieResult').innerHTML = 'Loading...';

        const movies = await MovieDataSource.searchMovie(query, page);

        movieListComponent.defaultData = {
            Search: [...tempData, ...(movies?.Search || [])],
            totalResults: movies.totalResults,
        };

        if (loadMoreBtn) {
            loadMoreBtn.setAttribute('disabled', false);
            loadMoreBtn.innerHTML = 'Load More';
        }
        movieListComponent.setKeyword = keyword;
        movieListComponent.setPage = page;
        movieListComponent.render();
    };

    const modalDetailToggle = () => {
        modalMovieDetailComponent.toggle = true;
        modalMovieDetailComponent.render();
    };

    const loadMoreEvent = () => {
        const { keyword, page } = movieListComponent;

        searchMovie(null, keyword, page + 1);
    };

    const announcementClickDetail = () => {
        modalMovieDetailComponent.defaultData = announcementComponent.data;
        modalMovieDetailComponent.render();
        modalDetailToggle();
    };

    const getMovieDetail = async (id) => {
        const detail = await MovieDataSource.getMovieDetail(id);
        modalMovieDetailComponent.defaultData = detail;
        modalMovieDetailComponent.render();
    };

    const getNewMovie = async () => {
        const newMovie = await MovieDataSource.getNewMoview();
        announcementComponent.defaultData = newMovie;
        announcementComponent.render();
        modalMovieDetailComponent.defaultData = newMovie;
        modalMovieDetailComponent.render();
    };

    const movieItemClickDetail = (id) => {
        modalMovieDetailComponent.defaultData = {};
        getMovieDetail(id);
        modalDetailToggle();
    };

    const modalFaqToggle = () => {
        modalFaQComponent.toggle = true;
        modalFaQComponent.render();
    };

    /**
     * Event Listener
     */
    heroComponent.clickEvent = searchMovie;
    faqBtn.addEventListener('click', modalFaqToggle);
    movieListComponent.loadMoreEvent = loadMoreEvent;
    movieListComponent.evenClickDetail = movieItemClickDetail;
    announcementComponent.evenClickDetail = announcementClickDetail;

    /**
     * Initial Function
     */
    searchMovie();
    getNewMovie();
};

export default App;
