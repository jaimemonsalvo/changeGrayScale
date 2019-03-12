//Create a variable that gets the value of the text from the text input element, and
//Display this text in an alert.
function upload1(){
    var tic =document.getElementById("finput");
    var filein=tic.value;
    alert("elegiste "+ filein)
    
  }
  var image;
  function upload(){
    var toc =document.getElementById("vallenato");
    var tic =document.getElementById("finput");
    image=new SimpleImage(tic);
    image.drawTo(toc)  
  }
  
  function makegray(){
    for( var pixel of image.values()){
       var uno=pixel.getRed();
      var dos=pixel.getGreen();
      var tres=pixel.getBlue();
      var cuatro=((uno+dos+tres)/3);
      
      pixel.setRed(cuatro);
      pixel.setGreen(cuatro);
      pixel.setBlue(cuatro);}
   var toc =document.getElementById("rock");
                  image.drawTo(toc) }