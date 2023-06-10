console.log('script.js loaded');

window.addEventListener('load', function(e){
	console.log('Window loaded, DOM created');
	init();
});

function init(){
	console.log('In init()');
	//load all drinks
	getAllDrinks();
	//Event listeners for existing buttons/forms etc.
	document.newDrinkForm.addDrinkButton.addEventListener('click', function(e){
		let form = document.newDrinkForm;
		let theDrink = {
			name: form.name.value,
			caffeine: form.caffeine.value,
			size: form.size.value,
			imageUrl: form.imageUrl.value
		};
		//console.log(theDrink);
		if (theDrink.name !== ""){
			addDrink(theDrink);
		}
			
	});
}

function getAllDrinks(){
	//XHR to GET list endpoints of API, call displayAllEvents to show on page
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/drinks');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
			if(xhr.status === 200 || xhr.status === 201) {
				let drinkList = JSON.parse(xhr.responseText);
				//console.log(drinkList);
				displayAllDrinks(drinkList);
			} 
			else {
				displayError(" Error getting drinks")
			}
		}
	};
	
	xhr.send();
}

function displayAllDrinks(drinkList){
	let tbody = document.getElementById('drinkListTableBody');
	tbody.textContent = '';
	if(drinkList && Array.isArray(drinkList)){
		for(let drink of drinkList) {
			let tr = document.createElement('tr');
			tbody.appendChild(tr);
			
			let td = document.createElement('td');
			tr.appendChild(td);
			let imgTag = document.createElement('img');
			imgTag.src = drink.imageUrl
			imgTag.classList.add('thumbnailImage');
			td.appendChild(imgTag);
			
			td = document.createElement('td');
			td.textContent = drink.name;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = drink.size;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = drink.caffeine;
			tr.appendChild(td);
			
			tr.addEventListener('click', function(e){
				let drinkId = drink.id;
				getDrinkDetails(drinkId);
			});
		}
	}
	
}

function getDrinkDetails(drinkId){
	//XHR for single drink
	//console.log('Getting stand details for drink id: ' + drinkId);
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/drinks/' + drinkId);
	xhr.onreadystatechange = function(){		
		if(xhr.readyState === 4) {
			if(xhr.status === 200 || xhr.status === 201) {
				let drink = JSON.parse(xhr.responseText);
				//console.log(drink);
				
				//hides divs not part of single drink view
				document.getElementById('drinkListDiv').style.visibility = 'hidden';
				document.getElementById('newDrinkFormDiv').style.visibility = 'hidden';
				
				displayDrinkDetails(drink);
			}
			else {
				console.error(xhr.status + ' Error selecting drink.')
			}
		}
	};
	xhr.send();
}

function displayDrinkDetails(drink) {
	//DOM - display in drinkDetailDiv
	let detailDiv = document.getElementById('drinkDetailDiv');
	detailDiv.textContent = '';
	
	let imgTagLarge = document.createElement('img');
	imgTagLarge.src = drink.imageUrl
	imgTagLarge.classList.add('imageLarge');
	detailDiv.appendChild(imgTagLarge);
	
	let h3 = document.createElement('h3');
	h3.textContent = drink.name;
	detailDiv.appendChild(h3);
	
	let ul = document.createElement('ul');
	ul.textContent = '';
	detailDiv.appendChild(ul);
	let size = document.createElement('li');
	size.textContent = 'Size: ' +  drink.size + ' ounces';
	ul.appendChild(size);
	let caffeine = document.createElement('li');
	caffeine.textContent = 'Caffeine: ' + drink.caffeine + ' milligrams';
	ul.appendChild(caffeine);	
	
	let dataAggr = document.createElement('li');
	let caffeinePerOz = Math.round((drink.caffeine / drink.size) * 100) / 100;
	dataAggr.textContent = 'Concentration: ' + caffeinePerOz + ' mg/fl oz';
	ul.appendChild(dataAggr);
	
	
	
	let drinkDetailForm = document.getElementById("drinkDetailForm");
	drinkDetailForm.textContent = '';
	
	let updateButton = document.createElement('button');
	updateButton.textContent ='Update';
	updateButton.classList.add('btn');
	updateButton.classList.add('btn-primary');
	drinkDetailForm.appendChild(updateButton);
	
	updateButton.addEventListener('click', function(e){
		console.log(drink.id);
		updateDrink(drink.id);
	});

	let deleteButton = document.createElement('button');
	deleteButton.textContent ='Delete';
	deleteButton.classList.add('btn');
	deleteButton.classList.add('btn-danger');	
	drinkDetailForm.appendChild(deleteButton);
}

function addDrink(newDrink) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/drinks');
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				getAllDrinks();
			}
			else {
				displayError("Drink was not added.")
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/JSON");
	let newDrinkJson = JSON.stringify(newDrink);
	xhr.send(newDrinkJson);
}

function updateDrink(drinkId){
	
}

function updateDrinkXHR(updatedDrink){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/drinks/' + updatedDrink.id);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				getAllDrinks();
			}
			else {
				displayError("Drink was not updated.");
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/JSON");
	let updatedDrinkJson = JSON.stringify(updatedDrink);
	xhr.send(updatedDrinkJson);
}

function deleteDrink(drinkId) {
	//call “get all” method on successful delete, to refresh displayed list.
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/drinks/' + drinkId);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if(xhr.status === 204 || xhr.status === 200) {
				getAllDrinks();
			}
			else {
				displayError("Error deleting drink.")
			}
		}
	}
	xhr.send();
}

function displayError(errorMessage){
	let detailDiv = document.getElementById('drinkDetailDiv');
	detailDiv.textContent = '';
	let messageElement = document.createElement('h2');
	messageElement.textContent = errorMessage;
	messageElement.style.color = 'red';
	detailDiv.appendChild(messageElement);
}






