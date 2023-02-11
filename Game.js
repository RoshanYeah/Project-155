AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:"string",default:'#coinsId'}
    },
    collision: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (e)=>{
            if(elementId.includes("#coinsId")){
                element.setAttribute("visible", false);
                console.log("ring collision")
    
            }
            if(elementId.includes("#fish")){
                console.log("fish collision")
            }
        });
    }
})