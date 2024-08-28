// Select elements
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// List of fruits
const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
  'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 
  'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 
  'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 
  'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 
  'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
  'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 
  'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 
  'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 
  'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
  'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 
  'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 
  'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 
  'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 
  'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

// Function to search for fruits based on user input
function search() {
  const query = input.value.trim().toLowerCase();
  suggestions.innerHTML = "";

  if (query === "") {
    suggestions.style.display = "none";
    return;
  }

  const results = fruit.filter(fruit => fruit.toLowerCase().includes(query));

  if (results.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  displayResults(results);
}

// Function to display search results
function displayResults(results) {
  suggestions.style.display = "block";

  results.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;

    li.addEventListener('click', function() {
      input.value = fruit;
      suggestions.innerHTML = "";
      suggestions.style.display = "none";
    });

    suggestions.appendChild(li);
  });
}

// Event listener for input changes
input.addEventListener("input", search);
