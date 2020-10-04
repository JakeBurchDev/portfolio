class View {
    constructor(sectionName, colorTheme, content) {
        this.sectionName = sectionName;
        this.colorTheme = colorTheme;
        this.content = content;
    }

    display() {
        document.querySelector('.screen-content').innerHTML = this.content;
        document.querySelector('body').className = `use-${this.colorTheme}`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`[data-section="${this.sectionName}"]`).classList.add('active');
    }
    
}