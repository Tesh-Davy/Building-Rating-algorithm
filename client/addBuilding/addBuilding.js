Template.addBuildings.onRendered(function() {
  	GoogleMaps.load({key: 'AIzaSyC-o3gWc4wXZvMamAo5xBhtimaON8ASq78', libraries: 'geometry,places'});
});

Template.addBuildings.onCreated(function() {
    Session.set("ratingfoundation", null);
    Session.set("ratingfoundationbase", null);
    Session.set("ratingstriptype", null);
    Session.set("ratingringbeam", null);
    Session.set("ratingdewateringtype", null);
    Session.set("ratingsandtype", null);
    Session.set("ratingfloorslabtype", null);
    Session.set("ratinglinkelstype", null);
    Session.set("ratingironwallhoops", 3);
    Session.set("ratingwaterproofcement", 3);
    Session.set("ratingcuredwater", 1);
    Session.set("ratingdumpsite", 5);
    Session.set("ratingfoundationsteelgrade", null);
    Session.set("ratingcolumnsteelgrade", null);
    Session.set("ratingslabsteelgrade", null);
    Session.set("ratingstonetype", null);
    Session.set("ratingmortarbonds", null);
    Session.set("ratingironhoops", null);
    Session.set("ratingconcretegradefoundation", null);
    Session.set("ratingconcretegradegroundbeam", null);
    Session.set("ratingconcretegradeslab", null);
    Session.set("ratingconcretegradewater", null);
    Session.set("ratingwallbasethickness", null);
    Session.set("ratingwallbaseweight", null);
    Session.set("ratingrcbeams", null);
    Session.set("ratingrccolumns", null);
    Session.set("ratingWaterRatio", null);
    Session.set("ratingExpansionJoint", null);

    Bert.alert( 'add one', 'success', 'growl-bottom-right' );
    console.log("add")
});

var rating = 0

function getRealtimeRating(){
    var ratingfoundation = Session.get("ratingfoundation");
    var ratingfoundationbase = Session.get("ratingfoundationbase");
    var ratingstriptype = Session.get("ratingstriptype");
    var ratingringbeam = Session.get("ratingringbeam");
    var ratingdewateringtype = Session.get("ratingdewateringtype");
    var ratingsandtype = Session.get("ratingsandtype");
    var ratingfloorslabtype = Session.get("ratingfloorslabtype");
    var ratinglinkelstype = Session.get("ratinglinkelstype");
    var ratingironwallhoops = Session.get("ratingironwallhoops");
    var ratingwaterproofcement = Session.get("ratingwaterproofcement");
    var ratingcuredwater = Session.get("ratingcuredwater");
    var ratingdumpsite = Session.get("ratingdumpsite");
    var ratingfoundationsteelgrade = Session.get("ratingfoundationsteelgrade");
    var ratingcolumnsteelgrade = Session.get("ratingcolumnsteelgrade");
    var ratingslabsteelgrade = Session.get("ratingslabsteelgrade");
    var ratingstonetype = Session.get("ratingstonetype");
    var ratingmortarbonds = Session.get("ratingmortarbonds");
    var ratingironhoops = Session.get("ratingironhoops");
    var ratingconcretegradefoundation = Session.get("ratingconcretegradefoundation");
    var ratingconcretegradegroundbeam = Session.get("ratingconcretegradegroundbeam");
    var ratingconcretegradeslab = Session.get("ratingconcretegradeslab");
    var ratingconcretegradewater = Session.get("ratingconcretegradewater");
    var ratingwallbasethickness = Session.get("ratingwallbasethickness");
    var ratingwallbaseweight = Session.get("ratingwallbaseweight");
    var ratingrcbeams = Session.get("ratingrcbeams");
    var ratingrccolumns = Session.get("ratingrccolumns");
    var ratingWaterRatio = Session.get('ratingWaterRatio');
    var ratingExpansionJoint = Session.get('ratingExpansionJoint');


    rating = parseInt((ratingfoundation + ratingfoundationbase + ratingstriptype + ratingringbeam + ratingdewateringtype + ratingsandtype + ratingfloorslabtype + ratinglinkelstype + ratingironwallhoops + ratingwaterproofcement + ratingcuredwater + ratingdumpsite + ratingfoundationsteelgrade + ratingcolumnsteelgrade + ratingslabsteelgrade + ratingstonetype + ratingmortarbonds + ratingironhoops + ratingconcretegradefoundation + ratingconcretegradegroundbeam + ratingconcretegradeslab + ratingconcretegradewater + ratingwallbasethickness + ratingwallbaseweight + ratingrcbeams + ratingrccolumns + ratingWaterRatio + ratingExpansionJoint) / 28)


    if (rating == 1) {
        $('.two-star').removeClass('rated');
        $('.three-star').removeClass('rated');
        $('.four-star').removeClass('rated');
        $('.five-star').removeClass('rated');
    } else if (rating == 2) {
        $('.two-star').addClass('rated');
        $('.three-star').removeClass('rated');
        $('.four-star').removeClass('rated');
        $('.five-star').removeClass('rated');
    } else if (rating == 3) {
        $('.two-star').addClass('rated');
        $('.three-star').addClass('rated');
        $('.four-star').removeClass('rated');
        $('.five-star').removeClass('rated');
    } else if (rating == 4) {
        $('.two-star').addClass('rated');
        $('.three-star').addClass('rated');
        $('.four-star').addClass('rated');
        $('.five-star').removeClass('rated');
    } else if (rating == 5) {
        $('.two-star').addClass('rated');
        $('.three-star').addClass('rated');
        $('.four-star').addClass('rated');
        $('.five-star').addClass('rated');
    } else if (rating == null) {
        $('.two-star').removeClass('rated');
        $('.three-star').removeClass('rated');
        $('.four-star').removeClass('rated');
        $('.five-star').removeClass('rated');
    }

    document.getElementById("rating").value = rating;
}


