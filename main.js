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
    contenitore.innerHTML += 
    `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src = "${mypost.author.image}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author"> ${mypost.author.name} </div>
                <div class="post-meta__time">  ${mypost.created} </div>
            </div>                    
        </div>
    </div>
    <div class="post__text"> ${mypost.content}</div>
    <div class="post__image">
        <img src= ${mypost.media} > </img>
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid= "${mypost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${mypost.id}" class="js-likes-counter">${mypost.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
}
    
    
);

const likeButton = document.querySelectorAll (".js-like-button")
likeButton.forEach((button, index)=>
button.addEventListener("click",
function(element){
    element.preventDefault();
    button.classList.toggle ("like-button--liked");
        if(button.classList.contains ("like-button--liked")){
            posts[index].likes++; 
        }
        else{
            posts[index].likes--; 
        }
        let likeContatore = document.getElementById("like-counter-" + posts[index].id) ;
        likeContatore.innerText = posts[index].likes;
}) 
);

//     const basePost = document.createElement ("div");
//     basePost.classList.add ("post");
//     contenitore.append (basePost);

//     //  intestazione post
//     const headerPost = document.createElement ("div");
//     headerPost.classList.add ("post__header");

//     basePost.append(headerPost);
//     const metaPost = document.createElement ("div");
//     metaPost.classList.add ("post-meta")
//     headerPost.append(metaPost);

//     const iconaPost = document.createElement ("div");
//     iconaPost.classList.add ("post-meta__icon");
//     metaPost.append(iconaPost);

//     // fotoprofilo
//     const fotoProfiloPost = document.createElement ("img");
//     fotoProfiloPost.src = mypost.author.image;
//     fotoProfiloPost.classList.add ("profile-pic");
//     iconaPost.append (fotoProfiloPost);

//         // autore e data
//     const giornoPost = document.createElement ("div");
//    giornoPost.classList.add ("post-meta__data");
    
//     metaPost.append(giornoPost);

//     let autorePost = document.createElement ("div");
//     autorePost.classList.add(".post-meta__author");
//     autorePost = mypost.author.name;
//     giornoPost.append(autorePost);

//     let tempoPost = document.createElement ("div");
//     tempoPost.classList.add(".post-meta__time");
//     tempoPost = mypost.created;
//     giornoPost.append(tempoPost);

//     // parte centrale del post
//     let textPost = document.createElement ("div");
//     textPost.classList.add ("post__text");
//      textPost = mypost.content;
//     basePost.append(textPost);
    
//     let contenutoPost = document.createElement ("div");
//     contenutoPost.classList.add ("post__image");
//     basePost.append(contenutoPost);

//     let fotoPost = document.createElement ("img");
//     fotoPost.src = mypost.media;
//     contenutoPost.append(fotoPost);

//     // footer post
//     let footerPost = document.createElement ("div");
//     footerPost.classList.add ("post__footer");
//     basePost.append(footerPost);

//     let likePost = document.createElement("div");
//     likePost.classList.add ("likes" );
//     likePost.classList.add ("js-likes" );
//     footerPost.append(likePost);
    
//     let likeCtaPost = document.createElement("div");
//     likeCtaPost.classList.add ("likes__cta");
//     likePost.append(likeCtaPost);

//     let likeButton  = document.createElement("a");
//     likeButton.classList.add ("like-button");
//     likeButton.classList.add ("js-like-button");
//     likeCtaPost.append (likeButton);

//     let likeIcona  = document.createElement("i");
//     likeIcona.classList.add ("like-button__icon");
//     likeIcona.classList.add ("fas");
//     likeIcona.classList.add ("fa-thumbs-up");
//     likeButton.append (likeIcona);

//     let likeIconaText = document.createElement("span");
//     likeIconaText.classList.add ("like-button__label");
//     likeButton.append (likeIconaText, ` Mi piace`);

//     let counter =  document.createElement("div");
//     counter.classList.add ("likes__counter");
//     footerPost.append (counter);

//     let counterLike = document.createElement("b");
//     counterLike = mypost.likes
//     // counterLike.classList.add ("js-likes-counter");
//     // counterLike.getElementsByTagName(like-counter-1);
//     counter.append (` Piace a `,counterLike, ` persone`);



