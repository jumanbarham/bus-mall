'use strict';

let products = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg',
  'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg',
  'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

const resultButton = document.getElementById( 'resultButton' );
const imageSection = document.getElementById( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const middleImage = document.getElementById( 'middleImage' );
const rightImage = document.getElementById( 'rightImage' );

Product.allProducts = [];

let leftIndex;
let middleIndex;
let rightIndex;
let validClicks = 25;
let clicksCounter = 0;
//Product constructor
function Product( name ) {
  this.name = name;
  this.img = `./img/${name}`;
  this.shown = 0;
  this.clicks = 0;
  Product.allProducts.push( this );
}
//render funvtion
function render() {
  resultButton.style.display = 'none';

  let leftImageIndex;
  let middleImageIndex;
  let rightImageIndex;

  leftImageIndex = randomNumber( 0, products.length - 1 );
  leftImage.src = Product.allProducts[leftImageIndex].img;
  leftImage.alt = Product.allProducts[leftImageIndex].name;
  leftIndex = leftImageIndex;

  do {
    middleImageIndex = randomNumber( 0, products.length - 1 );
    rightImageIndex = randomNumber( 0, products.length - 1 );
  } while ( ( leftImageIndex === middleImageIndex ) || ( leftImageIndex === rightImageIndex ) || ( middleImageIndex === rightImageIndex ) );

  middleImage.src = Product.allProducts[middleImageIndex].img;
  middleImage.alt = Product.allProducts[leftImageIndex].name;
  rightImage.src = Product.allProducts[rightImageIndex].img;
  rightImage.alt = Product.allProducts[leftImageIndex].name;
  middleIndex = middleImageIndex;
  rightIndex = rightImageIndex;

  Product.allProducts[leftImageIndex].shown++;
  Product.allProducts[middleImageIndex].shown++;
  Product.allProducts[rightImageIndex].shown++;
}
//function to generate random
function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}
// listener for image clicks
imageSection.addEventListener( 'click', handelClick );
function handelClick( event ) {
  if ( clicksCounter < validClicks - 1 ){
    const clickedElement = event.target;
    clicksCounter ++;

    if ( clickedElement.id === 'leftImage' ) {
      Product.allProducts[leftIndex].clicks += 1;
    }
    else if ( clickedElement.id === 'middleImage' ) {
      Product.allProducts[middleIndex].clicks += 1;
    }
    else if ( clickedElement.id === 'rightImage' ) {
      Product.allProducts[rightIndex].clicks += 1;
    }
    render();
  }
  else{
    imageSection.removeEventListener( 'click', handelClick );
    resultButton.style.display = 'block';
  }
}
// listener for button click
resultButton.addEventListener( 'click', handelButtonClick );
function handelButtonClick( ){
  const resultSection = document.getElementById( 'resultSection' );
  const ulElement = document.createElement( 'ul' );
  resultSection.appendChild( ulElement );

  for( let i = 0; i < Product.allProducts.length; i++ ){
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `${Product.allProducts[i].name.slice( 0, -4 )} had ${Product.allProducts[i].clicks} votes, and was seen ${Product.allProducts[i].shown} times.`;
  }

  resultButton.removeEventListener( 'click', handelButtonClick );
}


for ( let i = 0; i < products.length; i++ ) {
  new Product( products[i] );
}
render();