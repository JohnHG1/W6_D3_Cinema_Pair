const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');


describe('Film', function() {

  beforeEach(function (){

    let cinema;
    let film1;
    let film2;
    let film3;

  film1 = new Film("Jaws", "horror", 1977, 120);
  film2 = new Film("Jaws2", "horror", 1980, 150);
  film3 = new Film("Babe", "kids", 2000, 120);

});

});
