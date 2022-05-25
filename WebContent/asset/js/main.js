const mainBanner = document.querySelector('div.banner-full');

let count = 0;

const rollBtns = document.querySelectorAll('button.rollingBtn');

rollBtns.forEach(btn=>{
    btn.addEventListener("click",function(){
        let result = '';
        let btnType = btn.classList[2];
        if(btnType == 'prev'){
            count--;
            if(count == -1){
                count = 6;
            }
            result = btn.nextSibling.nextSibling.firstChild.nextSibling;
        } else {
            count++;
            if(count == 7) {
                count = 0;
            }
            result = btn.previousSibling.previousSibling.firstChild.nextSibling;
        }
        result.style.transform = "translate(-" + count*100 + "vw)";
    });
});

const arrowBtns = document.querySelectorAll("button.swipe-btn");

arrowBtns.forEach(arrow=>{
    let count = 0;
    arrow.addEventListener("click",function(){
        let result = '';
        let arrowType = arrow.classList[1];
        if(arrowType == 'prev'){
            count--;
            if(count == -1){
                count = 5;
            }
            result = arrow.nextSibling.nextSibling.firstChild.nextSibling;
        } else {
            count++;
            if(count == 6) {
                count = 0;
            }
            result = arrow.previousSibling.previousSibling.firstChild.nextSibling;
        }
        console.log(arrowType,"translate(-" + count*300 + "px)");
        result.style.transform = "translate(-" + count*300 + "px)";
        console.log(result);
    });
});

const eventBtns = document.querySelectorAll('button.event');

eventBtns.forEach(btn=>{
    let count = 0;
    btn.addEventListener("click",function(){
        let result = '';
        let btnType = btn.classList[1];
        if(btnType == 'prev'){
            count--;
            if(count == -1){
                count = 1;
            }
            result = btn.nextSibling.nextSibling.childNodes[1];
        } else {
            count++;
            if(count == 2) {
                count = 0;
            }
            result = btn.previousSibling.previousSibling.childNodes[1];
        }
        result.style.transform = "translate(-" + count*400 + "px)";
        console.log(result);
    });
});

const $middleBtn = $("button.middleBtn");
const middleBanner = document.querySelector("div.middle-full");

$middleBtn.click(function() {
	if($(this).hasClass("prev") == true) {
		count--;
        count = count == -1 ? 3 : count;
        middleBanner.style.transform = "translate(-" + count * 100 + "vw)";
	}
	else {
		count++;
        count = count == 4 ? 0 : count;
        middleBanner.style.transform = "translate(-" + count * 100 + "vw)";
	}
});

/* const $allMenu = $('.all-menu');
const $allBelow = $('.all-menu-below');

$allMenu.on("focus", function(){
    console.log("포커스온");
    $allBelow.toggle(2000);
}); */

/* $allMenu.blur(function(){
    $allBelow.style.visible= "hidden";
}); */

const allMenu = document.querySelector('div.all-menu');
const allBelow = document.querySelector('div.below-div');
const belowBox = document.querySelector('div.all-menu-below');
const belowP = document.querySelectorAll('p.below-child');

let check = false;

/*  hover() 로 바꾸기 */
allMenu.onclick = toggle;

function toggle() {
    if(allBelow.classList.contains('toggle')){
        allBelow.classList.remove('toggle');
        console.log("감추기");
    } else {
        allBelow.classList.add('toggle');
        console.log("보이기");
    }
};

/* allMenu.addEventListener("focus", toggle()); */