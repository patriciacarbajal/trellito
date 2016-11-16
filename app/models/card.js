import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
	description: attr('string'),
	createdAt: attr('date'),

	list: belongsTo('list')
});