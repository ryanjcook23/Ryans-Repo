let objects = [

    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
   
   ];

 objects.forEach((obj) => {
  
     let div = document.createElement('div')
     
    div.style.backgroundColor = obj.color;
   div.style.height = obj.height;
    div.style.width = obj.width;
    
    document.body.appendChild(div);
   
 })