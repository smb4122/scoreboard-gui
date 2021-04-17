// match buttons

const matchOneTeamOneRoundOne = document.querySelector('#matchoneteamoneroundone');
matchOneTeamOneRoundOne.addEventListener('click', toggleOnOff);

const matchOneTeamOneRoundTwo = document.querySelector('#matchoneteamoneroundtwo');
matchOneTeamOneRoundTwo.addEventListener('click', toggleOnOff);

//don't code
//without a condom
//that's how you get viruses

function toggleOnOff() {
    if (this.style.fill === 'rgb(26, 26, 26)') {
        this.style.fill = "rgb(255, 204, 0)";
        this.style.opacity = '1';
    }
    else {
        this.style.fill = "rgb(26, 26, 26)";
        this.style.opacity = '.5';
    }
}