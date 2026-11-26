const input = document.getElementById('country-input');
const list = document.getElementById('country-list');
const optionsEl = document.getElementById('options');

const sites = {
    
};

const countries = [];
for(let i = 0; i < list.options.length; i++){
    countries.push(list.options[i].value);
}

function showSites(){
    const typed = input.value.trim().toLowerCase();
    let country = null;

    for(let i = 0; i < countries.length; i++){
        if(countries[i].toLowerCase() === typed){
            country = countries[i];
        }
    }

    if(!country){
        optionsEl.hidden = true;
        return;
    }

    const results = sites[country] || [];

    let html = '<h2>Book Doomsday ticket in ' + country + '</h2>';
    if(results.length === 0){
        html += '<p class = "empty"> No booking available in ' + country + ' yet</p>';
    }
    else{
        for(let i = 0; i < results.length; i++){
            html += '<a class="card" href="' + results[i].url + '"target="_blank" rel="noopener noreferrer">';
            html += '<h3>' + results[i].name + '</h3>';
            html += '<span>Visit site -></span>';
            html += '</a>';
        }
    }
    optionsEl.innerHTML = html;
    optionsEl.hidden = false;
}
input.addEventListener('input', showSites);
