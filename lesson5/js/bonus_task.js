let manager = {
    name: 'Gary',
    lastname: 'Fisher',
    age: 31,
    sex: 'male',
    id: '№ 000056'
}

document.write(manager.name + ' ' + manager.lastname + ' ' + manager.age + 'y.o <br>');

let secretary = new Object();
secretary.name = 'Jenny';
secretary.lastname = 'Oakland';
secretary.age = 25;
secretary.hometown = 'New Jersey';
secretary.hobby = 'photography';
secretary.print = function () {
    document.write(secretary.name + ' ' + secretary.lastname + ' ' + secretary.age + 'y.o <br>')
};
secretary.print();