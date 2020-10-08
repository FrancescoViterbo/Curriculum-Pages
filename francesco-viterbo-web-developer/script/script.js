
/* Show Skills' list and sections' sons when scroll reaches the right section */
function inViewport( element ){

    // Get the elements position relative to the viewport

    var bb = element.getBoundingClientRect();

    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite

    return !(bb.top > innerHeight || bb.bottom < 0);

}


// Animations for skills section

var screenWidth = window.screen.availWidth;

// var curriculum = document.getElementById('curriculum');
var skill1 = document.getElementById('skill1');
var skill2 = document.getElementById('skill2');
var skill3 = document.getElementById('skill3');
var skill4 = document.getElementById('skill4');
var skill5 = document.getElementById('skill5');
var skill6 = document.getElementById('skill6');
var skill7 = document.getElementById('skill7');
var skill8 = document.getElementById('skill8');

document.addEventListener('scroll', event => {

    if(inViewport(skill1) && (screenWidth > 770)) {
        skill1.style.animation = "enterAnimation 1s ease-out forwards"
        skill2.style.animation = "enterAnimation 1s 0.5s ease-out forwards"
        skill3.style.animation = "enterAnimation 1s 1s ease-out forwards"
        skill4.style.animation = "enterAnimation 1s 1.5s ease-out forwards"
        skill5.style.animation = "enterFromRightAnimation 1s 2s ease-out forwards"
        skill6.style.animation = "enterFromRightAnimation 1s 2.5s ease-out forwards"
        skill7.style.animation = "enterFromRightAnimation 1s 3s ease-out forwards"
        skill8.style.animation = "enterFromRightAnimation 1s 3.5s ease-out forwards"
    } else if (!inViewport(skill1)) {
        skill1.style.animation = ""
        skill2.style.animation = ""
        skill3.style.animation = ""
        skill4.style.animation = ""
        skill5.style.animation = ""
        skill6.style.animation = ""
        skill7.style.animation = ""
        skill8.style.animation = ""
    } else if (inViewport(skill1) && (screenWidth < 771)) {
        skill1.style.animation = "enterAnimation 1s ease-out forwards"
        skill2.style.animation = "enterFromRightAnimation 1s 0.5s ease-out forwards"
        skill3.style.animation = "enterAnimation 1s 1s ease-out forwards"
        skill4.style.animation = "enterFromRightAnimation 1s 1.5s ease-out forwards"
        skill5.style.animation = "enterAnimation 1s 2s ease-out forwards"
        skill6.style.animation = "enterFromRightAnimation 1s 2.5s ease-out forwards"
        skill7.style.animation = "enterAnimation 1s 3s ease-out forwards"
        skill8.style.animation = "enterFromRightAnimation 1s 3.5s ease-out forwards"
    }
})

// Animation for instant-scroll


// Project Select

var project1 = document.getElementById('project1');
var project2 = document.getElementById('project2');
var project3 = document.getElementById('project3');


skill1.onclick = function() {selectProject(project1)};
skill2.onclick = function() {selectProject(project2)};
skill3.onclick = function() {selectProject(project3)};


var projectActive;

function selectProject(projectNumb) {
    if (projectActive === projectNumb) {
        projectNumb.style.border = "";
        projectActive = undefined;
    } else {
        projectNumb.style.border = "5px solid black";
        projectActive = projectNumb;
    }
    console.log(projectActive);
}
