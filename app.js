(function () {
    'use strict';

    // Import
    let Menu = window.Menu;
    let Post = window.Post;

    let menuData = {
        items: [
            {url: 'https://github.com/', id: 'asd'},
            {url: 'https://habrahabr.ru/', id: 'gds'},
            {url: 'https://www.google.com/', id: 'laksdjf'},
            {url: 'http://tutorialzine.com/', id: 'asdvw'},
            {url: 'http://nano.sapegin.ru/', id: 'as123dvw'},
        ]
    };

    let menu = new Menu({
        menuData: menuData,
        menuContainer: document.querySelector('.js-main-menu'),
        menuTemplate: document.getElementById('menuTemplate'),
    });

    let post = new Post({
        source: menuData,
        input: document.getElementById('addMenuItemInput'),
        addButton: document.getElementById('addMenuItemButton'),
    });


    post.addButton.addEventListener('postChanged', function (event) {
        menu.render();
    });

    menu.menuContainer.addEventListener('deletePost', function (event) {
        post.deletePost(event.detail)
    });

    menu.menuContainer.addEventListener('savePost', function (event) {
        post.savePost(event.detail)
    });

})();
