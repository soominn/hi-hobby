const profile = document.querySelector('div.profile');
const menu = document.querySelector('div.child-box');

const $numButtons = $("button.numButton");

profile.addEventListener("click",function (){
    if(menu.classList.contains('toggle')){
        menu.classList.remove('toggle');
    } else {
        menu.classList.add('toggle');

        const logOut = document.querySelector('div.logOut');

        logOut.addEventListener("click", function (){
            console.log("클릭됨");
            window.open('adminLogin.jsp','_self',true);
        });
    }
});

$numButtons.click(function() {
	$numButtons.removeClass("number-select");
	$(this).addClass("number-select");
});