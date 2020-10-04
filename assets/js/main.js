const views = {
    introduction: new View(
        'introduction',
        'orange',
        [
            new Tag(
                'p', 
                `Hi, I'm Jake! I am an Indianapolis-based Full Stack Developer. 
                I'm passionate about Javascript and User Experience Design.`
            ),
            new Tag('br', ''),
            new Tag('br', ''),
            new Tag(
                'p', 
                `I'd love to hear from you! 
                You can reach me at one of the links above.`
            )
        ]
    ),
    work: new View(
        'work',
        'pink',
        [
            new Tag(
                'p', 
                `Hello there!`
            )
        ]
    ),
    mystery: new View(
        'mystery',
        'blue',
        [
            new Tag(
                'p', 
                `Oi gigi`
            )
        ]
    )
};

views.introduction.display();

document.querySelectorAll('.navigation h3').forEach(sectionLink => {

sectionLink.addEventListener('click', event => {
        const section = event.currentTarget.getAttribute('data-section');
        views[section].display();
    });
});