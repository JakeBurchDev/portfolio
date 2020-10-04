const views = {
    introduction: new View(
        'introduction',
        'orange',
        `<p>
            Hi, I'm Jake! I am an Indianapolis-based Full Stack Developer. 
            I'm passionate about Javascript and User Experience Design.
        </p>
        <br>
        <br>
        <p>
            I'd love to hear from you! 
            You can reach me at one of the links above.
        </p>`
    ),
    work: new View(
        'work',
        'pink',
        '<p>Hello there</p>'
    ),
    mystery: new View(
        'mystery',
        'blue',
        '<p>wee snaw</p>'
    )
};

views.introduction.display();

document.querySelectorAll('.navigation h3').forEach(sectionLink => {

sectionLink.addEventListener('click', event => {
        const section = event.currentTarget.getAttribute('data-section');
        views[section].display();
    });
});