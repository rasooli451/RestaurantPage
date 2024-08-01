




function initialize(ParentCont){
    let divtitle = document.createElement("div");
    divtitle.classList.add("hometitle");
    let p = document.createElement("p");
    p.innerHTML = "Rasoli's Restaurant";
    divtitle.appendChild(p);
    ParentCont.appendChild(divtitle);

    let div2 = document.createElement("div");
    div2.classList.add("description");
    let p2 = document.createElement("p");
    p2.innerHTML = "Rasoli's Restaurant has the best foods! The atmosphere and customer service will satisfy you here. This is exactly the kind of place that I like to return to again and again!!";
    div2.appendChild(p2);
    ParentCont.appendChild(div2);

    let divhours = document.createElement("div");
    divhours.classList.add("Hours");
    let hours = document.createElement("p");
    hours.innerHTML = "Hours";
    divhours.appendChild(hours);
    let ul = document.createElement("ul");
    let content = ["Sunday : 8am - 8pm", "Monday : 6am - 6pm", "Tuesday : 6am - 6pm", "Wednesday : 6am - 6pm","Thursday : 6am - 10pm",  "Friday : 6am - 10pm", "Saturday : 8am - 10pm"];
    let li = null;
    for (let i = 0; i <= 6; i++){
        li = document.createElement("li");
        li.innerHTML = content[i];
        ul.appendChild(li);
    }
    divhours.appendChild(ul);
    ParentCont.appendChild(divhours);

    let divloc = document.createElement("div");
    let loctitle = document.createElement("p");
    loctitle.innerHTML = "Location";
    loctitle.classList.add("special");
    divloc.classList.add("location");
    divloc.appendChild(loctitle);
    let loctext = document.createElement("p");
    loctext.innerHTML = "1683 dellbrook Avenue, Pickering, Ontario";
    divloc.appendChild(loctext);
    ParentCont.appendChild(divloc);
}



export {initialize};