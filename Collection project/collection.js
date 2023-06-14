const collection = [
  {
    name: 'The Big Bang Theory',
    picture: './images/TBBT.jpg',
    genre: ['Comedy, Romance'],
    rating: 8.2,
    Year_release: 2007,
    cast: ['Johnny Galecki', 'Jim Parsons', 'Kaley Cuoco', 'Simon Helberg'],
    plot: "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
    trailer: "https://www.youtube.com/watch?v=rCj-Fb1OmXg",
  },
  {
    name: 'Young Sheldon',
    picture: 'images/YS.jpg',
    genre: ['Comedy'],
    rating: 7.6,
    Year_release: 2017,
    cast: ['Iain Armitage', 'Zoe Perry', 'Lance Barber', 'Raegan Revord'],
    plot: "Meet a child genius named Sheldon Cooper (already seen as an adult in The Big Bang Theory (2007)) and his family. Some unique challenges face Sheldon, who is socially impaired.",
    trailer: "https://www.youtube.com/watch?v=iGKnI3Lc7C4",
  },
  {
    name: 'Stranger Things',
    picture: 'images/ST.png',
    genre: ['Drama, Fantasy, Horror'],
    rating: 8.7,
    Year_release: 2016,
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder', 'David Harbour'],
    plot: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
  },
  {
    name: 'The Boys',
    picture: 'images/TB.jpg',
    genre: ['Action, Scifi, Crime'],
    rating: 8.7,
    Year_release: 2019,
    cast: ['Karl Urban', 'Jack Quaid', 'Antony Starr', 'Erin Moriarty'],
    plot: 
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
  },
  {
    name: 'Game of Thrones',
    picture: 'images/GOT.jpg',
    genre: ['Action, Adventure, Fantasy'],
    rating: 9.2,
    Year_release: 2011,
    cast: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington', 'Lena Headey'],
    plot: 
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
  },
  {
    name: 'Snowpiercer',
    picture: 'images/SP.jpeg',
    genre: ['Action, Drama, Scifi'],
    rating: 6.9,
    Year_release: 2020,
    cast: ['Daveed Diggs', 'Jennifer Connelly', 'Mickey Sumner', 'Alison Wright'],
    plot:
      "Seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a perpetually-moving train that circles the globe, where class warfare, social injustice and the politics of survival play out.",
    trailer: "https://www.youtube.com/watch?v=lGcJL6TG5cA",
    },
  {
    name: 'Altered Carbon',
    picture: 'images/AC.jpg',
    genre: ['Action, Scifi, Drama'],
    rating: 7.9,
    Year_release: 2018,
    cast: ['Joel Kinnaman', 'Ato Essandoh', 'Martha Higareda', 'Will Yun Lee'],
    plot: 
      "Set in a future where consciousness is digitized and stored, a prisoner returns to life in a new body and must solve a mind-bending murder to win his freedom.",
    trailer: "https://www.youtube.com/watch?v=M8PsZki6NGU",
    },
  {
    name: 'Raised By Wolves',
    picture: 'images/RBW.jpg',
    genre: ['Scifi, Drama, Fantasy'],
    rating: 7.5,
    Year_release: 2020,
    cast: ['Travis Fimmel', 'Amanda Collin', 'Abubakar Salim', 'Winta McGrath'],
    plot: "After Earth is torn apart by religious differences and the human race teeters on the edge of extinction, an atheistic android architect sends two creations--Mother and Father--to start a peaceful, godless colony on the planet Kepler-22b.",
    trailer: "https://www.youtube.com/watch?v=nAg6RTQEfeM",
  },
  {
    name: 'From',
    picture: 'images/F.jpg',
    genre: ['Horror, Mystery, Drama'],
    rating: 7.7,
    Year_release: 2022,
    cast: ['Harold Perrineau', 'Catalina Sandino Moreno', 'Eion Bailey', 'Elizabeth Saunders'],
    plot: "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normalcy and seek a way out, they must also survive the threats of the surrounding forest.",
    trailer:  "https://www.youtube.com/watch?v=1WTED3iU_zU",
  },
  {
    name: 'Black Mirror',
    picture: 'images/BM.jpg',
    genre: ['Scifi, Mystery, Drama'],
    rating: 8.8,
    Year_release: 2011,
    cast: ['Rory Kinnear', 'Aaron Paul', 'Kelly Macdonald', 'Jon Hamm'],
    plot: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    trailer: "https://www.youtube.com/watch?v=V0XOApF5nLU",
  },
];

