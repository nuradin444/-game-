import React from 'react';
import ReactDOM from 'react-dom';



const app = document.getElementById('app');




ReactDOM.render((
   //div class to hold the contents of the first game for star wars where the description of the games background is included
   //the same same process continues below for each game where a javascript handler is also included to make the "Add to basket" button functional
	<div>
<figure class="shop" id = "cartcontent1">
  <div class="image">
    <img src="game1.jpg" alt="sq-sample4"/>
    <div class="icons">
    </div>
    <a href="javascript:linkHandler('ADDED TO CART', '300 Gil')"  class="add-to-cart">Add to Basket</a>
  
  </div>
  
  
  <figcaption>
    <h2>Star wars: Battlefront</h2>
    <p>Immerse yourself in the ultimate star wars experience.</p>
    <div class="price">300 Gil </div>
  </figcaption>
</figure>


<figure class="shop">

  <div class="image">
    <img src="game2.jpg" alt="sq-sample15"/>
    <div class="icons">

    </div>
    <a href="javascript:linkHandler('ADDED TO CART', '500 Gil')"  class="add-to-cart">Add to Basket</a>
  </div>
  <figcaption>
    <h2>Dying Light</h2>
    <p>Dying light is an open world first person survival horror action-adventure video game devloped by techland.</p>
    <div class="price">500 Gil </div>
  </figcaption>
</figure>


<figure class="shop">
  <div class="image">
    <img src="game3.jpg" alt="sq-sample16"/>
    
    <div class="icons">

    </div>
    <a href="javascript:linkHandler('ADDED TO CART', '999 Gil')"  class="add-to-cart">Add to Basket</a>
  </div>
  <figcaption>
    <h2>Bloodborne</h2>
    <p>Bloodborne is an action role-playing video game devloped by FromSoftware.</p>
    <div class="price">999 Gil </div>
  </figcaption>
</figure>


<figure class="shop">
  <div class="image">
    <img src="game4.jpg" alt="sq-sample15"/>
    <div class="icons">

    </div>
    <a href="javascript:linkHandler('ADDED TO CART', '150 Gil')"  class="add-to-cart">Add to Basket</a>
  </div>
  <figcaption>
    <h2>Evolve</h2>
    <p>Evolve is a first-person shooter video game developed by Turtle rock studios.</p>
    <div class="price">150 Gil </div>
  </figcaption>
</figure>

{/* Below is the inclusion of the images controller and coins to be used in the store and custimized in the scss file*/}
<div class= "Basket">
<h1>Basket</h1>
</div>
<div><img class= "logo" src="logo.png" alt="sq-sample16"/></div>
<div><img class= "controller" src="controller.png" alt="sq-sample16"/></div>
<div><img class= "controller2" src="controller.png" alt="sq-sample16"/></div>
<div><img class= "controller3" src="controller.png" alt="sq-sample16"/></div>
<div><img class= "controller4" src="controller.png" alt="sq-sample16"/></div>
<div><img class= "coins" src="coins.png" alt="sq-sample16"/></div>
<div><img class= "coins2" src="coins.png" alt="sq-sample16"/></div>
<div><img class= "coins3" src="coins.png" alt="sq-sample16"/></div>
<div><img class= "coins4" src="coins.png" alt="sq-sample16"/></div>
<div class="cart">
    {/* Below the cart is built using the table function to add features such as Name and Total  */}
    <table className="cart">
        <thead>
            <tr>
                <th field="name" width= "140">Name</th>
                <th field="quantity" width="60" align="right">Quantity</th>
                <th field="price" width="60" align="right">Price</th>
            </tr>
        </thead>
    </table>
    <p class="total">Total: <strong>0 Gil</strong></p>
    
    
</div>


</div>

   













), app);
