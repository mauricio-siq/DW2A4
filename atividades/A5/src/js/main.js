const Masks = {
  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
}

document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js;
  $input.addEventListener(
    'input',
    (e) => {
      e.target.value = Masks[field](e.target.value);
    },
    false
  );
});

const cepSearch = async() => {
  const cep = document.getElementById('cep').value;
  url = `https://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json();
  const uf = endereco.uf
  return covidStats(uf);
}

document.getElementById('button')
        .addEventListener('click', cepSearch)

async function covidStats(uf) {
  url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`
  const dadosUf = await fetch(url);
  const stats = await dadosUf.json();
      return dataTable(
        stats.uf,
        stats.state,
        stats.cases,
        stats.deaths,
        stats.suspects
      );
}

function dataTable(uf, state, cases, deaths, suspects) {
  container = document.querySelector('#data-table tbody')
  const tr = document.createElement('tr')
  tr.innerHTML = insertData(uf, state, cases, deaths, suspects)
  container.appendChild(tr)

  function insertData(unf, estado, casos, obitos, suspeitos) {
    const html = `
      <td>${uf}</td>
      <td>${state}</td>
      <td>${cases}</td>
      <td>${deaths}</td>
      <td>${suspects}</td>
      `;
    return html;
  }
}
