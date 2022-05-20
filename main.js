const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
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
        "created": "2021-09-03"
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
        "created": "2021-05-15"
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
        "created": "2021-04-03"
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
        "created": "2021-03-05"
    }
];

const contenitore = document.getElementById("container");
// creo un ciclo per generare i post
posts.forEach ((mypost) => {
    
    const basePost = document.createElement ("div");
    basePost.classList.add ("post");
    contenitore.append (basePost);

    //  intestazione post
    const headerPost = document.createElement ("div");
    headerPost.classList.add ("post__header");

    basePost.append(headerPost);
    const metaPost = document.createElement ("div");
    metaPost.classList.add ("post-meta")
    headerPost.append(metaPost);

    const iconaPost = document.createElement ("div");
    iconaPost.classList.add ("post-meta__icon");
    metaPost.append(iconaPost);

    // fotoprofilo
    const fotoProfiloPost = document.createElement ("img");
    fotoProfiloPost.src = mypost.author.image;
    fotoProfiloPost.classList.add ("profile-pic");
    iconaPost.append (fotoProfiloPost);

        // autore e data
    const giornoPost = document.createElement ("div");
   giornoPost.classList.add ("post-meta__data");
    
    metaPost.append(giornoPost);

    let autorePost = document.createElement ("div");
    autorePost.classList.add("post-meta__author");
    autorePost = mypost.author.name;
    giornoPost.append(autorePost);

    let tempoPost = document.createElement ("div");
    tempoPost.classList.add("post-meta__time");
    tempoPost = mypost.created;
    giornoPost.append(tempoPost);

    // parte centrale del post
    let textPost = document.createElement ("div");
    textPost.classList.add ("post__text");
     textPost = mypost.content;
    basePost.append(textPost);
    
    let contenutoPost = document.createElement ("div");
    contenutoPost.classList.add ("post__image");
    basePost.append(contenutoPost);

    let fotoPost = document.createElement ("img");
    fotoPost.src = mypost.media;
    contenutoPost.append(fotoPost);
    




  













});