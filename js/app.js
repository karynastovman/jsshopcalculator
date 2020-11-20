const addButton = document.getElementById('add');
const iitemZona = document.querySelector("#item-name");
const itemPriceZona = document.querySelector("#item-price");
const totalSpan = document.querySelector(".total-price");
const list = document.querySelector("#item-list");
let total = 0;


addButton.addEventListener('click', (event)=> {
  let itemZona = iitemZona.value; //get the food name from the input field
  let itemPrice = parseInt(itemPriceZona.value);//get the calories from t..
  total = total + itemPrice;//calculates the tottal calorie intake
  totalSpan.innerHTML = total;


let listItem = document.createElement("li");
listItem.classList.add("collection-item");
let text = `item: ${itemZona}.Price: ${itemPrice}`;
listItem.appendChild(document.createTextNode(text));
console.log(listItem);
list.appendChild(listItem);


  //clear the input fields
  iitemZona.value = "";
  itemPriceZona.value ="";


  console.log("item:", typeof(itemZona));
  console.log("price:", typeof(itemPrice));
  console.log("Total:", total);

    event.preventDefault();
});
