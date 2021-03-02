'use strict';

class User{
  constructor(){
    this.Results = false;
    this.SessionRounds = 25;
    this.Rounds = 0;
  }

  EditSessionRounds(strRounds){
    this.SessionRounds = parseInt(strRounds);

  }

}

class Product{  
    constructor(name, filePath, description){
    this.Name = name;
    this.FilePath = filePath;
    this.Description = description;
    this.Shown = 0;
    this.Clicked = 0;

  }

}

class AllProducts {
  constructor() {
    this.ReadyToDisplayProducts = [];
    this.Database = [
      {
        productName: 'bag',
        PathFile: 'bag.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'banana',
        PathFile: 'banana.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'bathroom',
        PathFile: 'bathroom.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'boots',
        PathFile: 'boots.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'breakfast',
        PathFile: 'breakfast.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'bubblegum',
        PathFile: 'bubblegum.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'chair',
        PathFile: 'chair.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'cthulhu',
        PathFile: 'cthulhu.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'dog-duck',
        PathFile: 'dog-duck.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'dragon',
        PathFile: 'dragon.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'pen',
        PathFile: 'pen.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'pet-sweep',
        PathFile: 'pet-sweep.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'scissors',
        PathFile: 'scissors.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'shark',
        PathFile: 'shark.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'sweep',
        PathFile: 'sweep.png',
        Des: 'This is product is amazing'
      },
      {
        productName: 'tauntaun',
        PathFile: 'tauntaun.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'unicorn',
        PathFile: 'unicorn.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'usb',
        PathFile: 'usb.gif',
        Des: 'This is product is amazing'
      },
      {
        productName: 'water-can',
        PathFile: 'water-can.jpg',
        Des: 'This is product is amazing'
      },
      {
        productName: 'wine-glass',
        PathFile: 'wine-glass.jpg',
        Des: 'This is product is amazing'
      }];


  }

  ShowRandomProduct(){

  }
}

let session = new User();
let allProducts = new AllProducts();

function getNewRandomNumber( min, max, oldRand = -1, oldRand2 =-1 ) {
  if ((oldRand > 0)&&(oldRand2 > 0)){
    let newRand = -1;
    do{
      newRand = Math.floor( Math.random() * ( max - min + 1 ) ) + min

    } while((newRand === oldRand) || (newRand === oldRand2))

    return newRand;

  }else if (oldRand > 0){
    let newRand = -1;
    do{
      newRand = Math.floor( Math.random() * ( max - min + 1 ) ) + min

    } while(newRand == oldRand)

    return newRand;

  }
  else
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;

}

function clickEvent(event, product){
  product.Clicked++;
  startVotingSystem();
}

function buttonClickEvent(event){
  const resultSection = document.getElementById( 'mainSection' );
  resultSection.innerHTML = "";

  const list = document.createElement( 'ul' );
  resultSection.appendChild( list );

  for( let i = 0; i < allProducts.ReadyToDisplayProducts.length; i++ ){
    const listItem = document.createElement( 'li' );
    list.appendChild( listItem );
    listItem.textContent = `${allProducts.ReadyToDisplayProducts[i].Name} has been shown ${allProducts.ReadyToDisplayProducts[i].Shown} times, and been selected ${allProducts.ReadyToDisplayProducts[i].Clicked} times.`;
  }

  document.getElementById("showResult").removeEventListener( 'click', buttonClickEvent );

}

function startVotingSystem(){
  console.clear();

  if (session.Rounds < session.SessionRounds){
    let rand1 = getNewRandomNumber(0, allProducts.Database.length - 1);
    let rand2 = getNewRandomNumber(0, allProducts.Database.length - 1, rand1);
    let rand3 = getNewRandomNumber(0, allProducts.Database.length - 1, rand1, rand2);

    let product = allProducts.ReadyToDisplayProducts[rand1];
    document.getElementById("firstImage").src = product.FilePath;
    document.getElementById("firstImage-title").innerHTML = product.Name;
    document.getElementById("firstImage-des").innerHTML = product.Description;
    // if(document.getElementById("firstImage").onclick == null)
    //   document.getElementById("firstImage").addEventListener('click', (event) =>{ clickEvent(event, product); });  
    // else
      document.getElementById("firstImage").onclick = (event) =>{ clickEvent(event, product); } 
    product.Shown++;
    console.log("Clicked: " + product.Clicked + ", Shown:"+ product.Shown);
    
    product = allProducts.ReadyToDisplayProducts[rand2];
    document.getElementById("secondImage").src = product.FilePath;
    document.getElementById("secondImage-title").innerHTML = product.Name;
    document.getElementById("secondImage-des").innerHTML = product.Description;
    // if(document.getElementById("secondImage").onclick == null)
    //   document.getElementById("secondImage").addEventListener('click', (event) =>{ clickEvent(event, product); });  
    // else
      document.getElementById("secondImage").onclick = (event) =>{ clickEvent(event, product); }    
    product.Shown++;
    console.log("Clicked: " + product.Clicked + ", Shown:"+ product.Shown);
    
    product = allProducts.ReadyToDisplayProducts[rand3];
    document.getElementById("thirdImage").src = product.FilePath;  
    document.getElementById("thirdImage-title").innerHTML = product.Name;
    document.getElementById("thirdImage-des").innerHTML = product.Description;  
    // if(document.getElementById("thirdImage").onclick == null)
    //   document.getElementById("thirdImage").addEventListener('click', (event) =>{ clickEvent(event, product); });  
    // else
      document.getElementById("thirdImage").onclick = (event) =>{ clickEvent(event, product); }  
    product.Shown++;  
    console.log("Clicked: " + product.Clicked + ", Shown:"+ product.Shown);

    session.Rounds++;
    console.log("Rounds: " + session.Rounds);

  }
  else{
    document.getElementById("showResult").disabled = false;
    document.getElementById("showResult").onclick = (event) =>{ buttonClickEvent(event); }
  }

}


function init(){

  for(let i = 0; i < allProducts.Database.length; i++ ){
    allProducts.ReadyToDisplayProducts.push(
      new Product(
        allProducts.Database[i].productName, 
        "img\\" + allProducts.Database[i].PathFile, 
        allProducts.Database[i].Des
      )
    );
  }

  startVotingSystem();

}

init();