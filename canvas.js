window.onload = function () {
    // selcted
   
    colorContainer = document.getElementById("color")
    var c = document.getElementById("canv");
    var ctx = c.getContext("2d");
    var size = document.getElementById("size");
    var plus = document.getElementById("increase");
    var decrease = document.getElementById("decrease");
    var radius = 5;
    flag = false;
    mainColor = "#000"
    type = 1;
    width = 10;
    height = 10;
    var oldR = localStorage.getItem("radius")
    if(oldR != null)
    {
        radius = oldR
        size.innerText = oldR
    }
    colors = ["red","blue","green","gold","aqua","lightcoral"]
    for (let index = 0; index < colors.length; index++) {
        elm = document.createElement("span")
        elm.className = " colorType " 
        var old = localStorage.getItem("color")
        if(old != null && old == colors[index])
        {
            mainColor = old
            elm.className +=" active" 
        }
        elm.style.background = colors[index]
        elm.addEventListener("click",chnageColor);
        console.log(elm)
        colorContainer.appendChild(elm)
    }
    
    function chnageColor()
    {
        mainColor = this.style.background;
        var x = document.getElementsByClassName("active")
        if(x.length != 0)
        {
               document.getElementsByClassName("active")[0].className = "colorType ";
        }
        this.className +=" active"
        localStorage.setItem("color", mainColor);
    }
    save.onclick = function () {
       var  doomslayer = c.toDataURL();
       localStorage.setItem('imgCanvas', doomslayer);
    }
    // =========
    ciric.onclick = function () {
        type = 1;
        c1.style.display = "inline-block"
        c2.style.display = "none"
    }
    rec.onclick = function () {
        type = 2;
        c1.style.display = "none"
        c2.style.display = "inline-block"
    }
    plus.onclick = function () {
        radius++;
        if (radius >= 50)
          radius = 50
        size.innerText = radius
        localStorage.setItem("radius", radius);

    }
    decrease.onclick = function () {
        radius--;
        if (radius <= 5)
          radius = 5
        size.innerText = radius
        localStorage.setItem("radius", radius);
    }
    c.onmousedown = function () {
        flag = true;
    }
    c.onmouseup = function () {
        flag = false
    }
    c.onmousemove = function (e) {
        if(flag)
        {
            console.log(flag,e);
            console.log(e.clientX,e.clientY)
            if(type == 1)
              drawCiricle(e.clientX,e.clientY-47)
            else
              drawRac(e.clientX,e.clientY-47)
        }
        
    }
    ww.onchange = function () {
        if(this.value != " " && (!isNaN(this.value)))
        {
           width = parseInt(this.value)
        }
        else
        {
            this.value = "10";
        }
    }
    hh.onchange = function () {
        if(this.value != " " && (!isNaN(this.value)))
        {
           height = parseInt(this.value)
        }
        else
        {
            this.value = "10";
        }
    }
    //==========
    function drawCiricle(x,y)
    {
        ctx.beginPath();
        ctx.fillStyle = mainColor;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

    }
    function drawRac(x,y)
    {
        ctx.beginPath();
        ctx.fillStyle = mainColor;
        ctx.rect(x, y, width, height);
        ctx.fill();
    }
    function getSize()
    {
        radius  = parseInt( size.innerText)
        console.log(radius)
        return radius;
    }
    function getMousePos(canvas, evt) {
        var rect = c.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }
}