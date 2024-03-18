/*
Utilizzando i dati forniti i tabella,
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM semplicemente come stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
DATI:
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
*/

const team = [];
const containerElement = document.querySelector(".row");
console.dir(containerElement);

function generateMember(memberName, memberRole, memberPicture){
  const member = {
    name: memberName,
    role: memberRole,
    picture: memberPicture,
  }

  return member;
}

const wayne = generateMember("Wayne Barnett","Founder & CEO","wayne-barnett-founder-ceo.jpg");
const angelaC = generateMember("Angela Caroll","Chief Editor","angela-caroll-chief-editor.jpg");
const walter = generateMember("Walter Gordon","Office Manager", "walter-gordon-office-manager.jpg");
const angelaL = generateMember("Angela Lopez","Social Media Manager","angela-lopez-social-media-manager.jpg");
const scott = generateMember("Scott Estrada","Developer","scott-estrada-developer.jpg");
const barbara = generateMember("Barbara Ramos","Graphic Designer","barbara-ramos-graphic-designer.jpg");

team.push(wayne,angelaC,walter,angelaL,scott,barbara);

console.log(team);

for(let i=0;i<team.length;i++){
  // console.log(team[i]);
  // const photoElement = document.createElement("img");
  // photoElement.classList.add("picture");
  // photoElement.src = "./img/" + team[i]["picture"];
  // containerElement.appendChild(photoElement);

  // const nameElement = document.createElement("p");
  // const nameText = document.createTextNode(team[i].name);
  // nameElement.appendChild(nameText);
  // containerElement.appendChild(nameElement);

  // const roleElement = document.createElement("p");
  // const roleText = document.createTextNode(team[i].role);
  // roleElement.appendChild(roleText);
  // containerElement.appendChild(roleElement);

  const photoLink = "./img/"
  containerElement.innerHTML += `
  <div class="col-4">
          <div class="card rounded-0 border-0">
            <img src=${photoLink + team[i]["picture"]} class="card-img-top rounded-0" alt="angela caroll">
            <div class="card-body text-center">
              <h5 class="card-title name_title">${team[i]["name"]}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary role_title">${team[i]["role"]}</h6>
              <!--<p class="card-text member_description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
            </div>
          </div>
        </div>
  `


  for(let key in team[i]){
    console.log(team[i][key]);
  }
}
