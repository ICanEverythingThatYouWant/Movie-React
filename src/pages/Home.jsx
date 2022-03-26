import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import {Link} from "react-router-dom";
import {OutLineButton} from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import {movieType, category, tvType} from "../api/tmdbApi";
const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                      <h2> Trending Movies</h2>
                    <Link to="/movie">
                        <OutLineButton className="small">
                            View more
                        </OutLineButton>
                    </Link>
                    </div>
                    <MovieList categoty={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutLineButton className="small">
                                View more
                            </OutLineButton>
                        </Link>
                    </div>
                    <MovieList categoty={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutLineButton className="small">
                                View more
                            </OutLineButton>
                        </Link>
                    </div>
                    <MovieList categoty={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutLineButton className="small">
                                View more
                            </OutLineButton>
                        </Link>
                    </div>
                    <MovieList categoty={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    )
}

export default Home;