function myHeart() {
var mom = document.getElementById("myNumber").value;
var x = mom*10; 
var h = x/2;
var ms = (h/5)*2;
var me = (h/5)*3;
var line1 = "<br>";
//validate number 1-10; otherwise return error
 if (mom < 1 || mom > 10) {
  document.getElementById('heartError').innerHTML= "Number must be between 1 and 10.";
    }
    else{
//first line
{
  for(var count = 1; count <= x; count++) {
    if((count > ms && count <= me)||(count <= (x-ms) && count > (x-me))) {
       line1 = line1 + "*";
       } else { line1 = line1 + "&nbsp";}
       }
  document.getElementById('heart').innerHTML+=line1;
  line1 = "<br>";
}
//top lines
{
  for (var cta = 1; cta <= ms; cta ++){
    for(var ctb = 1; ctb <= x; ctb ++){
      if(ctb === (ms+1-cta) || ctb === (me+cta) 
         || ctb === (x-ms+cta) ||ctb === (x-me-cta+1)){
        line1 = line1+ "*";
    } else {line1 = line1+ "&nbsp";}
    }
    document.getElementById('heart').innerHTML+=line1;
    line1 = "<br>";    
  }
}
//bottom lines
{
  for (var cta = 1; cta <= h; cta ++){
    for(var ctb = 1; ctb <= x; ctb ++){
      if(cta === ctb || cta === (x-ctb)){ 
        line1 = line1 +"*";
    } else { line1 = line1+"&nbsp";}
    }
    document.getElementById('heart').innerHTML+=line1;
    line1 = "<br>";
  }
}
//There's probably a simpler way to write this. But you know simple isn't me :)

}
}