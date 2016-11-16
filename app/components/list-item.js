import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	isEditingName: false,
	isAddingCard: false,
	newCardDescription: '',

	actions: {
		addCard() {
			if (this.get('newCardDescription') === '') {
				this.set('list.errors.cardError', 'Oops! Please give your card a description.')
				return;
			}

			this.get('list.cards').push( { 
				id: this.get('list.cards').length + 1,
				list_id: this.get('list').id,
				description: this.get('newCardDescription')
			});
			this.toggleProperty('isAddingCard');
			this.set('newCardDescription', '');
			this.set('list.errors.cardError', '');
			this.rerender();
		},
		
		toggleIsEditingName() {
			if (this.get('list.name') === '' || this.get('list.name') === undefined) {
				this.set('list.errors.listError', 'Oops! Please name your list.')
				return;
			}
			this.set('list.errors.listError', '')
			this.toggleProperty('isEditingName');
		},

		toggleIsAddingCard() {
			this.toggleProperty('isAddingCard');
		},

		deleteCard(cardId) {
			this.set('list.cards',  this.get('list.cards').filter(card => cardId !== card.id));
			this.rerender();
		}
	}
});
