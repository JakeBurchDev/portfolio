class View {
    constructor(sectionName, colorTheme, contentArray) {
        this.sectionName = sectionName;
        this.colorTheme = colorTheme;
        this.content = contentArray;
    }

    display() {
        document.querySelector('.navigation').classList.add('disabled');
        document.querySelector('.screen-content').innerHTML = '';
        document.querySelector('body').className = `use-${this.colorTheme}`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`[data-section="${this.sectionName}"]`).classList.add('active');

        this.printTagArray(0);
    }

    printTagArray(contentIndex) {
        return new Promise(resolve => {
            const tagArray = this.content[contentIndex];
            let currentTagIndex = 0;
    
            const printNextTag = () => {
                this.printTag(tagArray[currentTagIndex]).then(() => {
                    currentTagIndex++;
                    if(tagArray.length > currentTagIndex) {
                        printNextTag();
                    } else {
                        document.querySelector('.navigation').classList.remove('disabled');
                        resolve();
                    }
                })
            }
    
            printNextTag();
        });
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