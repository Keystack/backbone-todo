

/**
  *
  *
  *
  */

let Todo = Backbone.Model.extend({
	initialize : function(props){
		console.log(props);
		console.log(this);
	},

	defaults : function() {
      return {
        title: "New Todo item",
        complete: false
      };
    },

    toggle : function(){
    	this.set({complete:!this.get('complete')});
    }
});


