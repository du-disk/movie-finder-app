/**
 * Datasource Initialization
 */
import instance from '../configs/axios.js';
import apiConfig from '../configs/api-config.js';

class MovieDataSource {
    static async getNewMoview() {
        try {
            const response = await instance.get('/', {
                params: {
                    i: apiConfig.NEWS_MOVIE_ID,
                },
            });

            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async searchMovie(keyword, page) {
        try {
            const response = await instance.get('/', {
                params: {
                    s: keyword,
                    page,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return {
                Search: [],
                totalResults: 0,
            };
        }
    }

    static async getMovieDetail(id) {
        try {
            const response = await instance.get('/', {
                params: {
                    i: id,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default MovieDataSource;
