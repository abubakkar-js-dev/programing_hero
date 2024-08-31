let myScrore = 287;
let friendScore = 78;

if((myScrore-friendScore) > 80){
    if(friendScore > 80){
        console.log("Let's go to lunch my dear frien 😊");    
    }
    if(friendScore < 80 && friendScore >= 60){
        console.log("Will lunch next time my friend 🙂");
    }
    if(friendScore < 60 && friendScore >= 40){
        console.log("I never seen your message😡.");
    }
    if(friendScore < 40 ){
        console.log("Le block kha Haramzadi!😡🤬");
    }
}else{
    console.log('Go to home and act sad 😥');
}