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
        console.log(this.source);
        menu.render();
    }

    deletePost() {
        delete this.source.items[this.findObjectNumber()];
        menu.render();
    }

    findObjectNumber() {
        // Перебираем объект и возвращаем номер в объекте который совпал
        for (let i in  this.source.items) {
            if (this.source.items[i].id == event.target.id) {
                console.log('Delete ', this.source.items[i], i);
                return i;
            }
        }
    }


}