Template.addBuildings.helpers({
	latestRating: function(){
		return(rating);
	}
});


Template.wetlandTemplate.events({
    "change .foundation": function(){
        var value = AutoForm.getFieldValue('wetlands.foundation', 'addBuildingForm');
        if (value == "deep") {
            Session.set("ratingfoundation", 5);
        } else if (value == "average") {
            Session.set("ratingfoundation", 3);
        } else if (value == "shallow") {
            Session.set("ratingfoundation", 2);
        } else {
            Session.set("ratingfoundation", null);
        }
        getRealtimeRating();
    },
    "change .foundation-base": function(){
        var value = AutoForm.getFieldValue('wetlands.foundationBase', 'addBuildingForm');
        if (value == "reinforcedBase") {
            Session.set("ratingfoundationbase", 5);
        } else if (value == "collumBases") {
            Session.set("ratingfoundationbase", 3);
        } else if (value == "nil") {
            Session.set("ratingfoundationbase", 2);
        } else {
            Session.set("ratingfoundationbase", null);
        }
        getRealtimeRating();
    },
    "change .strip-type": function(){
        var value = AutoForm.getFieldValue('wetlands.stripType', 'addBuildingForm');
        if (value == "reinforcedStrip") {
            Session.set("ratingstriptype", 5);
        } else if (value == "plainConcrete") {
            Session.set("ratingstriptype", 2);
        } else if (value == "nil") {
            Session.set("ratingstriptype", 3);
        } else {
            Session.set("ratingstriptype", null);
        }
        getRealtimeRating();
    },
    "change .ring-beam": function(){
        var value = AutoForm.getFieldValue('wetlands.ringBeamType', 'addBuildingForm');
        if (value == "groundLevelRingBeam") {
            Session.set("ratingringbeam", 5);
        } else if (value == "nil") {
            Session.set("ratingringbeam", 3);
        } else {
            Session.set("ratingringbeam", null);
        }
        getRealtimeRating();
    },
    "change .dewatering-type": function(){
        var value = AutoForm.getFieldValue('wetlands.dewateringType', 'addBuildingForm');
        if (value == "mechanical") {
            Session.set("ratingdewateringtype", 5);
        } else if (value == "natural") {
            Session.set("ratingdewateringtype", 3);
        } else if (value == "nil") {
            Session.set("ratingdewateringtype", 1);
        } else {
            Session.set("ratingdewateringtype", null);
        }
        getRealtimeRating();
    },
    "change .sand-type": function(){
        var value = AutoForm.getFieldValue('wetlands.sandType', 'addBuildingForm');
        if (value == "riverSand") {
            Session.set("ratingsandtype", 5);
        } else if (value == "soilSand") {
            Session.set("ratingsandtype", 2);
        } else {
            Session.set("ratingsandtype", null);
        }
        getRealtimeRating();
    },
    "change .floor-slab-type": function(){
        var value = AutoForm.getFieldValue('wetlands.floorSlabType', 'addBuildingForm');
        if (value == "raised") {
            Session.set("ratingfloorslabtype", 5);
        } else if (value == "groundLevel") {
            Session.set("ratingfloorslabtype", 2);
        } else if (value == "sunken") {
            Session.set("ratingfloorslabtype", 1);
        } else {
            Session.set("ratingfloorslabtype", null);
        }
        getRealtimeRating();
    },
    "change .linkels-type": function(){
        var value = AutoForm.getFieldValue('wetlands.linktelsType', 'addBuildingForm');
        if (value == "reinforcedLintels") {
            Session.set("ratinglinkelstype", 5);
        } else if (value == "shortLintels") {
            Session.set("ratinglinkelstype", 2);
        } else {
            Session.set("ratinglinkelstype", null);
        }
        getRealtimeRating();
    },
    "change .iron-wall-hoops": function(){
        var value = AutoForm.getFieldValue('wetlands.ironWallHoops', 'addBuildingForm');
        if (value) {
            Session.set("ratingironwallhoops", 5);
        } else {
            Session.set("ratingironwallhoops", 3);
        }
        getRealtimeRating();
    },
    "change .waterproof-cement": function(){
        var value = AutoForm.getFieldValue('wetlands.waterproofCement', 'addBuildingForm');
        if (value) {
            Session.set("ratingwaterproofcement", 5);
        } else {
            Session.set("ratingwaterproofcement", 3);
        }
        getRealtimeRating();
    },
    "change .cured-water": function(){
        var value = AutoForm.getFieldValue('wetlands.curedWater', 'addBuildingForm');
        if (value) {
            Session.set("ratingcuredwater", 5);
        } else {
            Session.set("ratingcuredwater", 1);
        }
        getRealtimeRating();
    },
    "change .dump-site": function(){
        var value = AutoForm.getFieldValue('wetlands.dumpSite', 'addBuildingForm');
        if (value) {
            Session.set("ratingdumpsite", 2);
        } else {
            Session.set("ratingdumpsite", 5);
        }
        getRealtimeRating();
    }
});


