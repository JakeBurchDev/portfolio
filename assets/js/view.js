class View {
    constructor(sectionName, colorTheme, contentArray) {
        this.sectionName = sectionName;
        this.colorTheme = colorTheme;
        this.content = contentArray;
    }

    display() {
        View.clearScreen();
        document.querySelector('.navigation').classList.add('disabled');
        document.querySelector('body').className = `use-${this.colorTheme}`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`[data-section="${this.sectionName}"]`).classList.add('active');

        this.printViewTagArray(0);
    }

    printViewTagArray(contentIndex) {
        return new Promise(resolve => {
            const tagArray = this.content[contentIndex];
            View.printTagArray(tagArray).then(() => resolve());
        });
    }

    static printTagArray(tagArray) {
        return new Promise(resolve => {
            let currentTagIndex = 0;
    
            const printNextTag = () => {
                View.printTag(tagArray[currentTagIndex]).then(() => {
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

    static printTag(tag) {
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

    static clearScreen() {
        document.querySelector('.screen-content').innerHTML = '';
    }
}

class Tag {
    constructor(type, content, classes) {
        this.type = type;
        this.content = content;
        this.classes = classes != null ? classes : '';
    }
}