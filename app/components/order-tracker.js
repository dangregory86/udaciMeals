import Component from '@ember/component';

export default Component.extend({
  orderManager: Ember.inject.service('order-manager'),
  actions: {
    setDayTo(day){
      this.get('orderManager').setSelectedDayTo(day);
    },
    remove(day, menuCategory){
      this.get('orderManager').removeMenuOption(day, menuCategory);
    }
  }
});
