class Popup {
    constructor(className = '', params = {}) {
        this.className = className;
        this.params = params;
        this.popupElement = document.querySelector(this.className);
        this.popupContent = document.createElement('div');

        if (this.popupElement) {
            this.popupElement.classList.add('libPopup');
            this.createPopupContent();
            this.addCloseEventListener();
            this.addOutsideClickListener();
            // 
            if (this.params.active === true) {
                this.show()
            }
        }


    }

    createPopupContent() {
        this.popupContent.classList.add('libPopupContent');

        while (this.popupElement.firstChild) {
            this.popupContent.appendChild(this.popupElement.firstChild);
        }

        this.popupElement.appendChild(this.popupContent);
    }

    addCloseEventListener() {
        const closeElement = document.querySelector(this.params.close);
        if (closeElement) {
            closeElement.addEventListener('click', () => {
                this.closePopup();
            });
        }


    }


    addOutsideClickListener() {
        if (!this.params.clickOnclose)
            document.addEventListener('click', (event) => {
                if (event.target === this.popupElement) {
                    this.closePopup();
                }
            })
    }

    closePopup() {
        this.popupElement.style.display = 'none';
    }
    show() {
        this.popupElement.style.display = 'block';
        // animations
        if (this.params.animation === 'left') {
            this.popupContent.classList.add('libPopup-animation');
        }

    }
}


