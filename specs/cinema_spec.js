const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function() {

  let cinema;
  let film1;
  let film2;
  let film3;

  beforeEach(function (){
    cinema = new Cinema ("The cinema")
    film1 = new Film("Jaws", "horror", 1977, 120);
    film2 = new Film("Jaws2", "horror", 1980, 150);
    film3 = new Film("Babe", "kids", 2000, 125);
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
  });

  it('should have a name', function(){
    const actual=cinema.name;
    assert.strictEqual(actual, 'The cinema');
  })

  it('should have films', function(){
    const actual=cinema.films
    assert.deepStrictEqual(actual, [film1,film2,film3])
  })

  it('should be able ot get all film titles', function(){
    const actual = cinema.getTitles();
    assert.deepStrictEqual(actual, ["Jaws", "Jaws2", "Babe"]);
  })

  it('should be able to find a film by title', function(){
    const actual =cinema.getFilmByTitle('Jaws');
    assert.deepStrictEqual(actual, film1)
  })

  it('should be able to find a film by genre', function(){
    const actual =cinema.getFilmByGenre('horror');
    assert.deepStrictEqual(actual, [film1, film2])
  })

  it('should be able to get films by year', function(){
    const actual =cinema.getFilmByYear(2000);
    assert.deepStrictEqual(actual, true);
  })

  it('should be able to get films by min length', function(){
    const actual =cinema.getFilmByMinLength(121);
    assert.deepStrictEqual(actual, false);
  })

  it('should be able to get films total running time', function(){
    const actual =cinema.getFilmTotalRunningTime();
    assert.deepStrictEqual(actual, 395);
  })


});