Template.steelGradeTemplate.events({
    "change .foundation-steel-grade": function(){
        var value = AutoForm.getFieldValue('steelGrade.foundationSteelGrade', 'addBuildingForm');
        if (value == "y25") {
            Session.set("ratingfoundationsteelgrade", 5);
        } else if (value == "y16") {
            Session.set("ratingfoundationsteelgrade", 3);
        } else if (value == "y10") {
            Session.set("ratingfoundationsteelgrade", 2);
        } else {
            Session.set("ratingfoundationsteelgrade", null);
        }
        getRealtimeRating();
    },
    "change .column-steel-grade": function(){
        var value = AutoForm.getFieldValue('steelGrade.columnsSteelGrade', 'addBuildingForm');
        if (value == "y16") {
            Session.set("ratingcolumnsteelgrade", 5);
        } else if (value == "y10") {
            Session.set("ratingcolumnsteelgrade", 2);
        } else if (value == "y8") {
            Session.set("ratingcolumnsteelgrade", 1);
        } else {
            Session.set("ratingcolumnsteelgrade", null);
        }
        getRealtimeRating();
    },
    "change .slab-steel-grade": function(){
        var value = AutoForm.getFieldValue('steelGrade.slabSteelGrade', 'addBuildingForm');
        if (value == "y12") {
            Session.set("ratingslabsteelgrade", 5);
        } else if (value == "y10") {
            Session.set("ratingslabsteelgrade", 4);
        } else if (value == "y8") {
            Session.set("ratingslabsteelgrade", 1);
        } else {
            Session.set("ratingslabsteelgrade", null);
        }
        getRealtimeRating();
    }
});


