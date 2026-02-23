
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const req = new XMLHttpRequest();
req.open('GET', url);
req.send();
req.addEventListener('load', function() {
	if (this.status >= 200 && this.status < 300) {
		const { abilities } = JSON.parse(this.responseText);		
		const req2 = new XMLHttpRequest();
		req2.open('GET', abilities[0].ability.url);
		req2.send();
		req2.addEventListener('load', function() {
			if (this.status >= 200 && this.status < 300) {
				const result = JSON.parse(this.responseText);
				result.effect_entries.forEach((el) => { if(el.language.name == 'en') {console.log(el.effect);} });
			}
			else {
				console.log('Request failed with status ' + this.status);		
			}
		});
	}
	else {
		console.log('Request failed with status ' + this.status);		
	}
});
