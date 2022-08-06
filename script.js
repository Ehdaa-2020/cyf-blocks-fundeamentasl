var links, item;


links = ['https://www.ebay.co.uk/', 'https://www.childsavers.org/', 'https://www.gla.ac.uk/'];
item = ['ebay', 'childsavers', 'university of Glasgow'];
let element_list = document.getElementById('list');
while (!!links.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", links.shift());
  new_a.innerText = item.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
