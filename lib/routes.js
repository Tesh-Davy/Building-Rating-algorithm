FlowRouter.route('/', {
	name: 'show',
	action(){
		BlazeLayout.render('layout', { main: 'showBuildings' });
	}
});

FlowRouter.route('/add', {
	name: 'add',
	action(){
		BlazeLayout.render('layout', { main: 'addBuildings' });
	}
});

FlowRouter.route('/building/:id', {
	name: 'single-building',
	action(){
		BlazeLayout.render('layout', { main: 'showBuildingDetail' });
	}
});