console.log(collection);

const container = document.getElementById("container")

container.style.display = "flex"
container.style.justifyContent = "space-between"
container.style.flexWrap = "wrap"
container.style.padding = "0px 100px"
container.style.backgroundColor = "#d2f7f6"

let mainCard = document.createElement("div")

let topPicture = document.createElement("div")

let bottomContent = document.createElement("div")

let cardHeader = document.createElement("div")

let cardContent = document.createElement("div")

let mainTitle = document.createElement("h1")

let subTitle = document.createElement("h2")

let paragraph = document.createElement("p")

let ratingTag = document.createElement("div")
let Year_releaseTag = document.createElement("div")

let trailer = document.createElement("button")


let show = collection

const createCard = (show) => {
  // main card
  let mainCard = document.createElement("div");
  mainCard.style.width = "300px";
  mainCard.style.border = "2px solid black";
  mainCard.style.borderRadius = "5px"
  mainCard.style.marginBottom = "30px";
  mainCard.style.backgroundColor = "white";

  //hover effect XL size

  mainCard.addEventListener("mouseenter", function() {
    mainCard.style.transform = "scale(1.1)";
    mainCard.style.transition = "transform 0.3s";
    mainCard.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  });
  mainCard.addEventListener("mouseleave", function() {
    mainCard.style.transform = "scale(1)";
    mainCard.style.transition = "transform 0.3s";
    mainCard.style.boxShadow = "none";
  });

  mainCard.addEventListener("mouseleave", function() {
    mainCard.style.transform = "scale(1)";
    mainCard.style.transition = "transform 0.3s";
    mainCard.style.boxShadow = "none";
  });
  
  document.body.appendChild(mainCard);


  // top picture
  let topPicture = document.createElement("div");
  topPicture.style.height = "200px";
  topPicture.style.backgroundImage = `url(${show.picture})`;
  topPicture.style.backgroundPositionY = "-45px";
  topPicture.style.backgroundPosition = "0px";
  topPicture.style.backgroundSize = "cover";
  mainCard.append(topPicture);

  // bottom content
  let bottomContent = document.createElement("div");
  bottomContent.style.padding = "20px";
  

  // card header
  let cardHeader = document.createElement("div");
  let ratingTag = document.createElement("div");
  let Year_releaseTag = document.createElement("div");

  ratingTag.innerText = show.rating;
  ratingTag.style.padding = "5px 30px";
  ratingTag.style.backgroundColor = "#bc62f5";
  ratingTag.style.borderRadius = "10px";
  ratingTag.style.width="30px"

  cardHeader.append(ratingTag);
  cardHeader.style.display="flex"
  cardHeader.style.justifyContent="space-around"


  Year_releaseTag.innerText = show.Year_release;
  Year_releaseTag.style.padding = "5px 30px";
  Year_releaseTag.style.backgroundColor = "#34ebb1";
  Year_releaseTag.style.borderRadius = "10px";
  Year_releaseTag.style.width="30px"

  cardHeader.append(Year_releaseTag);

  bottomContent.append(cardHeader);

  // card content
  let cardContent = document.createElement("div");

  let mainTitle = document.createElement("h1");
  mainTitle.innerText = show.name;
  cardContent.append(mainTitle);

  let subTitle = document.createElement("h2");
  subTitle.innerText = show.genre.join(", "); // Join multiple genres with comma
  cardContent.append(subTitle);

  let paragraph = document.createElement("p");
  paragraph.innerText = show.plot; // Access the first plot element
  cardContent.append(paragraph);

  bottomContent.append(cardContent);

  mainCard.append(bottomContent);

  container.append(mainCard);

  //trailer button

  
  let trailer = document.createElement("button")
  trailer.textContent = "Trailer"
  
  let link = document.createElement("a")
  link.id = `${collection.indexOf(show)}`
  link.style.textDecoration = "none"
  link.target = "_blank"
  link.href = show.trailer
  

  cardContent.append(link)
  document.getElementById(`${collection.indexOf(show)}`).appendChild(trailer)
  cardContent.append(trailer)
  trailer.style.width = "70px"
  trailer.style.height = "25px"
  trailer.style.backgroundColor = "black"
  trailer.style.color = "white"
  trailer.style.borderRadius = "5px"
  trailer.style.fontSize = "15px"
  

  link.appendChild(trailer);

};

collection.forEach((show) => {
  createCard(show);
});
