import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addList() {
			this.get('listItems').push({ 
				id: this.get('listItems').length + 1,
				name: 'Edit list name',
				cards: [],
				errors: {
    				listError: '',
    				cardError: ''
    			}
    		});
			this.rerender();
		}
	}
});