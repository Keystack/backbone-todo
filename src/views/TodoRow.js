var TodoRow = Backbone.View.extend({

  tagName: "li",

  className: "todo-row",

  events: {
    "click .button.delete" :   "onDelete",
    "click .button.complete" : "onToggle"
  },

  onDelete : function(){ },

  onToggle : function(){ },

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
  }
});

// <li class="todo-row">
//   <span class="icon">icon</span>
//   <span class="button complete">edit</span>
//   <span class="button delete">delete</span>
// </li>