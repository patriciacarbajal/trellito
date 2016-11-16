import Ember from 'ember';

export default Ember.Component.extend({
	formError: '',
	isEditingDescription: false,

	actions: {
		openModal() {
			this.set('modalOpen', true);
		},

		closeModal() {
			if (this.get('card.description') === '' || this.get('card.description') === undefined) {
				this.set('formError', 'Oops! Please give your card a description.');
				return;
			}
			this.set('formError', '');
			this.set('modalOpen', false);
		},
		toggleIsEditingDescription() {
			if (this.get('card.description') === '' || this.get('card.description') === undefined) {
				this.set('formError', 'Oops! Please give your card a description.');
				return;
			}
			this.set('formError', '');
			this.toggleProperty('isEditingDescription');
		},

		delete(cardId) {
			this.get('deleteCard')(cardId);
		}

	}
});
