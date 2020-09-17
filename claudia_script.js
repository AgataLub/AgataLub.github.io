//fetching data
 fetch("https://kea-alt-del.dk/t5/api/productlist")
     .then(function (response) {
         console.log(response);
         return response.json();
     })
     .then(function (data) {
         console.log(data);
         dataRecieved(data);
     })

 //loop
 function dataRecieved(products) {
     console.log(products);
     products.forEach(showProduct);
 }

 //function dataRecieved(places){
 //    console.log(places);
 //    places.forEach(showPlace);
 //}
 //
 //function dataRecieved(takeaway){
 //    console.log(takeaway);
 //    takeaway.forEach(showTakeaway);
 //}



//Get the modal
 // var modal = document.getElementById("productModal");
//const modal = document.querySelector("#productModal");

 //Get the button that opens the modal
 // var button = document.getElementById("modalButton");
//const button = document.querySelector("modalButton");

 //Get the <span> element that closes the modal
 // var span = document.getElementsByClassName("close")[0];

 //When the user clicks on the button, open the modal
 // button.onclick = function () {
 //     modal.style.display = "block";
 // }

 //When the user clicks on <span> (x), close the modal
 // span.onclick = function () {
 //     modal.style.display = "none";
 // }

 //When the user clicks anywhere outside of the modal, close it
 // window.onclick = function (event) {
 //     if (event.target == modal) {
 //         modal.style.display = "none";
 //     }
 // }

//modal

//close
const modal = document.querySelector("#productModal");
modal.addEventListener("click", () =>{
    modal.classList.add("hide");
})
//clone
//showProduct
//copy.querySelector("button").addEventListener("click", () => {
//    fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
//      .then(res => res.json())
//      .then(showDetails);
//  });
//}

//show (missing photos/stars add button)
function showModal (data) {
    console.log(data);
  modal.querySelector(".productName").textContent = data.name;
 modal.querySelector(".short_description").textContent = data.shortdescription;
  //...
  modal.classList.remove("hide");
}





 //execute for each
 function showProduct(myProduct) {
     console.log(myProduct);
     //find template
     const template = document.querySelector("#productTemplate").content;
     //clone template
     const clone = template.cloneNode(true);
     //fill template
     ////    const block = clone.querySelector(".block").content;
     ////    clone.querySelector(".featured").content;
     clone.querySelector(".product_name").textContent = myProduct.name;
     ////    clone.querySelector(".productImg").
     ////    clone.querySelector(".shortDescription").textContent = myGrid.shortdescription;
//         img.setAttribute("src", `${myProduct.image}`);
     //more information
     ////    const article = clone.querySelector("article");
     //

     clone.querySelector("#modalButton").addEventListener("click", () => {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${showModal.id}`)
      .then(res => res.json())
        .then(showModal);
  });

     //append
     const parentElem = document.querySelector("section#blocksec");
     parentElem.appendChild(clone);
 }
