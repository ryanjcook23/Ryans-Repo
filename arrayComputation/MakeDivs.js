let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

 objects.forEach((obj) => {
  
     let div = document.createElement('div')
    div.style.color = obj.color;
    div.style.height = obj.height;
    div.style.width = obj.width;
    
    document.body.appendChild(div);
   
 })