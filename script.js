const selectElement = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
// const textToChanged = document.getElementById('text-to-changed');
// const labels = document.querySelectorAll('label');
// const options = document.querySelectorAll('option');

selectElement.addEventListener('change', function() {
    switch(true){
        case this.value ==='uranus': registrationImage.src = "./Assets/icons/Uran.svg"; 
        break;
        case this.value ==='mercury': registrationImage.src = "./Assets/icons/Mercury(icon).svg"; 
        break;
        //default: dancingBoy(this);
    }
})

// function dancingBoy(element) {
//     registrationImage.src = "./Assets/icons/Ricardo.png";
//     textToChanged.innerText = "для пошуку партнера";
//     labels[2].innerText = "Ваш партнер на танці";
//     options[element.selectedIndex].innerText = "Рікардо Мілос";
//     document.body.style.backgroundImage = "url(./Assets/icons/DiscoHall.jpg)";


// }

