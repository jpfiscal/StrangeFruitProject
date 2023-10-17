const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter(function(v){
		return v.toLowerCase().indexOf(str) != -1;
	});
	return results;
}

function searchHandler(e) {
	let suggList = search(input.value.toLowerCase());
	clearSuggestions();
	if(input.value){
		showSuggestions(suggList);
	}
}

function showSuggestions(results) {
	suggestions.style.display = "block";
	results.forEach(function(val){
		let suggItem = document.createElement("li");
		suggItem.innerText = val;
		suggestions.appendChild(suggItem);
	});
	
}

function useSuggestion(e) {
	console.log(e.target.innerText);
	clearSuggestions();
	input.value = e.target.innerText;
}

function clearSuggestions(){
	while (suggestions.lastChild){
		suggestions.removeChild(suggestions.lastChild);
	}
	suggestions.style.display = "none";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.style.display = "none";
//for step 8, the ul li:hover statement in the CSS already does this