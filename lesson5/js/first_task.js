let now = new Date();

let iDocument = {
    title: 'document title',
    body: 'document body',
    footer: 'document footer',
    date: 'document date',
    app: {
        appTitle: 'app title',
        appBody: 'app body',
        appFooter: 'app footer',
        appDate: 'app date',
    },

};

addText = function adding() {
    iDocument.app.appTitle = prompt('Введите название для заголовка');
    this.appBody = prompt('Введите произвольный текст для наполнения');
    this.appFooter = prompt('Введите текст для поля footer');
    this.appDate = (now);
};

addText();

readText = function reading() {
    document.write('Заголовок : ' + iDocument.app.appTitle + '.' + '<br />');
    document.write('Основной текст : ' + this.appBody + '.' + '<br />');
    document.write('Footer : ' + this.appFooter + '.' + '<br />');
    document.write(this.appDate);
};

readText(); 