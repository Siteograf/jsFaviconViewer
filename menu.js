(function () {
    'use strict';

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

            if (event.target.classList.contains('titleText')) {
                this._onItemClick(event);
            }

            if (event.target.classList.contains('delete')) {
                this.trigger('deletePost', {
                    postId: event.target.id,
                });
            }

            if (event.target.classList.contains('saveButton')) {
                this._saveItem();
            }


        }

        _onItemClick(event) {
            console.log('Click on item', event.target);

            let titleContainer = event.target.parentNode;

            if (!titleContainer.classList.contains('inputInside')) {

                titleContainer.classList.add('inputInside');
                let title = titleContainer.querySelector('span');
                let titleText = title.innerHTML;
                title.style.display = 'none';

                // Compile the template
                let theTemplate = Handlebars.compile(editTitleTemplate.innerHTML);
                // Add the compiled html to the page
                titleContainer.innerHTML = theTemplate({title: titleText});
            }
        // titleContainer.classList.remove("title");
        }

        _saveItem() {
            let postId = event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('itemId');
            let changedUrlValue = event.target.parentNode.previousElementSibling.value;

            this.trigger('savePost', {
                postId: postId,
                changedUrlValue: changedUrlValue,
            });

        }

        _onCloseItemClick(event) {
            event.target.parentNode.style.display = 'none';
            console.log('CLOSE', event.target);
        }

        /**
         * Сообщение миру о случившемся
         * @param {string} name тип события
         * @param {Object} data объект события
         */
        trigger(name, data) {
            let widgetEvent = new CustomEvent(name, {
                detail: data
            });

            this.menuContainer.dispatchEvent(widgetEvent);
        }


    }

    // Export
    window.Menu = Menu;

})();