// Menu
let menu = document.querySelector(".menu");
let menuBackground = document.querySelector(".menu-background");
// Navigation
let navigationLinks = document.querySelector(".links");
let body = document.querySelector("body");
// img Product
let imgProduct = document.querySelector(".product");
let productBox = document.querySelector(".product-box");
let imgProductPopupViwe = document.querySelector(".productpopup-viwe");
let productsPopupViwe = document.querySelector(".popup-viwe");
let thumbnailDiv =document.querySelector(".thumbnailpopup-viwe");
let thumbnailDivsPopupViwe = document.querySelectorAll(
  ".thumbnailpopup-viwe > div"
);
let thumbnail1img = document.querySelector(
  ".thumbnailpopup-viwe .thumbnail1 img"
);
let thumbnail1 = document.querySelector(".thumbnailpopup-viwe .thumbnail1");
let thumbnail2img = document.querySelector(
  ".thumbnailpopup-viwe .thumbnail2 img"
);
let thumbnail2 = document.querySelector(".thumbnailpopup-viwe .thumbnail2");
let thumbnail3img = document.querySelector(
  ".thumbnailpopup-viwe .thumbnail3 img"
);
let thumbnail3 = document.querySelector(".thumbnailpopup-viwe .thumbnail3");
let thumbnail4img = document.querySelector(
  ".thumbnailpopup-viwe .thumbnail4 img"
);
let thumbnail4 = document.querySelector(".thumbnailpopup-viwe .thumbnail4");
let thumbnailPopupViwe = document.querySelector(".thumbnailpopup-viwe");
let closeIconX = document.querySelector(".close");
let previousNext = document.querySelector(".popup-viwe .previous-next");
let thumbnailDivs = document.querySelectorAll(".main-one > div");
let thumbnailDivsGlobal = document.querySelectorAll(".thumbnail > div");
let popupViweThumbnailDivs = document.querySelectorAll(
  ".popup-viwe .thumbnail > div"
);
let minaThumbnailDivsImage = document.querySelectorAll(
  ".main-one  > div > img"
);
let deleteIcon = document.querySelector(".popoup-delete");
let deleteIconImg = document.querySelector(".popoup-delete img");
let itemsBox = document.querySelector(".popoup-box");
let itemsBoxparagraph = document.querySelector(".popoup-box p");
let shoppingIcon = document.querySelector(".icon");
let shoppingIconImg = document.querySelector(".icon img");
let popoupItems = document.querySelector(".popoup-items");
let popoupCheckout = document.querySelector(".popoup-checkout");
let emptyMessage = document.querySelector(".empty-message");
let popoupItemBox = document.querySelector(".popoup-item-box");
let popoupItemBoxParagraph = document.querySelector(".popoup-item-box p");
let popoupPrice = document.querySelector(".popoup-price");
let popoupFullprice = document.querySelector(".popoup-full-price");
let popoupChosenNumber = document.querySelector(".popoup-chosen-number");
let popoupx = document.querySelector(".popoup-x");
//  Next  And Preevious
let nextArrow = document.querySelector(".next");
let nextPopupArrow = document.querySelector(".popup-viwe .next");
let nextPopupArrowI = document.querySelector(".popup-viwe .next i");
let previousArrow = document.querySelector(".previous");
let previousPopupArrow = document.querySelector(".popup-viwe .previous");
let previousPopupArrowI = document.querySelector(".popup-viwe .previous i");
let productpopupViwe = document.querySelector(".productpopup-viwe");
// Minus And Plus Icons
let iconPlus = document.querySelector(".icon-plus");
let iconMinus = document.querySelector(".icon-minus");
let number = document.querySelector(".number");
// Items Popup
let popoupChosedNumber = document.querySelector(".popoup-chosen-number");
let addTo = document.querySelector(".add-to");
let currentPrice = document.querySelector(".current-price");
let popoupFullPrice = document.querySelector(".popoup-full-price");
let popoupItemsOne = document.querySelector(".popoup-items-one");
let popoupImg = document.querySelector(".popoup-img");
// notifaction
let notifaction = document.querySelector(".notifaction");
let notifactionCounter = document.querySelector(".notifaction-counter");
// count
let count = 0;
// Function To Add Class
function addClass(toListenElement, toAddClassElement, className) {
  toListenElement.addEventListener("click", () => {
    toAddClassElement.classList.toggle(className);
  });
}
// Trigger addClass Function
addClass(shoppingIcon, itemsBox, "show");
addClass(imgProduct, productsPopupViwe, "popup");
addClass(imgProduct, body, "popup");
addClass(imgProduct, previousNext, "show-arrows");
addClass(menu, navigationLinks, "show");
addClass(menu, menu, "show");
addClass(menu, menuBackground, "show");
addClass(menu, body, "popup");
// Function  To Add And Remove Class
function toAddAndRemoveClasss(ToloopElementsContainer, className) {
  ToloopElementsContainer.forEach((elementDiv) => {
    elementDiv.addEventListener("click", (event) => {
      ToloopElementsContainer.forEach((div) => {
        if (div.classList.contains(className)) {
          div.classList.remove(className);
        }
        event.currentTarget.classList.add(className);
      });
    });
  });
}
// Trigger toAddAndRemoveClasss Fucntion
toAddAndRemoveClasss(thumbnailDivs, "active");
toAddAndRemoveClasss(popupViweThumbnailDivs, "active");
toAddAndRemoveClasss(minaThumbnailDivsImage, "active");
// Function Changing Img Src.
//This Function Needed Cuntainer For imgs And Custaom Data-imagesrc Attribute In Html.
// Image Cuntainer structure In Html Div(Cuntainer) > Div > img.
function changeImgeSrcOnClick(imageCunatiner, imageSrcToChage) {
  imageCunatiner.forEach((e) => {
    e.addEventListener("click", (ele) => {
      if (ele.currentTarget.classList.contains("active")) {
        let currentImg = ele.currentTarget.querySelector("img");
        let currentImgSrc = currentImg.dataset.imagesrc;
        imageSrcToChage.setAttribute("src", currentImgSrc);
      }
    });
  });
}
changeImgeSrcOnClick(thumbnailDivs, imgProduct);
changeImgeSrcOnClick(thumbnailDivsGlobal, imgProductPopupViwe);
// Thumbnail Images Src Array
let thumbnailImagesSrc = [
  "imges/image-product-1.jpg",
  "imges/image-product-2.jpg",
  "imges/image-product-3.jpg",
  "imges/image-product-4.jpg",
];
// Ncrease Or Decrease A Number Based On A Given Girection Function
function changeImage(direction, imageToChage) {
  var currentIndex = 0;
  direction.addEventListener("click", (e) => {
    currentIndex += direction ? -1 : 1;
    if (currentIndex < 0) {
      currentIndex = thumbnailImagesSrc.length - 1;
    }
    if (currentIndex > thumbnailImagesSrc.length - 1) {
      currentIndex = 0;
    }
    imageToChage.setAttribute("src", thumbnailImagesSrc[currentIndex]);
  });
}
//Trigger changeImage Function => Next  And Preevious
changeImage(nextArrow, imgProduct);
changeImage(previousArrow, imgProduct);
changeImage(previousPopupArrow, productpopupViwe);
changeImage(nextPopupArrow, productpopupViwe);
// Function To increases Or Decreases
function increasesOrDecreases(element, increasesOrDecreases) {
  element.addEventListener("click", () => {
    if (increasesOrDecreases == "increases") {
      count++;
      number.innerHTML = count;
    } else if (increasesOrDecreases == "Decreases") {
      if (count > 0) {
        count--;
        number.innerHTML = count;
      }
    }
  });
}
// Trigger increasesOrDecreases Function => iconMinus &  iconPlus
increasesOrDecreases(iconMinus, "Decreases");
increasesOrDecreases(iconPlus, "increases");
// Handling Span Text Content
let priceString = currentPrice.textContent.trim();
let priceNumber = parseInt(priceString.substring(1));
// Listen The Carde Button "Add To"
addTo.addEventListener("click", (ele) => {
  let priceNumbercount = priceNumber * count; // == 0 ? priceNumber : priceNumber * count
  // Update The popoupChosedNumber & popoupFullPrice
  if (count !== 0) {
    // Needed Refouce
    popoupChosedNumber.textContent = count == popoupChosedNumber ? 1 : count;
    popoupFullPrice.textContent = `$${
      priceNumber * count == 0 ? 0 : priceNumber * count
    }.00`;

    // Show  popoupCheckout & popoupItemsOne
    popoupCheckout.classList.add("show");
    popoupItemsOne.classList.add("show");
    // Show Or Hide  Empty Message
    if (count < 0) {
      emptyMessage.classList.remove("hide");
    } else {
      emptyMessage.classList.add("hide");
    }
  }
  // Show Or Hide  notifaction-counter
  if (count !== 0) {
    notifactionCounter.textContent = count;
    if (count !== 0) {
      notifaction.classList.add("show");
    } else {
      notifaction.classList.remove("show");
    }
  }
  // Delete Class "hide" And Reshow  popoupItems,  popoupCheckout, emptyMessage
  if (
    count !== 0 &&
    popoupItems.classList.contains("hide") &&
    popoupCheckout.classList.contains("hide")
  ) {
    toggleClass("hide", popoupItems, popoupCheckout);
  }
  // Reset Number and Count
  number.innerHTML = 0;
  count = 0;
});
function toggleClass(className, ...elements) {
  elements.forEach((element) => {
    element.classList.toggle(className);
  });
}
deleteIcon.addEventListener("click", () => {
  toggleClass("hide", popoupItems, popoupCheckout);
  // Show Or Hide  Empty Message
  if (popoupCheckout.classList.contains("hide")) {
    emptyMessage.classList.remove("hide");
  } else {
    emptyMessage.classList.add("hide");
  }
  if (count !== 0) {
    notifaction.classList.add("show");
  } else {
    notifaction.classList.remove("show");
  }
});
// Close Product Popup
closeIconX.addEventListener("click", () => {
  toggleClass("popup", body, productsPopupViwe);
  toggleClass("show-arrows", previousNext);
});

