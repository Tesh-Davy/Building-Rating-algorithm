// AUCTIONS
Meteor.publish('buildings', function(){
	return Buildings.find();
});
Meteor.publish('buildingImages', function(){
    return BuildingImages.find();
});
Meteor.publish('singleBuilding', function(id){
  check(id, String);
  return Buildings.find({_id: id});
});


Meteor.publish( 'buildingSearch', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );

  let query      = {},
      projection = { limit: 10, sort: { name: 1 } };

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { name: regex },
        { _id: regex }
      ]
    };

    projection.limit = 100;
  }

  return Buildings.find( query, projection );
});
