const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=12"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2021"
    }
];


const containerHTML = document.getElementById("container")
const likedPost = []

posts.forEach(post => {

    //generazione del post
    const postElementHTML = document.createElement("div");
    postElementHTML.classList.add("post");

    //SECTION HEADER 

    //generazione header-div
    const postHeaderHTML = document.createElement("div");
    postHeaderHTML.classList.add("post__header");

    //generazione meta del post
    const postMetaHTML = document.createElement("div");
    postMetaHTML.classList.add("post-meta");

    //generazione meta icon
    const postMetaIconHTML = document.createElement("div");
    postMetaIconHTML.classList.add("post-meta__icon");

    //generazione profile pic
    const profilePicHTML = document.createElement("img");
    profilePicHTML.classList.add("profile-pic");
    profilePicHTML.src = post.author.image;
    profilePicHTML.alt = post.author.name;

    //TODO mettere in formato mm-gg-aaaa
    //generazione meta data
    const postMetaDataHTML = document.createElement("div");
    postMetaDataHTML.classList.add("post-meta__data");

    //generazione meta author
    const postMetaAuthorHTML = document.createElement("div");
    postMetaAuthorHTML.classList.add("post-meta__author");
    postMetaAuthorHTML.textContent = post.author.name;

    //generazione meta time
    const postMetaTimeHTML = document.createElement("div");
    postMetaTimeHTML.classList.add("post-meta__time");
    postMetaTimeHTML.textContent = post.created;
    
    //appendo la struttura dell'header generata
    postMetaIconHTML.appendChild(profilePicHTML);
    postMetaDataHTML.appendChild(postMetaAuthorHTML);
    postMetaDataHTML.appendChild(postMetaTimeHTML);
    postMetaHTML.appendChild(postMetaIconHTML);
    postMetaHTML.appendChild(postMetaDataHTML);
    postHeaderHTML.appendChild(postMetaHTML);

    //ANCHOR appendo la struttura dell'header generata al post
    postElementHTML.appendChild(postHeaderHTML);

    //SECTION TEXT 
    //generazione sezioni di testo
    const postTextHTML = document.createElement("div");
    postTextHTML.classList.add("post__text");
    postTextHTML.textContent = post.content

    //ANCHOR appendo il testo nel post
    postElementHTML.appendChild(postTextHTML)

    //SECTION IMG 
    //generazione contenitore img
    const postImageDivHTML = document.createElement("div");
    postImageDivHTML.classList.add("post__image")

    //generazione e recupero dati img
    const postImageHTML = document.createElement("img");
    postImageHTML.src = post.media;

    //appendo l'immagine nel div
    postImageDivHTML.appendChild(postImageHTML)

    //ANCHOR appendo l'immagine nel post
    postElementHTML.appendChild(postImageDivHTML);

    //SECTION FOOTER 
    //generazione contenitore footer
    const postFooterHTML = document.createElement("div");
    postFooterHTML.classList.add("post__footer")

    //generazione likes div
    const likeHTML = document.createElement("div");
    likeHTML.classList.add("likes")

    //generazione likes btn
    const likeButtonHTML  = document.createElement("a");
    likeButtonHTML.classList.add("like-button", "js-like-button")

    //generazione likes icon
    const likeIconHTML = document.createElement("i");
    likeIconHTML.classList.add("like-button__icon", "fas", "fa-thumbs-up")

    //generazione like button label
    const likeBtnLabelHTML = document.createElement("span");
    likeBtnLabelHTML.classList.add("like-button__label")
    likeBtnLabelHTML.textContent = " Mi Piace";

    //generazione like counter container
    const likeCounterDivHTML = document.createElement("div");
    likeCounterDivHTML.classList.add("likes__counter")

    //generazione like counter
    const likeCounterHTML = document.createElement("b");
    likeCounterHTML.classList.add("js-likes-counter")
    likeCounterHTML.id = `like-counter-${post.id}`
    likeCounterHTML.textContent = post.likes;

    //appendo tutto il like btn
    likeButtonHTML.appendChild(likeIconHTML);
    likeButtonHTML.appendChild(likeBtnLabelHTML);
    likeHTML.appendChild(likeButtonHTML);

    //appendo il counter dei like
    likeCounterDivHTML.textContent = 'Piace a ';
    likeCounterDivHTML.appendChild(likeCounterHTML);
    likeCounterDivHTML.textContent += ' persone';
    likeHTML.appendChild(likeCounterDivHTML);

    //SECTION Eventi dinamici counter dei like
    // Genera un ID univoco per il contatore dei like
    const uniqueLikeCounterID = `like-counter-${post.id}`;

    // Cambia l'ID del contatore dei like
    likeCounterHTML.id = uniqueLikeCounterID;

    likeButtonHTML.addEventListener("click", function() {

        // c'è già "mi piace"?
        const isLiked = likedPost.includes(post.id);
    
        if (!isLiked) {
            // Aggiungi il post ai likedPosts
            likedPost.push(post.id);

            // Aggiorna l'aspetto del pulsante e il contatore dei like
            likeButtonHTML.classList.add("like-button--liked");
            likeCounterHTML.textContent = post.likes + 1;
            likeCounterDivHTML.textContent = 'Piace a ';
            likeCounterDivHTML.appendChild(likeCounterHTML);
            likeCounterDivHTML.textContent += ' persone';
            likeHTML.appendChild(likeCounterDivHTML);

        } else if(isLiked){

            // Rimuovi il post dai likedPosts
            const index = likedPost.indexOf(post.id);
            likedPost.splice(index, 1);

            // Ripristina l'aspetto del pulsante e il contatore dei like
            likeButtonHTML.classList.remove("like-button--liked");
            likeCounterHTML.textContent = post.likes;
            likeCounterDivHTML.textContent = 'Piace a ';
            likeCounterDivHTML.appendChild(likeCounterHTML);
            likeCounterDivHTML.textContent += ' persone';
            likeHTML.appendChild(likeCounterDivHTML);
        }
        console.log(likedPost)
    })

    //ANCHOR appendo il footer nel post
    postFooterHTML.appendChild(likeHTML)
    postElementHTML.appendChild(postFooterHTML);

    //ANCHOR Appendo il post completo (in teoria) al container principale
    containerHTML.appendChild(postElementHTML);

    
});



/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS:
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/