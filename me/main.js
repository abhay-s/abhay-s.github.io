
var sound = document.getElementById('sound');
var inlap = document.getElementById('inlap');
var intim = document.getElementById('intim');
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
document.getElementById('credit').style.opacity = "0";
document.getElementById('circle').style.top = (h/2 - 100) + "px";
document.getElementById('circle').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer1').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer1').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer2').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer2').style.left = (w/2 - 100) + "px";
document.getElementById('circletimer5').style.top = (h/2 - 100) + "px";
document.getElementById('circletimer5').style.left = (w/2 - 100) + "px";
document.getElementById('title').style.top = (h/2 - 60) + "px";
document.getElementById('title').style.left = (w/2 - 78) + "px";
document.getElementById('wcircle').style.top = (h/2 - 75) + "px";
document.getElementById('wcircle').style.left = (w/2 - 75) + "px";
document.getElementById('purpbox').style.top = (h/2 - 85) + "px";
document.getElementById('purpbox').style.left = (w/2 - 85) + "px";
document.getElementById('line').style.top = (h/2 ) + "px";
document.getElementById('line').style.left = (w/2 - 150) + "px";
document.getElementById('line2').style.top = (h/2 ) + "px";
document.getElementById('line2').style.left = (w/2 - 150) + "px";
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(15px,15px)";
  document.getElementById('wcircle').style.width = "120px";
  document.getElementById('wcircle').style.height = "120px";

},100);
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(-50px,-50px)";
  document.getElementById('wcircle').style.width = "250px";
  document.getElementById('wcircle').style.height = "250px";
  document.getElementById('line').style.top = (h/2 - 100) + "px";
  document.getElementById('line').style.left = (w/2 - 50) + "px";
  document.getElementById('line2').style.top = (h/2 +100) + "px";
  document.getElementById('line2').style.left = (w/2 - 50) + "px";
  document.getElementById('title').style.opacity = "1";
},1000);
setTimeout(function(){
  document.getElementById('wcircle').style.transform = "translate(-475px,-475px)";
  document.getElementById('wcircle').style.width = "1000px";
  document.getElementById('wcircle').style.height = "1000px";
  document.getElementById('line').style.top = (h/2 - 100) + "px";
  document.getElementById('line').style.left = (w/2 - 50) + "px";
  document.getElementById('line2').style.top = (h/2 +100) + "px";
  document.getElementById('line2').style.left = (w/2 - 50) + "px";
  document.getElementById('title').style.opacity = "1";
},3000);
setTimeout(function(){
  document.getElementById('one').style.transform = "translate(0px , 100vh)";
  document.getElementById('time').style.opacity = "1";
  document.getElementById('credit').style.opacity = "1";
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
  minutes = "0" + minutes
  }
  document.getElementById('time').innerHTML = hours + ":" + minutes + " ";
},5000);
setInterval(function(){
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
  minutes = "0" + minutes
  }
  document.getElementById('time').innerHTML = hours + ":" + minutes + " ";

},60000)
/*nature*/
var n = 2;
var np = 0;
var ni;
var end;
function Nature(){


  if(n==2){
    Stop();
    var nt=0;
    var nl = 0;
    n=1;
    ni = setInterval(function(){if(np==0){
      if(nt<30){
      nt++;}else{
        nt=-2;
      }
      if(nt == -2){
        sound.src = "sound/" + Math.floor((Math.random() * 5) + 1) + ".wav";
        sound.play();
        nl++;
      }
      if(nl>20){
        sound.src = "sound/f.wav";
          sound.play();
        Stop();
      end = setInterval(function(){sound.src = "sound/endless.wav";
        sound.play();},4000)  ;
      }
      document.getElementById('tim').innerHTML = nt + "/30s";
      document.getElementById('lap').innerHTML = nl + "/20";

    }
    },1000);
  }
  if(n==1){
    n=0;
    np = 0;
    document.getElementById('circletimer1').style.background = "rgba(255,255,255,0.3)";
    document.getElementById('circletimer1').style.color = "black";

  }else{
    n=1;
    np = 1;
document.getElementById('circletimer1').style.color = "#fff";
    document.getElementById('circletimer1').style.background = "rgba(255, 51, 51, 0.3)";

  }
}
/*nature till here*/
/*ocean*/
var o = 2;
var op = 0;
var oi;
var end;
function Ocean(){

  if(o==2){
    Stop();
    var ot=0;
    var ol = 0;
    o=1;
    oi = setInterval(function(){if(op==0){
      if(ot<10){
      ot++;}else{
        ot=-2;
      }
      if(ot == -2){
        sound.src = "sound/" + Math.floor((Math.random() * 5) + 1) + ".wav";
        sound.play();
        ol++;
      }
      if(ol>40){
        sound.src = "sound/f.wav";
          sound.play();
        Stop();
      end = setInterval(function(){sound.src = "sound/endless.wav";
        sound.play();},4000)  ;
      }
      document.getElementById('tim1').innerHTML = ot + "/10s";
      document.getElementById('lap1').innerHTML = ol + "/40";

    }
    },1000);
  }
  if(o==1){
    o=0;
    op = 0;
    document.getElementById('circletimer2').style.background = "rgba(255,255,255,0.3)";
    document.getElementById('circletimer2').style.color = "black";

  }else{
    o=1;
    op = 1;
document.getElementById('circletimer2').style.color = "#fff";
    document.getElementById('circletimer2').style.background = "rgba(255, 51, 51, 0.3)";

  }
}
/*ocean till here*/
/*sky*/
var s = 2;
var sp = 0;
var si;
var end;
function Sky(){


  if(s==2){
    Stop();
    intim.disabled = "true";
    inlap.disabled = "true";
    var st=0;
    var sl = 0;
    var sit = intim.value;
    var sil = inlap.value;
    s=1;
    si = setInterval(function(){if(sp==0){
      if(st<sit){
      st++;}else{
        st=-2;
      }
      if(st == -2){
        sound.src = "sound/" + Math.floor((Math.random() * 5) + 1) + ".wav";
        sound.play();
        sl++;
      }
      if(sl>sil){
        sound.src = "sound/f.wav";
          sound.play();
        Stop();
      end = setInterval(function(){sound.src = "sound/endless.wav";
        sound.play();},4000)  ;
      }
      document.getElementById('tim2').innerHTML = st + "/" + sit + "s";
      document.getElementById('lap2').innerHTML = sl + "/" + sil;

    }
    },1000);
  }
  if(s==1){
    s=0;
    sp = 0;
    document.getElementById('circletimer3').style.background = "rgba(255,255,255,0.3)";
    document.getElementById('circletimer3').style.color = "black";

  }else{
    s=1;
    sp = 1;
document.getElementById('circletimer3').style.color = "#fff";
    document.getElementById('circletimer3').style.background = "rgba(255, 51, 51, 0.3)";

  }
}
/*sky till here*/
function Stop(){
    document.getElementById('circletimer5').style.background = "rgba(255, 51, 51, 0.3)";
      document.getElementById('circletimer5').style.color = "#fff";
    clearInterval(ni);
    clearInterval(end);
    document.getElementById('tim').innerHTML = "0/30s";
    document.getElementById('lap').innerHTML = "0/20";
    document.getElementById('circletimer1').style.background = "rgba(255, 255, 255, 0)";
    clearInterval(oi);
    n=2;
    o=2;
    s=2;
    document.getElementById('tim1').innerHTML = "0/10s";
    document.getElementById('lap1').innerHTML = "0/40";
    document.getElementById('circletimer2').style.background = "rgba(255, 255, 255, 0)";
    clearInterval(si);
    intim.disabled = false;
    inlap.disabled = false;
    document.getElementById('tim2').innerHTML = "0/-";
    document.getElementById('lap2').innerHTML = "0/-";
    document.getElementById('circletimer3').style.background = "rgba(255, 255, 255, 0)";
setTimeout(function(){
  document.getElementById('circletimer5').style.background = "rgba(255,255,255,0.0)";
  document.getElementById('circletimer5').style.color = "black";
},500);
}