// Close Drop Menu And Popup
// Array Popup Elements To Ignore
let popoupIgnoreList = [
  imgProductPopupViwe,
  imgProduct,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail1img,
  thumbnail2img,
  thumbnail3img,
  thumbnail4img,
  previousNext,
  nextPopupArrow,
  previousPopupArrow,
  nextPopupArrowI,
  previousPopupArrowI,
  thumbnailDiv,
];
// Array Drop Menu Elements To Ignore
let dropMenuIgnoreList = [
  shoppingIcon,
  itemsBox,
  shoppingIconImg,
  itemsBoxparagraph,
  popoupItemsOne,
  emptyMessage,
  popoupCheckout,
  popoupImg,
  popoupItemBoxParagraph,
  popoupPrice,
  popoupFullprice,
  popoupx,
  popoupChosenNumber,
  deleteIcon,
  deleteIconImg,
  popoupItemBox,
];
// Function To Remove Class If The Curent Target Not Equl The Array And The ELement Not Contains Class Name
function hideElementOnClick(Array, element,className) {
  document.addEventListener("click", (e) => {
    if (!Array.includes(e.target)) {
      if(element.classList.contains(className)){
        element.classList.remove(className);
      }
    }
  });
}
// Trigger hideElementOnClick 
hideElementOnClick(popoupIgnoreList,productsPopupViwe,"popup");
hideElementOnClick(popoupIgnoreList,body,"popup");
hideElementOnClick(popoupIgnoreList,previousNext,"show-arrows");
hideElementOnClick(dropMenuIgnoreList,itemsBox,"show");