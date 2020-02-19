const Cinema = function (name, films =[]){

  this.name = name;
  this.films = films;
}

  Cinema.prototype.addFilm = function(film){
    this.films.push(film);
  };

  Cinema.prototype.getTitles = function(){
   return this.films.map((film) => {
     return film.title;
   });
  };

  Cinema.prototype.getFilmByTitle = function(title){
    return this.films.find((film) => {
      return (film.title === title )
    })
  }

  Cinema.prototype.getFilmByGenre = function(genre){
    return this.films.filter((film) => {
      return (film.genre === genre )
    })
  }

  Cinema.prototype.getFilmByYear = function(year){
    return this.films.some((film) => {
      return film.year === year;
    });
  }

  Cinema.prototype.getFilmByMinLength = function(length){
    return this.films.every((film) => {
      return film.length >= length;
    });
  }

  Cinema.prototype.getFilmTotalRunningTime = function(){
    return this.films.reduce((total, film) => {
      return total += film.length;
    },0);
  }

module.exports = Cinema;
