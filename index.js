"use strict";

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

function createCards(posts) {
  return posts.map(post => createPostCard(post));
}

const body = document.body;
const catalog = createCards(posts);
body.append(...catalog);

function createPostCard({ img = "", title = "", text = "", link = "" }) {
  const post = document.createElement("div");
  post.classList.add("post");

  const postImg = document.createElement("img");
  postImg.classList.add("post__image");
  postImg.setAttribute("src", img);
  postImg.setAttribute("alt", "post image");

  const postBody = document.createElement("div");
  postBody.classList.add("post__body");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-Title");
  postTitle.textContent = title;

  const postDescription = document.createElement("p");
  postDescription.classList.add("post__description");
  postDescription.textContent = text;

  const postLink = document.createElement("a");
  postLink.classList.add("post__link");
  postLink.textContent = link;
  postLink.setAttribute("href", img);

  post.append(postImg, postBody);
  postBody.append(postTitle, postDescription, postLink);

  return post;
}
