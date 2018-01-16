function myHeart() {
//Hi Mom, Happy Mother's Day!!!
//Thank you for being an amazing role model. 
//As a gift, open Chrome Developer Tools. 
//Paste this code in the console.
//Replace 'mom' with any # between 1 and 10. Click enter.  
//You'll get that many bits of love from me :)
//Love, Roshni
var mom = document.getElementById("myNumber").value;
var x = mom*10; 
var h = x/2;
var ms = (h/5)*2;
var me = (h/5)*3;
var line1 = "<br>";
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