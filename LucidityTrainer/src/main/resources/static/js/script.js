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
	
	
	
}