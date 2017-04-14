'use strict';
var self = this;
var api = self.opts;
self.items = [];

//function isn't being called

self.add = function (e) {
    var title = self.todo.value;
    console.log("test", e);

    api.create(title, function (err, xhr, todo) {
        if (xhr.status === 201) {
            self.todo.value = '';
            self.items.push(todo);
            self.update();
        }
    });
};
