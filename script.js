let action = [
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    year:2022,
  },
  {
    title: "fast and the furious tokyo drift",
    director: "Justin Lin",
    year:2006,
  },
  {
    title: "Mission: Impossible",
    director: "Brian De Palma",
    year:1996,
  }
]

let comedy= [{
    title:"The Wolf of Wall",
    director: "Martin Scorsese",
    year: 2014,
  },
  {
    title:"White Chicks",
    director: "Keenen Ivory Wayans",
    year:  2004,
  },
  {
    title:"Deadpool",
    director: "Tim Miller",
    year:  2016,
  }
]

let fantasy =[
  {
    title:"Monster House",
    director: "Gil Kenan",
    year: 2006,
  },
  {
    title:"Toy Story",
    director: "John Lasseter",
    year: 1995,
  },
  {
    title:"Sonic 2",
    director: "Jeff Fowler",
    year: 2022,
  }
];



let movie = action[0].title;
if (movie === "Top Gun: Maverick"){
    console.log(`My favorite movie is:`, movie)
}else{
    console.log('NOT EVEN 5 STARS')
}