let heartContainer = document.querySelectorAll('.heart-container')

heartContainer.forEach(container => {
    let heart = container.querySelector('i');

    container.addEventListener('mouseenter', () => {
        heart.classList.remove('fa-regular')
        heart.classList.add('fa-solid')
        heart.style.color = '#ff7f50';
    });
    
    container.addEventListener('mouseleave', () => {
        heart.classList.remove('fa-solid')
        heart.classList.add('fa-regular')
        heart.style.color = '#333';
    
    });
})