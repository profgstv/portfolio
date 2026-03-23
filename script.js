/*
    Script para criação dinâmica dos cards de projetos, modais de detalhes, badges de tecnologias e badges de comunidades.
    Autor: Gustavo Dal Farra Miguel Jorge
    Atualização: 2026-03-23
    Criação: 2025-10-09
*/
//Próximos Passos: Criar uma lógica de filtros por tecnologias.
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  const s = text.replace(/^\uFEFF/, '');

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '"') {
      if (inQuotes && s[i + 1] === '"') { field += '"'; i++; }
      else { inQuotes = !inQuotes; }
    } else if (c === ',' && !inQuotes) {
      row.push(field); field = '';
    } else if ((c === '\n' || c === '\r') && !inQuotes) {
      if (c === '\r' && s[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(col => col !== '' && col !== undefined)) rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }

  if (rows.length === 0) return { headers: [], rows: [] };
  const headers = rows[0].map(h => h.trim());
  const dataRows = rows.slice(1);
  return { headers, rows: dataRows };
}

function csvRowsToObjects(headers, rows) {
  return rows.map(r => {
    const obj = {};
    headers.forEach((h, idx) => { obj[h] = (r[idx] ?? '').toString().trim(); });
    return obj;
  });
}

function objectsToProjectsList(objs) {
  const cols = [
    "projectName","src","alt","modalID","basicDescription",
    "description0","description1","description2",
    "link0","linkName0","link1","linkName1","link2","linkName2","link3","linkName3","link4","linkName4", "techs"
  ];

  const projectsList = {};
  cols.forEach(c => { projectsList[c] = []; });

  objs.forEach(o => {
    cols.forEach(c => { projectsList[c].push(o[c] ?? ""); });
  });

  return projectsList;
}

async function loadProjectsListFromCSV(path = './src/projects_list.csv') {
  const resp = await fetch(path);
  if (!resp.ok) throw new Error(`Falha ao carregar ${path}: ${resp.status} ${resp.statusText}`);
  const text = await resp.text();

  const { headers, rows } = parseCSV(text);
  const objs = csvRowsToObjects(headers, rows)
    .filter(p => (p.projectName || '').trim().length > 0);

  return objectsToProjectsList(objs);
}

