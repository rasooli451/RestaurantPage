





function Menu(parentCont){
    let divmenutitle = document.createElement("div");
    let menup = document.createElement("p");
    menup.innerHTML = "Menu";
    divmenutitle.appendChild(menup);
    divmenutitle.classList.add("Menutitle");
    parentCont.appendChild(divmenutitle);


    let menucont = document.createElement("div");
    menucont.classList.add("Menucont");
    
    let beverages = document.createElement("div");
    beverages.classList.add("group");
    menucont.appendChild(beverages);
    let bevaragetitle = document.createElement("p");
    bevaragetitle.innerHTML = "Beverages";
    beverages.appendChild(bevaragetitle);
    let beverage1 = document.createElement("div");
    beverages.appendChild(beverage1);
    let beveragename = document.createElement("p");
    beveragename.innerHTML = "Natas";
    beverage1.appendChild(beveragename);
    let bev1desc = document.createElement("p");
    bev1desc.innerHTML = "Traditional Portuguess custard tart";
    let bev1price = document.createElement("p");
    bev1price.innerHTML = "3$";
    beverage1.appendChild(bev1desc);
    beverage1.appendChild(bev1price);


    let maindishes = document.createElement("div");
    maindishes.classList.add("group");
    menucont.appendChild(maindishes);
    let maindishtitle = document.createElement("p");
    maindishtitle.innerHTML = "Main Dishes";
    maindishes.appendChild(maindishtitle);
    let dish1 = document.createElement("div");
    maindishes.appendChild(dish1);
    let dish1name = document.createElement("p");
    dish1name.innerHTML = "Jumbo Platter";
    dish1.appendChild(dish1name);
    let dish1des = document.createElement("p");
    dish1des.innerHTML = "2Whole chickens + 4 large sides + garlic bread";
    let dish1price = document.createElement("p");
    dish1price.innerHTML = "80$";
    dish1.appendChild(dish1des);
    dish1.appendChild(dish1price);

    parentCont.appendChild(menucont);
}






export {Menu};