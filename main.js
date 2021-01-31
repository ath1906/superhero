console.log("manul: captain america=c,hulk=h,ironman=i,spiderman=s ");

var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var playerobject="";
blockheight=30;
blockwidth=30;
function playeruptade(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHieght(140);
        playerobject.set({top:player_y,left:player_x});
        canvas.add(playerobject);
    });
    function newImage(IMG1){fabric.Image.fromURL(IMG1,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({top:player_y,left:player_x});
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",key);

function key(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        console.log("p and shift pressed together") 
        blockheight=blockheight +10;
        blockwidth=blockwidth +10;
        document.getElementById("current_height").innerHTML=blockheight;
        document.getElementById("current_width").innerHTML=blockwidth;
    }
    if (e.shiftKey==true && keypress=='77'){
        console.log("m and shift pressed together") 
        blockheight=blockheight -10;
        blockwidth=blockwidth -10;
        document.getElementById("current_height").innerHTML=blockheight;
        document.getElementById("current_width").innerHTML=blockwidth;
    } 
 if (keypress=='38')   {
     up();console.log("up");
 }
 if (keypress=='40')   {
    down();console.log("down");
}
if (keypress=='37')   {
    left();console.log("left");
}if (keypress=='38')   {
    right();console.log("right");
}
if (keypress =='67'){
    newImage("captain_america_left_hand.png");
    console.log("c");
}
if (keypress =='72'){
    newImage("hulk_face.png");
    console.log("hf");
}
if (keypress =='72'){
    newImage("hulk_left_hand.png");
    console.log("hla");
}
if (keypress =='72'){
    newImage("hulk_legs.png");
    console.log("he");
}
if (keypress =='72'){
    newImage("hulk_right_hand.jpg");
    console.log("hra");
}
if (keypress =='72'){
    newImage("hulkd_body.png");
    console.log("hb");

}
if (keypress =='73'){
    newImage("ironman_body.png");
    console.log("ib");
}if (keypress =='73'){
    newImage("ironman_face.png");
    console.log("if");
}
if (keypress =='73'){
    newImage("ironman_left_hand.png");
    console.log("ilh`");
}if (keypress =='73'){
    newImage("ironman_legs.png");
    console.log("ie");
}if (keypress =='73'){
    newImage("ironman_right_hand.png");
    console.log("irh");
}if (keypress =='83'){
    newImage("spiderman_body.png");
    console.log("sb");
}if (keypress =='83'){
    newImage("spiderman_face.png");
    console.log("sf");
}if (keypress =='83'){
    newImage("spiderman_left_hand.png");
    console.log("slh");
}if (keypress =='83'){
    newImage("spiderman_legs.png");
    console.log("se");
}if (keypress =='83'){
    newImage("spiderman_right_hand.png");
    console.log("srh");
}if (keypress =='84'){
    newImage("thor_face.png");
    console.log("tf");
}if (keypress =='84'){
    newImage("thor_right_hand.png");
    console.log("trh");
}if (keypress =='84'){
    newImage("thor_left_hand.png");
    console.log("tlh");
}
}
}function up(){
    if(player_y >= 0){
        player_y=player_y-blockheight;
        console.log("block height = "+blockheight);
        console.log("y = "+player_y);
        canvas.remove(playerobject);
        playeruptade();
    }
    }
    function down(){
        if(player_y <= 500){
            player_y=player_y+blockheight;
            console.log("block height = "+blockheight);
            console.log("y = "+player_y);
            canvas.remove(playerobject);
            playeruptade();
        }
        }
        function right(){
            if(player_x <= 850){
                player_x=player_x+blockwidth;
                console.log("block width = "+blockwidth);
                console.log("x = "+player_x);
                canvas.remove(playerobject);
                playeruptade();
            }
            }function left(){
                if(player_x >= 0){
                    player_x=player_x-blockwidth;
                    console.log("block width = "+blockwidth);
                    console.log("x = "+player_x);
                    canvas.remove(playerobject);
                    playeruptade();
                }
                }