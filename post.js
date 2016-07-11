(function () {
    'use strict';

    class Post {
        constructor(options) {
            this.source = options.source;
            this.input = options.input;
            this.addButton = options.addButton;
            this._initEvents();
        }

        _initEvents() {
            this.addButton.addEventListener('click', this._addPost.bind(this));
        }

        _addPost() {
            // Для ID генерируем строку
            let uniqueId = Math.random().toString(36).substr(2, 9);
            this.source.items.push({url: this.input.value, id: uniqueId});
            this.trigger('postChanged');
        }

        deletePost(data) {
            delete this.source.items[this.findObjectNumber(data.postId)];
            this.trigger('postChanged');
        }

        savePost(data) {
            this.source.items[this.findObjectNumber(data.postId)].url = data.changedUrlValue;
            this.trigger('postChanged');
        }

        findObjectNumber(postId) {
            // Перебираем объект и возвращаем номер в объекте который совпал
            for (let i in  this.source.items) {
                if (this.source.items[i].id == postId) {
                    console.log('Delete ', this.source.items[i], i);
                    return i;
                }
            }
        }

        /**
         * Сообщение миру о случившемся
         * @param {string} name тип события
         * @param {Object} data объект события
         */
        trigger(name) {
            let widgetEvent = new CustomEvent(name);
            this.addButton.dispatchEvent(widgetEvent);
        }


    }

    // Export
    window.Post = Post;

})();