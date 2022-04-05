/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import React from 'react';
import './styles.css';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { films, genres } from '../../data';
import FilmCard from './FilmCard';
import users from '../../userData';
import GenreCard from './GenreCard';
import Footer from '../footer';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.next = this.next.bind(this);
    this.stateSet = this.stateSet.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      recent: [],
      liked: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({
      recent: [...films.filter((film) => users[0].recent.includes(film.id))],
      liked: [...films.filter((film) => !users[0].recent.includes(film.id))],
    });
  }

  stateSet(target, newArray) {
    this.setState({
      [target]: [...newArray],
    });
  }

  next(array, name) {
    const newArray = [...array];
    newArray.unshift(newArray.pop());
    this.stateSet(name, newArray);
  }

  previous(array, name) {
    const newArray = [...array];
    newArray.push(newArray.shift());
    this.stateSet(name, newArray);
  }

  render() {
    const {
      recent, liked,
    } = this.state;
    return (
      <main className="FilmGallery">
        <p className="FilmTitle">Continue Watching</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(recent, 'recent')} className="previousButton"><FcPrevious color="white" size="40px" /></div>
          <div className="MovieGrid">
            { recent.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(recent, 'recent')} className="nextButton"><FcNext size="40px" /></div>
        </div>
        <p className="FilmTitle">Latest Movies</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(liked, 'liked')} className="previousButton"><FcPrevious size="40px" /></div>
          <div className="MovieGrid">
            { liked.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(liked, 'liked')} className="nextButton"><FcNext size="40px" /></div>
        </div>
        <p className="FilmTitle">Movies by Genre</p>
        <div className="Genres">
          { genres.map((genre) => <GenreCard name={genre.name} thumb={genre.thumb} />)}
        </div>
        <Footer />
      </main>
    );
  }
}

export default MainContainer;
