App = (function(){

	let app = {};
	
	app.todos = new Todos();

	return app;
})();


App.todos.add({id:'1',name:'run'});
App.todos.add({id:'2',name:'play'});
App.todos.add({id:'3',name:'read'});

console.log(App.todos.pluck('name'))


