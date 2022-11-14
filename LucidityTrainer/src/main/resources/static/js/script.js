window.addEventListener('load', function(){
	console.log('LOADED');
	init();
});

function init(){
	//Set up event listeners
	//load initial data
	loadDreamList();
};

function loadDreamList(){
	//Todo: XHR to get to the list
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dreams');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let dreams = JSON.parse(xhr.responseText);
				displayDreamList(dreams);
			}else{
				displayError("Error retrieving Dream List " + xhr.status);
			}
		}
	};
	xhr.send();
};
function displayError(msg){
	let errorDiv = document.getElementById('errorsDiv');
	errorDiv.textContent = '';
	let h4 = document.createElement('h4');
	h4.textContent = msg;
	errorDiv.appendChild(h4);
};

function displayDreamList(dreams){
	//Add dreams to DOM
	let tbody = document.getElementById('dreamTableBody');
	tbody.textContent ='';
	if(dreams && Array.isArray(dreams) && dreams.length > 0){
		for(let dream of dreams){
			let tr = document.createElement('tr');
			let td = document.createElement('td');
			td.textContent = dream.id;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = dream.name;
			tr.appendChild(td);
			tbody.appendChild(tr);
			tr.addEventListener('click', function(evt){
				getDream(dream.id);
			})
		}
	}
};
function getDream(dreamId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/dreams/${dreamId}`)
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let dream = JSON.parse(xhr.responseText);
				displayDream(dream);
			}else{
				displayError("Error retrieving Dream " + xhr.status);
			}
		}
	};
	xhr.send();
};
	


function displayDream(dream){
	let dreamDetailsDiv = document.getElementById('dreamDetailsDiv');
	dreamDetailsDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = dream.name;
	dreamDetailsDiv.appendChild(h2);
	let bq = document.createElement('bq');
	bq.textContent = dream.description;
	dreamDetailsDiv.appendChild(bq);
	let updateButton = document.createElement('button');
	updateButton.textContent = 'Update Dream';
	updateButton.id = 'btn-update';
	updateButton.type = 'button';
	updateButton.value = 'Update Dream';
	
	dreamDetailsDiv.appendChild(updateButton);
	updateButton.addEventListener('click', function(evt){
		updateDreamForm(dream);
	});
	
	
	
}
function updateDreamForm(dream){
	console.log(dream);
	let dreamUpdateFormDiv = document.getElementById('dreamUpdateFormDiv');
	dreamUpdateFormDiv.textContent = '';
	let form = document.createElement('form');
	form.name = 'updateDreamForm';
	dreamUpdateFormDiv.appendChild(form);
		
	let dreamName = document.createElement('input');
	dreamName.name = dream.name;
	dreamName.value = dream.name;
	dreamName.type = 'text';
	form.appendChild(dreamName);
	
	let dreamDesc = document.createElement('input');
	dreamDesc.name = dream.description;
	dreamDesc.value = dream.description;
	dreamDesc.type = 'text';
	form.appendChild(dreamDesc);
	
	
	let submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'Update';
	submit.addEventListener('click', function(evt){
		evt.preventDefault();
		let uptDream = {
			id: dream.id,
			name: dreamName.value,
			date: dream.date,
			description: dreamDesc.value,
			lucid: dream.lucid,
			time: dream.time,
			user: dream.user
		}
		console.log(uptDream);
		updateDream(uptDream);
		form.reset();
	});
	
	form.appendChild(submit);
	
	
}
function updateDream(uptDream){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/dreams/${uptDream.id}`)
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let updatedDream = JSON.parse(xhr.responseText);
				displayDream(updatedDream); 
				loadDreamList();
			}else{
				displayError('Error updating dream: ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	let updatedDream = JSON.stringify(uptDream);
	xhr.send(updatedDream);
	
}