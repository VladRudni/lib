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
    }
}



