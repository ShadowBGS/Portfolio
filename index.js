// function closeSide(){
//         document.getElementById("SideR").style.display = "none";
//         document.getElementById("SideLi").style.background = "none";        
//     }

// function openSide(){
//         document.getElementById("SideR").style.display = "flex";    
//         document.getElementById("SideLi").style.background = "#1B1B1B"; 
//     }
    // document.getElementById("ti").onclick = function() {
    //     document.getElementById("SideR").style.display = "flex";    
    //     document.getElementById("SideLi").style.background = "#1B1B1B"; 
    // };
    // document.getElementById("lti").onclick = function() {
    //     document.getElementById("SideR").style.display = "none";
    //     document.getElementById("SideLi").style.background = "none"; 
    // };
    
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("openBtn").addEventListener("click", openSide);
        document.getElementById("closeBtn").addEventListener("click", closeSide);
    });
    
    function closeSide() {
        // document.getElementById("SideR").style.display = "none";
        // document.getElementById("SideLi").style.background = "transparent";
        document.getElementById("SDE").style.display = "none";
        document.getElementById("SideR").style.display = "none";
        document.getElementById("openBtn").style.display = "flex";
        document.getElementById("SideR").style.background = "none";
    }
    
    function openSide() {
        document.getElementById("SDE").style.display = "flex";
        document.getElementById("openBtn").style.transitionDuration = "2s"
        document.getElementById("SideR").style.display = "flex";
        document.getElementById("openBtn").style.display = "none";
        document.getElementById("SideR").style.background = "#1B1B1B";
        
    }
    