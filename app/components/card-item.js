import Ember from 'ember';

export default Ember.Component.extend({
	modalOpen: false,

	actions: {
		toggleModalOpen() {
			this.toggleProperty('modalOpen');
		},
		deleteCard(cardId) {
			this.get('deleteCard')(cardId);
		}
	}
});
