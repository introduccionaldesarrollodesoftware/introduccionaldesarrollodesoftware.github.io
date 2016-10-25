//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180;timeIni=180; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=10;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="INICIAR";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080C0"; colorText="#000000"; colorSele="#80FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICITACIONES"; messageTime="TIEMPO AGOTADO"; messageError=""; messageErrorG=""; messageAttempts="NO HAY MAS OPORTUNIDADES"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="cGFyZWphcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["","","","","","","",""];im1=["apache.jpg","c__.jpg","css3.jpg","html5.jpg","jQurery.jpg","php.jpg","mysql.jpg","java.jpg"];mp31=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["apache.jpg","jQurery.jpg","css3.jpg","php.jpg","mysql.jpg","java.jpg","html5.jpg","c__.jpg"];mp32=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjA","Mjc","MjI","MjY","MjE","MjM","MjQ","MjU"];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="parejas_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
