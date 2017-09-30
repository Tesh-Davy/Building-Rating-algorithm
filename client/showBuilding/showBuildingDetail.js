Template.showBuildingDetail.onRendered(function() {
  	GoogleMaps.load({key: 'AIzaSyC-o3gWc4wXZvMamAo5xBhtimaON8ASq78', libraries: 'geometry,places'});
});

Template.showBuildingDetail.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleBuilding', id);
		self.subscribe('buildingImages');
	});
	GoogleMaps.ready('buildingLocation', function(map) {
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
	});
});

Template.showBuildingDetail.helpers({
    building: ()=> {
		var id = FlowRouter.getParam('id');
		return Buildings.findOne({_id: id});
	},
    showBuildingMap: function() {
		var id = FlowRouter.getParam('id');
		var lat = Buildings.findOne({_id: id}).location.lat;
		var lng = Buildings.findOne({_id: id}).location.lng;
	    if (GoogleMaps.loaded()) {
			return {
				center: new google.maps.LatLng(lat, lng),
				zoom: 13
			};
	    }
	},
    wetlandsfoundation: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.foundation;
        if (data =="deep"){
            return("deep foundation");
        } else if (data =="average"){
            return("average foundation");
        } else if (data =="shallow"){
            return("shallow foundation");
        }
    },
    wetlandsfoundationBase: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.foundationBase;
        if (data =="reinforcedBase"){
            return("reinforced foundation base");
        } else if (data =="collumBases"){
            return("collum base");
        } else if (data =="nil"){
            return("no foundation base");
        }
    },
    wetlandsstripType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.stripType;
        if (data =="reinforcedStrip"){
            return("reinforced strip");
        } else if (data =="plainConcrete"){
            return("plain concrete strip");
        } else if (data =="nil"){
            return("no strip");
        }
    },
    wetlandsringBeamType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.ringBeamType;
        if (data =="groundLevelRingBeam"){
            return("ground level ring beam");
        } else if (data =="nil"){
            return("no ground level ring beam");
        }
    },
    wetlandsdewateringType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.dewateringType;
        if (data =="mechanical"){
            return("mechanical dewatering");
        } else if (data =="natural"){
            return("natural dewatering");
        } else if (data =="nil"){
            return("no dewatering");
        }
    },
    wetlandssandType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.sandType;
        if (data =="riverSand"){
            return("river sand");
        } else if (data =="soilSand"){
            return("ordinary soil sand");
        }
    },
    wetlandsfloorSlabType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.floorSlabType;
        if (data =="raised"){
            return("raised floor slab");
        } else if (data =="groundLevel"){
            return("floor slab on ground level");
        } else if (data =="sunken"){
            return("sunken floor slab");
        }
    },
    wetlandslinktelsType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wetlands.linktelsType;
        if (data =="reinforcedLintels"){
            return("reinforced (through)lintels and beams");
        } else if (data =="shortLintels"){
            return("short linktels");
        }
    },




    steelGradefoundationSteelGrade: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).steelGrade.foundationSteelGrade;
        if (data == "y25"){
            return("foundation steel grade of y25: 3.85kg/m");
        } else if (data == "y16"){
            return("foundation steel grade of y16: 1.58kg/m");
        } else if (data == "y10"){
            return("foundation steel grade of y10: 0.62kg/m");
        }
    },
    steelGradecolumnsSteelGrade: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).steelGrade.columnsSteelGrade;
        if (data == "y16"){
            return("columns' steel grade of y16: 1.58kg/m");
        } else if (data == "y10"){
            return("columns' steel grade of y10: 0.62kg/m");
        } else if (data == "y8"){
            return("columns' steel grade of 8: 0.48kg/m");
        }
    },
    steelGradeslabSteelGrade: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).steelGrade.slabSteelGrade;
        if (data == "y12"){
            return("slab steel grade of y12: 0.88kg/m");
        } else if (data == "y10"){
            return("slab steel grade of y10: 0.62kg/m");
        } else if (data == "y8"){
            return("slab steel grade of 8: 0.48kg/m");
        }
    },
    wallingGradestoneType: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wallingGrade.stoneType;
        if (data == "naturalStone"){
            return("natural stone");
        } else if (data == "ndarughuStone"){
            return("ndarughu stone");
        } else if (data == "concreteBricks"){
            return("concrete bricks");
        } else if (data == "ndarughuStoneAndConcreteBricks"){
            return("ndarughu stone and concrete bricks");
        }
    },
    wallingGrademortarBonds: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wallingGrade.mortarBonds;
        if (data == "10mm"){
            return("10mm thick mortar bonds");
        } else if (data == "15mm"){
            return("15mm thick mortar bonds");
        } else if (data == "25mm"){
            return("25mm thick mortar bonds");
        } else if (data == "50mm"){
            return("50mm thick mortar bonds");
        }
    },
    wallingGradeironHoops: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).wallingGrade.ironHoops;
        if (data == "38mm"){
            return("38mm wide hoop irons at alternate locations");
        } else if (data == "20mm"){
            return("20mm wide hoop irons");
        } else if (data == "10mm"){
            return("10mm wide hoop irons");
        } else if (data == "barbedWire"){
            return("barbed wire");
        }
    },
    concreteGradefoundation: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).concreteGrade.foundation;
        if (data == "1:3:6"){
            return("fondation's concrete grade of 1:3:6 classQ");
        } else if (data == "1:3:8"){
            return("fondation's concrete grade of 1:3:8");
        } else if (data == "1:4:8"){
            return("fondation's concrete grade of 1:4:8");
        }
    },
    concreteGradegroundBeam: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).concreteGrade.groundBeam;
        if (data == "1:1:2"){
            return("vibrated reinforced concrete. class 30/20 mm (1:1:2");
        } else if (data == "1:1.5:2"){
            return("vibrated reinforced concrete. class 25/20 mm (1:1.5:2");
        } else if (data == "1:2:4"){
            return("vibrated reinforced concrete. class 20/20 mm (1:2:4");
        } else if (data == "1:3:6"){
            return("hand packed. Not classified (1:3:6)");
        }
    },
    concreteGradeslab: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).concreteGrade.slab;
        if (data == "150mmVRC"){
            return("150mm thick vibrated reinforced concrete");
        } else if (data == "150mmMCB"){
            return("150mm thick mass concrete in bars");
        } else if (data == "100mmMCB"){
            return("100mm thick mass concrete in bars");
        }
    },
    concreteGradewater: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).concreteGrade.water;
        if (data == "cleanDrinkingWater"){
            return("clean drinking water");
        } else if (data == "rainWater"){
            return("rain water | salty water");
        } else if (data == "dirtySoapyWater"){
            return("dirty or soapy water");
        } else if (data == "floodWater"){
            return("flood water | salty water");
        }
    },
    loadBearingWallswallBaseThickness: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).loadBearingWalls.wallBaseThickness;
        if (data == "thick"){
            return("thick at base");
        } else if (data == "notThick"){
            return("not thick at base");
        }
    },
    loadBearingWallswallBaseWeight: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).loadBearingWalls.wallBaseWeight;
        if (data == "heavy"){
            return("heavy at base");
        } else if (data == "lightAsTop"){
            return("light as the top");
        } else if (data == "lighterThanTop"){
            return("lighter than the top");
        }
    },
    nonLoadBearingWallsrcBeams: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).nonLoadBearingWalls.rcBeams;
        if (data == "yes"){
            return("framed in reinforced concrete beams");
        } else if (data == "no"){
            return("no reinforced concrete beams");
        }
    },
    nonLoadBearingWallsrcColumns: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).nonLoadBearingWalls.rcColumns;
        if (data == "yes"){
            return("framed in reinforced concrete columns");
        } else if (data == "no"){
            return("no reinforced concrete columns");
        }
    },
    waterRatiowaterRatio: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).waterRatio.waterRatio;
        if (data == "0.42"){
            return("water ratio of 0.42");
        } else if (data == "0.36"){
            return("water ratio of 0.36");
        } else if (data == "0.23"){
            return("water ratio of 0.23");
        }
    },
    expansionJointsexpansionJoints: function() {
        var id = FlowRouter.getParam('id');
        var data = Buildings.findOne({_id: id}).expansionJoints.expansionJoints;
        if (data == "approvedInternals"){
            return("expansion joints at approved internals");
        } else if (data == "spacedOut"){
            return("expansion joints spaced far apart");
        } else if (data == "nil"){
            return("No expansion joints");
        }
    }
});

Template.showBuildingDetail.events({
    'click .delete-building': function(){
		var id = FlowRouter.getParam('id');
		var imageId = Buildings.findOne({_id: id}).image;
		Meteor.call('deleteBuilding', id, imageId);
	}
});

//this's a commit test
