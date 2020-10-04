class View {
    constructor(sectionName, colorTheme, content) {
        this.sectionName = sectionName;
        this.colorTheme = colorTheme;
        this.content = content;
    }

    display() {
        document.querySelector('.navigation').classList.add('disabled');
        document.querySelector('.screen-content').innerHTML = '';
        document.querySelector('body').className = `use-${this.colorTheme}`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`[data-section="${this.sectionName}"]`).classList.add('active');
    
        let currentTagIndex = 0;

        const printNextTag = () => {
            this.printTag(this.content[currentTagIndex]).then(() => {
                currentTagIndex++;
                if(this.content.length > currentTagIndex) {
                    printNextTag();
                } else {
                    document.querySelector('.navigation').classList.remove('disabled');
                }
            })
        }

        printNextTag();
    }

    printTag(tag) {
        return new Promise(resolve => {
            const screenContent = document.querySelector('.screen-content');
            const characters = tag.content.split('');
            const tagElement = document.createElement(tag.type);
    
            tagElement.className = tag.classes;
            screenContent.appendChild(tagElement);
    
            let charactersIndex = 0;
    
            const characterInterval = setInterval(() => {
                if(charactersIndex === characters.length) {
                    clearInterval(characterInterval);
                    resolve();
                } else {
                    tagElement.innerHTML += characters[charactersIndex];
                    charactersIndex++;
                }
            }, 7);
        });
    }
}

class Tag {
    constructor(type, content, classes) {
        this.type = type;
        this.content = content;
        this.classes = classes ?? '';
    }
}