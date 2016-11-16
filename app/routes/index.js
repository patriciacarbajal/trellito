import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	return [
    		{
    			id: 1,
    			name: 'Default List',
                createdAt: Date.now(),
    			cards: [
    				{
	    				id: 1,
	    				description: 'Card 1',
	    				list_id: 1
	    			},
	    			{
	    				id: 2,
	    				description: 'Card 2',
	    				list_id: 1
	    			}
    			],
    			errors: {
    				listError: '',
    				cardError: ''
    			}
    		}
    	];
    }
});