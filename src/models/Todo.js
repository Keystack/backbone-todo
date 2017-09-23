let Todo = Backbone.Model.extend({
	
  initialize : function(props){
  },

  defaults : function() {
    return {
      name: "New todo item",
      order : App.todos.nextOrder,
      complete: false
    };
  },

  toggle : function(){
  	this.set({
      complete:!this.get('complete')
    });
  }
});

let SpecialTodo = Todo.extend({
  
  defaults : function() {
    return {
      name: "Special todo Item",
      order : App.todos.nextOrder,
      complete: false
    };
  }
});