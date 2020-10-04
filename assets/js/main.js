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
                'h3', 
                `Ascensus`
            ),
            new Tag(
                'p',
                `At Ascensus, I contribute to the maintenance and development 
                of web and mobile applications using technologies such as 
                Angular, .NET Core, SQL Server, and more.`
            ),
            new Tag('br', ''),
            new Tag('br', ''),
            new Tag(
                'h3',
                'Butler University Executive Education'
            ),
            new Tag(
                'p',
                `At Butler University, I teach a Full Stack Web Development bootcamp 
                in which students learn cutting edge web development technologies
                such as ES6 Javascript, React, MongoDB, Express.js, Node.JS, MySQL, and more.`
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
        if(!document.querySelector('.navigation').classList.contains('disabled')) {
            const section = event.currentTarget.getAttribute('data-section');
            views[section].display();
        }
    });
});