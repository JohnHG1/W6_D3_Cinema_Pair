const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');


describe('Film', function() {

  let cinema;
  let film1;
  let film2;
  let film3;

  beforeEach(function (){

    film1 = new Film("Jaws", "horror", 1977, 120);
    film2 = new Film("Jaws2", "horror", 1980, 150);
    film3 = new Film("Babe", "kids", 2000, 120);

  });

  it('should have a titles', function(){
    const actual=film1.title;
    assert.strictEqual(actual, 'Jaws');
  })

  it('should have a genre', function(){
    const actual=film1.genre;
    assert.strictEqual(actual, 'horror')
  })

  it('should have a year', function(){
    const actual=film1.year;
    assert.strictEqual(actual, 1977)
  })

  it('should have a length', function(){
    const actual=film1.length;
    assert.strictEqual(actual, 120)
  })


});
