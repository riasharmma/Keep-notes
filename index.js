let Da = document.getElementById("currdate1");
Da.innerHTML = new Date().getFullYear();

const myElement = document.getElementById("btn_onclick");
myElement.addEventListener("click", () => {
    var head = prompt("Add a task");
    var tit = prompt("breif about what to remind");
    const newdiv = document.createElement("div");
    const newh1 = document.createElement("h1");
    const newp = document.createElement("p");
    newdiv.classList.add("notes");
    newh1.innerHTML = head;
    newp.innerHTML = tit;
    newdiv.appendChild(newh1);
    newdiv.appendChild(newp);
    document.getElementById("se").prepend(newdiv);
    });
