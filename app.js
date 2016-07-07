'use stict';


let menuData = {
    items: [
        { url: 'https://github.com/', id: 'asd' },
        { url: 'https://habrahabr.ru/', id: 'gds' },
        { url: 'https://www.google.com/', id: 'laksdjf' },
        { url: 'http://tutorialzine.com/', id: 'asdvw' },
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
