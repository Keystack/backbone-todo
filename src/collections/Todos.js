let Todos = Backbone.Collection.extend({
	model : Todo, 
    
    comparator : 'order',

	done: function() {
      return this.where({complete: true});
    },

    remaining: function() {
      return this.where({complete: false});
    },

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    }
});