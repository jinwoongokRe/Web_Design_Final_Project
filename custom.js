const DonationButton = document.querySelectorAll('button[type="button"].click-button');


DonationButton.forEach(function(button,index) {
    button.addEventListener('click', e=> {
    console.log("button test" + (index+1));
    button.classList.toggle('clicked');

    activation(index, DonationButton);
    

});
});


function activation(index, list) {
    for(let el of list){
        el.classList.remove("clicked");
    }
    list[index].classList.add("clicked");
    list[index].classList.add("on");
}