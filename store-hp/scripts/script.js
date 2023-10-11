
$('.conteiner-slider').slick({
    dots:true,
    arrows:false,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1
            }
        }]

});



const openModalButton = document.querySelector('#open-motal-1')
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

function mudarClasse(){
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}
openModalButton.addEventListener('click', ()=>{
    console.log('teste')
    mudarClasse()
})
closeModalButton.addEventListener('click',()=>{
    mudarClasse()
})