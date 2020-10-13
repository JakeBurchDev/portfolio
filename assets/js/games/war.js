class War {
    constructor() {

    }

    start() {
        View.printTagArray([
            new Tag('p', 'I don\'t think that\'s a good idea.')
        ]);

        setTimeout(() => {
            views.mystery.display();
        }, 3000);
    }
}