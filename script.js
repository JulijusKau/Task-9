/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget + " mln USD";
  }
  wasExpensive() {
    if (this.budget > 100000000 + " mln USD") {
      return true;
    } else {
      return false;
    }
  }
}

const superDuperNewMovie = new Movie("whatever", "whatever", 100000001);
const superDuperNewMovie2 = new Movie("whatever", "whatever", 100000000);