Template.wallingGradeTemplate.events({
    "change .stone-type": function(){
        var value = AutoForm.getFieldValue('wallingGrade.stoneType', 'addBuildingForm');
        if (value == "naturalStone") {
            Session.set("ratingstonetype", 5);
        } else if (value == "ndarughuStone") {
            Session.set("ratingstonetype", 3);
        } else if (value == "concreteBricks") {
            Session.set("ratingstonetype", 2);
        } else if (value == "ndarughuStoneAndConcreteBricks") {
            Session.set("ratingstonetype", 1);
        } else {
            Session.set("ratingstonetype", null);
        }
        getRealtimeRating();
    },
    "change .mortar-bonds": function(){
        var value = AutoForm.getFieldValue('wallingGrade.mortarBonds', 'addBuildingForm');
        if (value == "10mm") {
            Session.set("ratingmortarbonds", 5);
        } else if (value == "15mm") {
            Session.set("ratingmortarbonds", 3);
        } else if (value == "25mm") {
            Session.set("ratingmortarbonds", 2);
        } else if (value == "50mm") {
            Session.set("ratingmortarbonds", 1);
        } else {
            Session.set("ratingmortarbonds", null);
        }
        getRealtimeRating();
    },
    "change .iron-hoops": function(){
        var value = AutoForm.getFieldValue('wallingGrade.ironHoops', 'addBuildingForm');
        if (value == "38mm") {
            Session.set("ratingironhoops", 5);
        } else if (value == "20mm") {
            Session.set("ratingironhoops", 3);
        } else if (value == "10mm") {
            Session.set("ratingironhoops", 2);
        } else if (value == "barbedWire") {
            Session.set("ratingironhoops", 1);
        } else {
            Session.set("ratingironhoops", null);
        }
        getRealtimeRating();
    }
});


Template.concreteGradeTemplate.events({
    "change .concrete-grade-foundation": function(){
        var value = AutoForm.getFieldValue('concreteGrade.foundation', 'addBuildingForm');
        if (value == "1:3:6") {
            Session.set("ratingconcretegradefoundation", 5);
        } else if (value == "1:3:8") {
            Session.set("ratingconcretegradefoundation", 3);
        } else if (value == "1:4:8") {
            Session.set("ratingconcretegradefoundation", 2);
        } else {
            Session.set("ratingconcretegradefoundation", null);
        }
        getRealtimeRating();
    },
    "change .concrete-grade-ground-beam": function(){
        var value = AutoForm.getFieldValue('concreteGrade.groundBeam', 'addBuildingForm');
        if (value == "1:1:2") {
            Session.set("ratingconcretegradegroundbeam", 5);
        } else if (value == "1:1.5:3") {
            Session.set("ratingconcretegradegroundbeam", 3);
        } else if (value == "1:2:4") {
            Session.set("ratingconcretegradegroundbeam", 2);
        } else if (value == "1:3:6") {
            Session.set("ratingconcretegradegroundbeam", 1);
        } else {
            Session.set("ratingconcretegradegroundbeam", null);
        }
        getRealtimeRating();
    },
    "change .concrete-grade-slab": function(){
        var value = AutoForm.getFieldValue('concreteGrade.slab', 'addBuildingForm');
        if (value == "150mmVRC") {
            Session.set("ratingconcretegradeslab", 5);
        } else if (value == "150mmMCB") {
            Session.set("ratingconcretegradeslab", 2);
        } else if (value == "100mmMCB") {
            Session.set("ratingconcretegradeslab", 1);
        } else {
            Session.set("ratingconcretegradeslab", null);
        }
        getRealtimeRating();
    },
    "change .concrete-grade-water": function(){
        var value = AutoForm.getFieldValue('concreteGrade.water', 'addBuildingForm');
        if (value == "cleanDrinkingWater") {
            Session.set("ratingconcretegradewater", 5);
        } else if (value == "rainWater") {
            Session.set("ratingconcretegradewater", 3);
        } else if (value == "dirtySoapyWater") {
            Session.set("ratingconcretegradewater", 2);
        } else if (value == "floodWater") {
            Session.set("ratingconcretegradewater", 1);
        } else {
            Session.set("ratingconcretegradewater", null);
        }
        getRealtimeRating();
    }
});


