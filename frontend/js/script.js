const containerNaver = document.querySelector('#navers');

const showData = (result) => {
  containerNaver.innerHTML = '';
  console.log(result)

  for (const naver of result) {
    containerNaver.innerHTML += `
      <div class="naver">
        <img src="${naver.image_url}" alt="${naver.name}">
        <strong>${naver.name}</strong>
        <p>${naver.job_role}</p>
      </div>`
  }
};

fetch(`https://my-json-server.typicode.com/naveteam/fake-api/navers`)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log("Error: "));