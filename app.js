
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage + response.status);
    }
    return response.json();
  });
}

getData(url, 'Ошибка получения url')
.then(data => {
		const { abilities } = data;
		return getData(abilities[0].ability.url, 'Ошибка получения дочернего url');
	}
)
.then(data => { 
		data.effect_entries.forEach((el) => { if(el.language.name == 'en') {console.log(el.effect);} });
	}
)
.catch(error => console.error(error))