Template.loadBearingWallsTemplate.events({
    "change .wall-base-thickness": function(){
        var value = AutoForm.getFieldValue('loadBearingWalls.wallBaseThickness', 'addBuildingForm');
        if (value == "thick") {
            Session.set("ratingwallbasethickness", 5);
        } else if (value == "notThick") {
            Session.set("ratingwallbasethickness", 1);
        } else {
            Session.set("ratingwallbasethickness", null);
        }
        getRealtimeRating();
    },
    "change .wall-base-weight": function(){
        var value = AutoForm.getFieldValue('loadBearingWalls.wallBaseWeight', 'addBuildingForm');
        if (value == "heavy") {
            Session.set("ratingwallbaseweight", 5);
        } else if (value == "lightAsTop") {
            Session.set("ratingwallbaseweight", 3);
        } else if (value == "lighterThanTop") {
            Session.set("ratingwallbaseweight", 2);
        } else {
            Session.set("ratingwallbaseweight", null);
        }
        getRealtimeRating();
    }
});


Template.nonLoadBearingWallsTemplate.events({
    "change .rc-beams": function(){
        var value = AutoForm.getFieldValue('nonLoadBearingWalls.rcBeams', 'addBuildingForm');
        var value2 = AutoForm.getFieldValue('nonLoadBearingWalls.rcColumns', 'addBuildingForm');
        if (value == "yes") {
            Session.set("ratingrcbeams", 5);
        } else if (value == "no") {
            Session.set("ratingrcbeams", 2);
        } else if (value == "no" && value2 == "no") {
            Session.set("ratingrcbeams", 1);
        } else {
            Session.set("ratingrcbeams", null);
        }
        getRealtimeRating();
    },
    "change .rc-columns": function(){
        var value = AutoForm.getFieldValue('nonLoadBearingWalls.rcColumns', 'addBuildingForm');
        var value2 = AutoForm.getFieldValue('nonLoadBearingWalls.rcBeams', 'addBuildingForm');
        if (value == "yes") {
            Session.set("ratingrccolumns", 5);
        } else if (value == "no") {
            Session.set("ratingrccolumns", 3);
        } else if (value == "no" && value2 == "no") {
            Session.set("ratingrccolumns", 1);
        } else {
            Session.set("ratingrccolumns", null);
        }
        getRealtimeRating();
    }
});


Template.waterRatioTemplate.events({
    "change .water-ratio": function(){
        var value = AutoForm.getFieldValue('waterRatio.waterRatio', 'addBuildingForm');
        if (value == "0.42") {
            Session.set("ratingWaterRatio", 5);
        } else if (value == "0.36") {
            Session.set("ratingWaterRatio", 3);
        } else if (value == "0.23") {
            Session.set("ratingWaterRatio", 2);
        } else {
            Session.set("ratingWaterRatio", null);
        }
        getRealtimeRating();
    }
});


Template.expansionJointsTemplate.events({
	'change .expansion-joints': function () {
        var value = AutoForm.getFieldValue('expansionJoints.expansionJoints', 'addBuildingForm');
        if (value == "nil"){
            Session.set("ratingExpansionJoint", 2);
        } else if (value == "approvedInternals") {
            Session.set("ratingExpansionJoint", 5);
        } else if (value == "spacedOut") {
            Session.set("ratingExpansionJoint", 3);
        } else {
            Session.set("ratingExpansionJoint", null);
        }
        var sessionVar = Session.get('ratingExpansionJoint');
        getRealtimeRating();
    }
});


AutoForm.addHooks(['addBuildingForm'], {
	onSuccess: function(operation, result, template) {
		FlowRouter.go('show');
        Bert.alert( 'Your building has been successfully added', 'success', 'growl-top-right' );
	}
});
