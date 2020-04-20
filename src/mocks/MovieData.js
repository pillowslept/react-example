const SUSPENSE = { id: 1, name: 'Suspense', movies: 3 };
const HORROR = { id: 2, name: 'Horror', movies: 9 };
const FANTASY = { id: 3, name: 'Fantasy', movies: 8 };
const COMIC_BOOK = { id: 4, name: 'Comic Book', movies: 7 };
const SUPERHEROES = { id: 5, name: 'Superheroes', movies: 10 };
const SCIENCE_FICTION = { id: 6, name: 'Science Fiction', movies: 2 };
const ADVENTURE = { id: 7, name: 'Adventure', movies: 4 };

const MARVEL_STUDIOS = { id: 1, name: 'Marvel Studios', created_at: '01/11/2019' };
const CENTURY_FOX = { id: 2, name: '20th Century Fox', created_at: '01/11/2012' };

export const COMPANIES = [MARVEL_STUDIOS, CENTURY_FOX];

export const MOVIES =
[
  {
    id: 1,
    title: 'X-Men: Dark Phoenix',
    company: CENTURY_FOX,
    date: '01/11/2019',
    genres: [COMIC_BOOK],
  },
  {
    id: 2,
    title: 'Ant Man & The Wasp',
    company: MARVEL_STUDIOS,
    date: '10/10/2018',
    genres: [FANTASY, COMIC_BOOK, SCIENCE_FICTION],
  },
  {
    id: 3,
    title: 'Thor: Dark World',
    company: MARVEL_STUDIOS,
    date: '10/10/2015',
    genres: [HORROR, SUSPENSE],
  },
  {
    id: 4,
    title: 'Captain Marvel',
    company: MARVEL_STUDIOS,
    date: '10/10/2019',
    genres: [SCIENCE_FICTION, COMIC_BOOK, SUSPENSE],
  },
  {
    id: 5,
    title: 'Black Widow',
    company: MARVEL_STUDIOS,
    date: '03/03/2020',
    genres: [COMIC_BOOK, SUSPENSE, FANTASY, SUPERHEROES, SCIENCE_FICTION, ADVENTURE],
  },
];

export const GENRES = [
  SUSPENSE,
  HORROR,
  FANTASY,
  COMIC_BOOK,
  SUPERHEROES,
  SCIENCE_FICTION,
  ADVENTURE,
];
