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



module.exports = Cinema;
