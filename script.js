let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const title = document.getElementById('main-title')
  title.textContent = "Welcome"

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = 'pink';

  // Part 3
  const list = document.getElementById('favorite-things');
  list.removeChild(list.childNodes[11]);

  // Part 4

  const specialTitle = document.querySelectorAll('.special-title');
  for (let i=0; i<specialTitle.length; i++)
  specialTitle[i].style.fontSize = '2rem' //32px

  // Part 5

  const listRace = document.querySelector("#past-races li:nth-child(4)");
  //console.log(listRace)
  listRace.remove();

  // Part 6

  const element = document.getElementById('past-races');
  const liLast = document.createElement('past-races.li');
  // console.log(liLast)
  liLast.textContent = 'Paris'
  element.appendChild(liLast)

  // Part 7

   const newdiv = document.createElement("div");
   const curdiv = document.querySelector('.blog-post');
   const prt = curdiv.parentNode;
   const new_div = prt.appendChild(newdiv);
   const el1 = new_div.setAttribute("class", "blog-post purple");
   h1 = document.createElement('h1');
   new_div.appendChild(h1);
   p = document.createElement('p');
   new_div.appendChild(p);
   h1.textContent = "Paris";
   p.textContent = "Input some text in here.";

  // Part 8

  document.getElementById("quote-title").onclick = function() {
  randomQuote();
  };

  // Part 9

  const all = document.querySelectorAll('.blog-post');
  document.querySelectorAll('.blog-post').forEach(all =>{
  all.addEventListener('mouseout', () => {
  all.classList.toggle('purple');
    });
  all.addEventListener('mouseenter', () => {
  all.classList.toggle('red');
    });
});
})
