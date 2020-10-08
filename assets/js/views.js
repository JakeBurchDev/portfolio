const views = {
    introduction: new View(
        'introduction',
        'orange',
        [[
            new Tag(
                'h3',
                `Hi, I'm Jake!`
            ),
            new Tag(
                'p', 
                `I am an Indianapolis-based Full Stack Developer. 
                I'm passionate about Javascript and User Experience Design.`
            ),
            new Tag(
                'p', 
                `I'd love to hear from you! 
                You can reach me at one of the links above.`
            )
        ]]
    ),
    work: new View(
        'work',
        'pink',
        [[
            new Tag('h3', 'Ascensus'),
            new Tag(
                'p',
                `At Ascensus, I contribute to the maintenance and development 
                of web and mobile applications using technologies such as 
                Angular, .NET Core, SQL Server, and more.`
            ),
            new Tag(
                'h3',
                'Butler University Executive Education'
            ),
            new Tag(
                'p',
                `At Butler University, I teach a Full Stack Web Development bootcamp 
                in which students learn cutting edge web development technologies
                such as ES6 Javascript, React, MongoDB, Express, Node, MySQL, and more.`
            )
        ]]
    ),
    mystery: new View(
        'mystery',
        'blue',
        [[
            new Tag('h3', 'Shall we play a game?'),
            new Tag('p', 'Tic-Tac-Toe', 'prompt-option game-tic-tac-toe'),
            new Tag('p', 'Janken', 'prompt-option game-janken'),
            new Tag('p', 'Global Thermonuclear War', 'prompt-option game-war'),
            new Tag('div', '', 'game-container'),
        ],
        [
            new Tag('h3', 'You are victorious!'),
            new Tag('p', 'Must have cheated.')
        ],
        [
            new Tag('h3', 'You have been defeated!'),
            new Tag('p', 'How embarassing for you.')
        ],
        [
            new Tag('h3', 'Tic Tac Toe!'),
            new Tag('p', 'You be x.')
        ]]
    )
};