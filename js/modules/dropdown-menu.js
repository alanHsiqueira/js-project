export default function initDropdownMenu (){

}

const dropDownMenus = document.querySelectorAll('[data-dropdown]');

dropDownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach(userEvent =>{ menu.addEventListener('click', handleClick);
  })
})

function handleClick (event) { 
  console.log(event); 
  event.preventDefault();
  this.classList.toggle('active'); 
}