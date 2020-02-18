// const sortBy = document.getElementById("sort-by-field")
// document.getElementById("sort-by1").innerHTML = sortBy;

document.getElementById("logo").addEventListener("click", () => {
    window.location.href = "../Landing page/landingPage.html";
})

const product_706397926069 = {
    id: "GUN-916558",
    productName: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
    productType: "variant",
    brand: "Springfield",      
    price: {
        value: 859,
        currency: "USD",
        formatted: "$859.00",
        decimalPrice: "859.00"
      }, 
    images: {
      large: [
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa7d75f40/large/gun-916558.jpg?sw=800&sh=800",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        },
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdf064139/large/gun-916558_a.jpg?sw=800&sh=800",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        },
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6595f661/large/gun-916558_b.jpg?sw=800&sh=800",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        }
      ],
      small: [
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwa7d75f40/large/gun-916558.jpg?sw=146&sh=146",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        },
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dwdf064139/large/gun-916558_a.jpg?sw=146&sh=146",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        },
        {
          alt: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black",
          url: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw6595f661/large/gun-916558_b.jpg?sw=146&sh=146",
          title: "Springfield Armory SAINT Victor 5.56 AR-15 Semi Auto Pistol 7.5\" Barrel 30 Rounds with a SB Tactical Pistol Brace Black"
        }
      ]
    }
}
function createUserCard () {
    var userCard = document.createElement("div");
userCard.className = "user-card";
var userCards = document.getElementById("user-cards")
userCards.appendChild(userCard);
userCard.innerHTML = `<img src=${product_706397926069.images.small[0].url} alt=${product_706397926069.images.small[0].alt}>
<p>${product_706397926069.productName}</p>            
<h3>${product_706397926069.price.formatted}</h3>
<div class="card-overlay">
    <button class="details">SEE DETAILS</button>
    <button class="add-to-cart">ADD TO CART</button>
</div>`
}

for (var i = 1; i <= 17; i ++) {
    createUserCard();
}
