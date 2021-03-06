Template.showBuildings.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('buildingImages');
	});

	let template = Template.instance();

	template.searchQuery = new ReactiveVar();
	template.searching   = new ReactiveVar( false );

	template.autorun( () => {
		template.subscribe( 'buildingSearch', template.searchQuery.get(), () => {
			setTimeout( () => {
				template.searching.set( false );
			}, 300 );
		});
	});
});

Template.showBuildings.helpers({
	searching() {
		return Template.instance().searching.get();
	},
	query() {
		return Template.instance().searchQuery.get();
	},
	buildings: ()=> {
		return Buildings.find().fetch().reverse();
	}
});

Template.showBuildings.events({
  'keyup .searchbox' ( event, template ) {
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});
