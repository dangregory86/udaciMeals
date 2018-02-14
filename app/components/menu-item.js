import Component from '@ember/component';

export default Component.extend({
  orderManager: Ember.inject.service('order-manager'),
  classNames: ['menu-item', 'list-inline-item'],
  tagName: 'li',
  mealCatagory: 'breakfast',
  actions: {
    changeCatagory(category){
      this.set('mealCatagory', category);
    },
    chooseItem(menuItemName){
      this.get('orderManager').chooseMenuOption(this.get('mealCatagory'), menuItemName);
    }
  }
});
