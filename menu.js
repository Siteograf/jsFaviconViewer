class Menu {
    constructor(options) {
        this.menuData = options.menuData;
        this.menuContainer = options.menuContainer;
        this.menuTemplate = options.menuTemplate;
        this._initEvents();
        this._buildMenu();
    }

    render() {
        this._buildMenu();
    }

    _buildMenu() {
        // Compile the template
        let theTemplate = Handlebars.compile(this.menuTemplate.innerHTML);

        // Add the compiled html to the page
        this.menuContainer.innerHTML = theTemplate(this.menuData);
    }

    _initEvents() {
        this.menuContainer.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
        if (event.target.classList.contains('menu__item')) {
            this._onItemClick(event);
        }

        if (event.target.classList.contains('delete')) {

            post.deletePost();

            // this._onCloseItemClick(event);
        }


    }

    _onItemClick(event) {
        console.log('Click on item', event.target);
    }

    _onCloseItemClick(event) {
        event.target.parentNode.style.display = 'none';
        console.log('CLOSE', event.target);
    }


}