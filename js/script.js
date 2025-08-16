// BUTTON AND DROPDOWN ELEMENTS 
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

// LISTEN FOR DROPDOWN CLICK 
dropdownButton.addEventListener('click', () => {
    // TOGGLE DROPDOWN VISIBILITY 
    dropdownContent.style.display - dropdownContent.style.display === 'block' ? 'none' : 'block';
})

// CLOSE DROPDOWN IF CLICKS AWAY 
window.addEventListener('click', (event) => {
    if (!event.target.matches('dropdown button')) {
    //   CLOSE DROPDOWN UPON OUTSIDE CLICK 
        dropdownContent.style.display = 'none';
    }
});