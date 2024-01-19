const dati = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Carrol',
        ruolo : 'Chief Editor',
        foto : './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : './assets/img/scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : './assets/img/barbara-ramos-graphic-designer.jpg',
    }
]

for ( let i = 0; i < dati.length; i++){
    let info = dati[i]

    document.body.innerHTML += `
        <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src='${info.foto}'  alt="">
                    <div class="card-body">
                    <h5 class="card-title">
                        ${info.nome}
                    </h5>
                    <p class="card-text">
                        ${info.ruolo}
                    </p>
                    </div>
                </div>
    `
}

