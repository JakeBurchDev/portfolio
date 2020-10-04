class View {
    constructor(sectionName, colorTheme, content) {
        this.sectionName = sectionName;
        this.colorTheme = colorTheme;
        this.content = content;
    }

    display() {
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
            }, 10);
        });
    }
}

class Tag {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
}