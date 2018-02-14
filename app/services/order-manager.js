import Service from '@ember/service';

export default Service.extend({
  selectedDay: 'Monday',
  menuSelection: {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {}
  },

  setSelectedDayTo(day){
    this.set('selectedDay', day);
  },
  chooseMenuOption(mealCatagory, menuItemName){
    this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCatagory, menuItemName);
  },
  removeMenuOption(day, mealCatagory){
    this.set('menuSelection.' + day + '.' + mealCatagory, '')
  }
});