(async function initFromCSV() {
  try {
    const projectsList = await loadProjectsListFromCSV('./src/projects_list.csv');

    const techsList = ["Linux","Javascript","Python","Construct 3","Godot","HTML","CSS","Scratch","Micro:bit","MakeCode","Tinkercad"/*,"Arduino","C++"*/];
    const communitiesList = {
      "GitHub": "https://github.com/profgstv",
      "P5.js": "https://editor.p5js.org/gustavodal/sketches",
      "Scratch": "https://scratch.mit.edu/users/profgstv/",
      "Tinkercad": "https://www.tinkercad.com/users/fCvRHkvJnfc",
      "Itch.io": "https://profgstv.itch.io/"
    };
    const jobsList = {
      "Fábrica de Cultura SBC (atual)": "https://fabricadecultura.org.br/",
      "CIEBP (2024-2025)": "https://centrodeinovacao.educacao.sp.gov.br/",
      "SEDUC/SP (2019-2025)": "https://www.educacao.sp.gov.br/"
    };

    const randomizedProjects = arrayRandomizer(projectsList.projectName);
    const randomizedJobs = arrayRandomizer(Object.keys(jobsList));
    const randomizedTechs = arrayRandomizer(techsList);
    const randomizedCommunities = arrayRandomizer(Object.keys(communitiesList));

    const parentElement = document.body;
    const referenceElement = document.getElementById("reference");

    // === Funções ===
    function createCard(a) {
      let i = projectsList.projectName.indexOf(randomizedProjects[a]);
      let cards = document.getElementById("projectsCards");
      let cardDiv0 = document.createElement("div");
      let cardDiv1 = document.createElement("div");
      let cardDiv2 = document.createElement("div");
      let cardImg = document.createElement("img");
      let cardName = document.createElement("h5");
      let cardDescription = document.createElement("p");
      let cardButton = document.createElement("button");
      cards.appendChild(cardDiv0);
      cardDiv0.setAttribute("class", "col-md-4");
      cardDiv0.appendChild(cardDiv1);
      cardDiv1.setAttribute("class", "card");
      cardDiv1.setAttribute("style", "width: 18rem;");
      cardDiv1.appendChild(cardImg);
      cardDiv1.appendChild(cardDiv2);
      cardImg.setAttribute("src", projectsList.src[i]);
      cardImg.setAttribute("class", "card-img-top");
      cardImg.setAttribute("alt", projectsList.alt[i]);
      cardImg.setAttribute("data-bs-toggle", "modal");
      cardImg.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);
      cardDiv2.setAttribute("class", "card-body");
      cardDiv2.appendChild(cardName);
      cardDiv2.appendChild(cardDescription);
      cardDiv2.appendChild(cardButton);
      cardName.setAttribute("class", "card-title local-wine");
      cardName.innerHTML = projectsList.projectName[i];
      cardDescription.setAttribute("class", "card-text local-wine");
      cardDescription.innerHTML = projectsList.basicDescription[i];
      cardButton.setAttribute("type", "button");
      cardButton.setAttribute("class", "btn-link");
      cardButton.setAttribute("data-bs-toggle", "modal");
      cardButton.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);
      cardButton.innerHTML = "Detalhes";
    }

    function createModal(a) {
      let i = projectsList.projectName.indexOf(randomizedProjects[a]);
      let modalDiv0 = document.createElement("div");
      let modalDiv1 = document.createElement("div");
      let modalDiv2 = document.createElement("div");
      let modalDiv3 = document.createElement("div");
      let modalDiv4 = document.createElement("div");
      let modalDiv5 = document.createElement("div");
      let modalName = document.createElement("h5");
      let modalCloseButton = document.createElement("button");
      let modalDescription0 = document.createElement("p");
      let modalDescription1 = document.createElement("p");
      let modalDescription2 = document.createElement("p");
      let modalImg = document.createElement("img");
      let modalLink0 = document.createElement("a");
      let modalLink1 = document.createElement("a");
      let modalLink2 = document.createElement("a");
      let modalLink3 = document.createElement("a");
      let modalLink4 = document.createElement("a");
      parentElement.insertBefore(modalDiv0, referenceElement);
      modalDiv0.setAttribute("class", "modal");
      modalDiv0.setAttribute("id", projectsList.modalID[i]);
      modalDiv0.setAttribute("tabindex", "-1");
      modalDiv0.appendChild(modalDiv1);
      modalDiv1.setAttribute("class", "modal-dialog");
      modalDiv1.appendChild(modalDiv2);
      modalDiv2.setAttribute("class", "modal-content");
      modalDiv2.appendChild(modalDiv3);
      modalDiv3.setAttribute("class", "modal-header");
      modalDiv3.appendChild(modalName);
      modalDiv3.appendChild(modalCloseButton);
      modalName.setAttribute("class", "modal-title");
      modalName.innerHTML = projectsList.projectName[i];
      modalCloseButton.setAttribute("type", "button");
      modalCloseButton.setAttribute("class", "btn-close");
      modalCloseButton.setAttribute("data-bs-dismiss", "modal");
      modalCloseButton.setAttribute("aria-label", "Close");
      modalDiv2.appendChild(modalDiv4);
      modalDiv4.setAttribute("class", "modal-body");
      modalDiv4.appendChild(modalDescription0);
      modalDescription0.innerHTML = projectsList.description0[i];
      if (projectsList.description1[i] !== " ") {
        modalDiv4.appendChild(modalDescription1);
        modalDescription1.innerHTML = projectsList.description1[i];
      }
      if (projectsList.description2[i] !== " ") {
        modalDiv4.appendChild(modalDescription2);
        modalDescription2.innerHTML = projectsList.description2[i];
      }
      modalDiv4.appendChild(modalImg);
      modalImg.setAttribute("src", projectsList.src[i]);
      modalImg.setAttribute("class", "img-fluid w-100");
      modalImg.setAttribute("alt", projectsList.alt[i]);
      modalDiv2.appendChild(modalDiv5);
      modalDiv5.setAttribute("class", "modal-footer");
      modalDiv5.appendChild(modalLink0);
      modalLink0.setAttribute("href", projectsList.link0[i]);
      modalLink0.innerHTML = projectsList.linkName0[i];
      if (projectsList.linkName1[i] !== " ") {
        modalDiv5.appendChild(modalLink1);
        modalLink1.setAttribute("href", projectsList.link1[i]);
        modalLink1.setAttribute("class", "left-link");
        modalLink1.innerHTML = projectsList.linkName1[i];
      }
      if (projectsList.linkName2[i] !== " ") {
        modalDiv5.appendChild(modalLink2);
        modalLink2.setAttribute("href", projectsList.link2[i]);
        modalLink2.setAttribute("class", "left-link");
        modalLink2.innerHTML = projectsList.linkName2[i];
      }
      if (projectsList.linkName3[i] !== " ") {
        modalDiv5.appendChild(modalLink3);
        modalLink3.setAttribute("href", projectsList.link3[i]);
        modalLink3.setAttribute("class", "left-link");
        modalLink3.innerHTML = projectsList.linkName3[i];
      }
      if (projectsList.linkName4[i] !== " ") {
        modalDiv5.appendChild(modalLink4);
        modalLink4.setAttribute("href", projectsList.link4[i]);
        modalLink4.setAttribute("class", "left-link");
        modalLink4.innerHTML = projectsList.linkName4[i];
      }
    }

    function arrayRandomizer(arrayToRandomize) {
      const source = [...arrayToRandomize];
      const rand = [];
      while (source.length > 0) {
        const i = Math.floor(Math.random() * source.length);
        rand.push(source.splice(i, 1)[0]);
      }
      return rand;
    }

    // === Cards & Modais ===
    for (let i in projectsList.projectName) {
      createCard(i);
      createModal(i);
    }

    // === Vínculos ===
    for (let i in randomizedJobs) {
      let jobURL = jobsList[randomizedJobs[i]];
      let jobs = document.getElementById("jobs");
      let jobLink = document.createElement("a");
      let jobButton = document.createElement("button");
      jobs.appendChild(jobLink);
      jobLink.setAttribute("href", jobURL);
      jobLink.appendChild(jobButton);
      jobButton.setAttribute("class", "badge local-link");
      jobButton.innerHTML = randomizedJobs[i];
    }

    // === Tecnologias ===
    for (let i in randomizedTechs) {
      let techs = document.getElementById("techBadges");
      let techButton = document.createElement("button");
      techs.appendChild(techButton);
      techButton.setAttribute("class", "badge local-link");
      techButton.innerHTML = randomizedTechs[i];
    }

    // === Comunidades ===
    for (let i in randomizedCommunities) {
      let communityURL = communitiesList[randomizedCommunities[i]];
      let communities = document.getElementById("communitiesBadges");
      let communityLink = document.createElement("a");
      let communityButton = document.createElement("button");
      communities.appendChild(communityLink);
      communityLink.setAttribute("href", communityURL);
      communityLink.appendChild(communityButton);
      communityButton.setAttribute("class", "badge local-link");
      communityButton.innerHTML = randomizedCommunities[i];
    }

  } catch (err) {
    console.error('[ERRO] Falha ao inicializar a partir do CSV:', err);
    const cards = document.getElementById('projectsCards');
    if (cards) {
      const div = document.createElement('div');
      div.setAttribute('class', 'alert alert-danger');
      div.textContent = 'Não foi possível carregar a lista de projetos.';
      cards.appendChild(div);
    }
  }
})();