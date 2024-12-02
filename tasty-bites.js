const images = ["img/flyer1.jpg", "img/flyer2.jpg", "img/flyer3.jpg"];
let currentIndex = 0;

const forward = () => {
  const img = document.getElementById("img");
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}

const backward = () => {
  const img = document.getElementById("img");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  img.src = images[currentIndex];
}

// search button 
const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByClassName("p");
  
  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByClassName("p")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML
      
      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      }
      else {
        product[i].style.display = "none";
      }
    }
  }
}


//buy button 
const buy = text => {
  const firstText = document.getElementById("first-buy-button");
  const secondText = document.getElementById("second-buy-button");
  const thirdText = document.getElementById("third-buy-button");
  const forthText = document.getElementById("forth-buy-button");
  const fifthText = document.getElementById("fifth-buy-button");
  const sixthText = document.getElementById("sixth-buy-button");
  const seventhText = document.getElementById("seventh-buy-button");
  const eighthText = document.getElementById("eighth-buy-button");
  
  if (text === "first") {
    firstText.innerHTML= "added to cart";
  }
  else if (text === "second") {
    secondText.innerHTML= "added to cart";
  }
  else if (text === "third") {
    thirdText.innerHTML= "added to cart";
  }
  else if (text === "forth") {
    forthText.innerHTML= "added to cart";
  }
  else if (text === "fifth") {
    fifthText.innerHTML= "added to cart";
  }
  else if (text === "sixth") {
    sixthText.innerHTML= "added to cart";
  }
  else if (text === "seventh") {
    seventhText.innerHTML= "added to cart";
  }
  else if (text === "eighth") {
    eighthText.innerHTML= "added to cart";
  }
}

//cancel button 
const cancel = text => {
  const firstText = document.getElementById("first-buy-button");
  const secondText = document.getElementById("second-buy-button");
  const thirdText = document.getElementById("third-buy-button");
  const forthText = document.getElementById("forth-buy-button");
  const fifthText = document.getElementById("fifth-buy-button");
  const sixthText = document.getElementById("sixth-buy-button");
  const seventhText = document.getElementById("seventh-buy-button");
  const eighthText = document.getElementById("eighth-buy-button");
  
  if (text === "first") {
    firstText.innerHTML= "";
  }
  else if (text === "second") {
    secondText.innerHTML= "";
  }
  else if (text === "third") {
    thirdText.innerHTML= "";
  }
  else if (text === "forth") {
    forthText.innerHTML= "";
  }
  else if (text === "fifth") {
    fifthText.innerHTML= "";
  }
  else if (text === "sixth") {
    sixthText.innerHTML= "";
  }
  else if (text === "seventh") {
    seventhText.innerHTML= "";
  }
  else if (text === "eighth") {
    eighthText.innerHTML= "";
  }
}
