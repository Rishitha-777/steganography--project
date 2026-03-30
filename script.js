function encode(){
 let msg=document.getElementById('msg').value;
 if(msg===""){alert("Enter message");return;}
 localStorage.setItem('secretMsg',msg);
 window.location='video.html';
}

function generateKey(){
 return Math.floor(1000+Math.random()*9000).toString();
}

function generateLink(){
 let key=generateKey();
 localStorage.setItem('key',key);
 let link=window.location.origin+'/view.html';
 document.getElementById('link').innerHTML=
 `🔗 ${link}<br>🔑 Key: <b>${key}</b>`;
}

function decode(){
 let input=document.getElementById('key').value;
 let real=localStorage.getItem('key');
 if(input===real){
  document.getElementById('output').innerText=
  "✅ Message: "+localStorage.getItem('secretMsg');
 }else{alert("Wrong key ❌");}
}
