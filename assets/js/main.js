views.introduction.display();

document.addEventListener('click', event => {
    // pretty ugly, but this way I can switch instead of doing endless if/else
    event.target.classList.forEach(targetClass => {
        if([
            'game-tic-tac-toe', 
            'game-janken', 
            'game-war'
        ].includes(targetClass)) {
            views.mystery.gameManager = new GameManager();
            views.mystery.gameManager.init(targetClass);
        }
    });
});

document.querySelectorAll('.navigation h3').forEach(sectionLink => {
    sectionLink.addEventListener('click', event => {
        if(!document.querySelector('.navigation').classList.contains('disabled')) {
            const section = event.currentTarget.getAttribute('data-section');
            views[section].display();
        }
    });
});