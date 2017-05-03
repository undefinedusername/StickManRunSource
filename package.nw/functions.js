/*functions made by Noah Enger in 2016 march 9th 2016
do not copy and paste
noahenger@gmail.com
-----------------varables------------*/
//var <name>=<stuff>//
//objectName.propertyName//
//languageEN.letters//
//numlist.numlist_//
//made by Noah Enger Updated on 3/11/16//
var pi=3.14;
var divid;
var languageEN={
	letters:"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
};
var errorsyntax="Error: Syntax!";
var errorundef="Error: Undef!";
var errorfail="Error: Failed To execute function!";
var successpop="Success!";

/*-------------------------functions----*/
/*function <name>(<argument1, argument2)>{
	//code
}
*/
function fndvolumeofsphere(radius) {
	var volsp = pi*radius^3*4/3;
volsp;
return volsp;
}
/*-----------------------------------*/
function popupconfirm(string, divid) {
	var confirmpop=confirm(string);
	var x_a;
confirmpop;
if(confirmpop==true){
	x_a="true";
document.getElementById(divid).innerHTML = x_a;
}else if(confirmpop==false) {
	x_a="false";
document.getElementById(divid).innerHTML = x_a;
}else{
	x_a="error: failed to execute function!";
document.getElementById(divid).innerHTML = x_a;
}
return confirmpop;
}

/*------------------------------------*/
function popupalert(string) {
	var alertpop=alert(string);
alertpop;
return alertpop;
}

/*------------------------------------*/
function popupprompt(string, divid) {
	var promptpop=window.prompt(string);
	var x_b;
promptpop;
if(promptpop !== null){
	x_b=promptpop;
document.getElementById(divid).innerHTML = x_b;
return promptpop;
}
}
/*------------------------------------*/
function printjavaenableddemo(){ 
    document.getElementById("demo").innerHTML =
    "Java enabled is " + navigator.javaEnabled();
}
/*---------------------------------------*/
function printjavaenabled() {
alert("Java enabled is " + navigator.javaEnabled());
}

/*---------------------------------------*/
function popup(contents) {
    var myWindow = window.open("", "Popup", "width=10000, height=10000");
    myWindow.document.write(contents);
}
/*---------------------------------------*/
function openmywebsite() {
    window.open("http://survivalkid945.blogspot.com/","_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
}
function openyt() {
    window.open("https://www.youtube.com/channel/UCeCvhiUv-5r1OtJyOV6w7DA/","_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
}
/*---------------------------------------*/
function openwindow(websiteurl) {
 window.open(websiteurl, "_blank", "toolbar=yes, scrollbars=yes, resizeable=yes, top=500, left=500, width=10000, height=10000");
}
/*do "openwindow('https://website.com/') */
/*---------------------------------------*/


function runprogram(){
    var file = document.createElement("INPUT");
    file.setAttribute("type", "file");
    document.body.appendChild(x);
 if(file!==null){
	 var run=window.open;
	 run(file);
 }else{
	 window.alert("Error! invalid file!");
 }
 }
 
 function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*
<input type="file" id="myFile">
	  <input type="color" id="myColor">
	  <input type="password" id="myPsw" value="psw123">
	  <input type="radio" id="myRadio">
         <input type="range" id="myRange" value="90">*/
/*Player:1
Monster:2
Shop:3
Slime:4
*/
var Player={
		randpos:Math.floor((Math.random() * 100) + 1),/*Player.randpos*/
		type:1,/*Player.type*/
		texture:"images/player/Player_1.png",/*Player.texture*/
		health:1000,/*Player.health*/
		damage:2,/*Player.damage*/
		tool:null/*Player.tool*/
	};
var Monster={
		randpos:Math.floor((Math.random() * 100) + 1),//Monster.randpos//
		type:2,//Monster.type//
		texture:"images/Monster/Monster.png",//Monster.texture//
		health:100,//Monster.health//
		damage:5.5,//Monster.damage//
		tool:null//Monster.tool//
	};
var Slime={
		randpos:Math.floor((Math.random() * 100) + 1),//Slime.randpos//
		type:4,//Slime.type//
		texture:"images/Monster/slime.png",//Slime.texture//
		health:50,//Slime.health//
		damage:1,//Slime.damage//
		tool:null//Slime.tool//
	};
var Entity= {
		Player:1,
		Monster:2,
		Shop:3,
		Slime:4
	};
function PlayerEnt(){
	//Player id is 1//
	//Entity.Player;//
	return Entity.Player;
}
function gameover(){
     popup('<html><head><link rel=\"stylesheet\" href=\"stylesheet.css\"><script src=\"functions.js\"></script></head><body><footer>game over</footer></body></html>');
}

function damage(){
	if(Entity.Monster==Monster.type && Player.health>0){
	Player.health-=Monster.damage;
	}else if(Entity.Slime==Slime.type && Player.health>0){
			Player.health-=Slime.damage;
	}else if(Entity.Player==Player.type && Player.health>0){
		Player.health-=Player.damage;
     }else if(Player.health==0){
          gameover("Game Over!");
     }
	}	
	
function MonsterEnt(){
	return Entity.Monster;
}

function ShopEnt(){
	return Entity.Shop;
}

function SlimeEnt(){
	return Entity.Slime;
}

function GetPlayerX(){
	return Player.ranpos;
}

var tool={
     none:0,
     brokenaxe:1,
     axe:2,
     brokensword:3,
     sword:4,
     bow:5,
     arrow:6
};

function getEntitytool(ent){
     if(ent==Monster.type){
          if(Monster.tool==null){
               Monster.tool=tool.none;
               return Monster.tool;
          }
     }else if(ent==Player.type){
          if(Player.tool==null){
               Player.tool=tool.none;
               return Player.tool;
          }
     }else if(ent==Shop.type){
          if(Shop.tool==null){
               Shop.tool=tool.none;
               return Shop.tool;
          }
     }else if(ent==Slime.type){
          if(Slime.tool==null){
               Slime.tool=tool.none;
               return Slime.tool;
          }
     }else if(ent==Monster.type){
          if(Monster.tool==1){
           return tool.brokenaxe;
          }
     }else if(ent==Monster.type){
          if(Monster.tool==2){
           return tool.axe;
          }
     }else if(ent==Monster.type){
          if(Monster.tool==3){
           return tool.brokensword;
          }
     }else if(ent==Monster.type){
          if(Monster.tool==4){
           return tool.sword;
          }
     }else if(ent==Monster.type){
          if(Monster.tool==5){
           return tool.bow;
          }
	 }
}

var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}