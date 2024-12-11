function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const hiddenContent = this.querySelector('.hidden');
        
        if (hiddenContent) {
            hiddenContent.classList.toggle('hidden');
            hiddenContent.classList.toggle('opacity-0');  
            hiddenContent.classList.toggle('max-h-0');   
            
            e.target.textContent = hiddenContent.classList.contains('hidden') ? 
                'Scopri di più' : 'Mostra meno';
        }
    }
});

