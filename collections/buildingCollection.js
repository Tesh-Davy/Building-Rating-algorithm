Buildings = new Mongo.Collection('buildings');
BuildingImages = new FS.Collection('buildingImages', {
   stores: [new FS.Store.GridFS('buildingImages', {path: '~/uploads'})]
});

if ( Meteor.isServer ) {
  Buildings._ensureIndex( { name: 1, _id: 1 } );
}

//only allow users who are signed in to add/update an building
Buildings.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return true;
	}
});
BuildingImages.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return true;
	},
	download: function(userId, doc) {
		return true;
	},
	remove: function(userId, doc) {
		return true;
	}
});


WetLandsSchema = new SimpleSchema({
    foundation: {
        type: String,
        label: "The depth of the foundation",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"deep", label: "Deep foundation"},
                {value:"average", label: "Average foundation"},
                {value:"shallow", label: "Shallow foundation"}
            ]
        }
    },
    foundationBase: {
        type: String,
        label: "The type of base of the foundation",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"reinforcedBase", label: "Reinforced foundation base"},
                {value:"collumBases", label: "Collumn base"},
                {value:"nil", label: "No foundation base"}
            ]
        }
    },
    stripType: {
        type: String,
        label: "The type of strip",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"reinforcedStrip", label: "Reinforced strip"},
                {value:"plainConcrete", label: "Plain concrete strip"},
                {value:"nil", label: "No strip"}
            ]
        }
    },
    ringBeamType: {
        type: String,
        label: "The type of ring beam",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"groundLevelRingBeam", label: "Ground level ring beam"},
                {value:"nil", label: "No ground level ring beam"}
            ]
        }
    },
    dewateringType: {
        type: String,
        label: "The type of dewatering done to the land",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"mechanical", label: "Mechanical dewatering"},
                {value:"natural", label: "Natural dewatering"},
                {value:"nil", label: "No dewatering"}
            ]
        }
    },
    sandType: {
        type: String,
        label: "The type of sand used",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"riverSand", label: "River sand"},
                {value:"soilSand", label: "Ordinary soil sand"}
            ]
        }
    },
    floorSlabType: {
        type: String,
        label: "The type of floor slab used",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"raised", label: "Raised floor slab"},
                {value:"groundLevel", label: "Floor slab on ground level"},
                {value:"sunken", label: "Sunken floor slab"}
            ]
        }
    },
    linktelsType: {
        type: String,
        label: "The type of linktels used",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value:"reinforcedLintels", label: "Reinforced (through)lintels and beams"},
                {value:"shortLintels", label: "Short linktels"}
            ]
        }
    },
    ironWallHoops: {
        type: Boolean,
        label: "Hoop iron in the walls",
        autoform: {
            type: 'boolean-checkbox',
        }
    },
    waterproofCement: {
        type: Boolean,
        label: "Waterproof cement",
        autoform: {
            type: 'boolean-checkbox',
        }
    },
    curedWater: {
        type: Boolean,
        label: "2000PSI of water in concrete cured in 21days",
        autoform: {
            type: 'boolean-checkbox',
        }
    },
    dumpSite: {
        type: Boolean,
        label: "The site is on a dumpsite or excavation site",
        autoform: {
            type: 'boolean-checkbox',
        }
    }
});

SteelGradeSchema = new SimpleSchema({
    foundationSteelGrade: {
        type: String,
        label: "The steel grade of the foundation",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "y25", label: "y25: 3.85kg/m"},
                {value: "y16", label: "y16: 1.58kg/m"},
                {value: "y10", label: "y10: 0.62kg/m"}
            ]
        }
    },
    columnsSteelGrade: {
        type: String,
        label: "The steel grade of the columns",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "y16", label: "y16: 1.58kg/m"},
                {value: "y10", label: "y10: 0.62kg/m"},
                {value: "y8", label: "y8: 0.48kg/m"}
            ]
        }
    },
    slabSteelGrade: {
        type: String,
        label: "The steel grade of the slabs",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "y12", label: "y12: 0.88kg/m"},
                {value: "y10", label: "y10: 0.62kg/m"},
                {value: "y8", label: "y8: 0.48kg/m"}
            ]
        }
    }
});

WallingGradeSchema = new SimpleSchema({
    stoneType: {
        type: String,
        label: "The stone type used to build the wall",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "naturalStone", label:"Natural stone"},
                {value: "ndarughuStone", label:"Ndarughu stone"},
                {value: "concreteBricks", label:"Concrete bricks"},
                {value: "ndarughuStoneAndConcreteBricks", label:"Ndarughu stone and Concrete bricks"}
            ]
        }
    },
    mortarBonds: {
        type: String,
        label: "Mortar bonds used in the walls",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "10mm", label:"10mm thick mortar bonds"},
                {value: "15mm", label:"15mm thick mortar bonds"},
                {value: "25mm", label:"25mm thick mortar bonds"},
                {value: "50mm", label:"50mm thick mortar bonds"}
            ]
        }
    },
    ironHoops: {
        type: String,
        label: "The type of iron hoops used",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "38mm", label:"38mm wide hoop irons at alternate locations"},
                {value: "20mm", label:"20mm wide hoop irons"},
                {value: "10mm", label:"10mm wide hoop irons"},
                {value: "barbedWire", label:"Barbed wire"}
            ]
        }
    }
});

ConcreteGradeSchema = new SimpleSchema({
    foundation: {
        type: String,
        label: "The fondation's concrete grade ratio",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "1:3:6", label: "1:3:6 classQ"},
                {value: "1:3:8", label: "1:3:8"},
                {value: "1:4:8", label: "1:4:8"}
            ]
        }
    },
    groundBeam: {
        type: String,
        label: "The ground beams and stairs concrete grade",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "1:1:2", label: "Vibrated reinforced concrete. class 30/20 mm (1:1:2"},
                {value: "1:1.5:3", label: "Vibrated reinforced concrete. class 25/20 mm (1:1.5:2"},
                {value: "1:2:4", label: "Vibrated reinforced concrete. class 20/20 mm (1:2:4"},
                {value: "1:3:6", label: "Hand packed. Not classified (1:3:6"}
            ]
        }
    },
    slab: {
        type: String,
        label: "The slabs' concrete grade",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "150mmVRC", label: "150mm thick vibrated reinforced concrete"},
                {value: "150mmMCB", label: "150mm thick mass concrete in bars"},
                {value: "100mmMCB", label: "100mm thick mass concrete in bars"}
            ]
        }
    },
    water: {
        type: String,
        label: "The type of water used with the concrete",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "cleanDrinkingWater", label: "Clean drinking water"},
                {value: "rainWater", label: "Rain water | salty water"},
                {value: "dirtySoapyWater", label: "Dirty or soapy water"},
                {value: "floodWater", label: "Flood water | salty water"}
            ]
        }
    }
});

LoadBearingWallsSchema = new SimpleSchema({
    wallBaseThickness: {
        type: String,
        label: "The thickness of the wall's base",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "thick", label: "Thick at base"},
                {value: "notThick", label: "Not thick at base"}
            ]
        }
    },
    wallBaseWeight: {
        type: String,
        label: "The weight of the wall's base",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "heavy", label: "Heavy at base"},
                {value: "lightAsTop", label: "Light as the top"},
                {value: "lighterThanTop", label: "Lighter than the top"}
            ]
        }
    }
});

NonLoadBearingWallsSchema = new SimpleSchema({
    rcBeams: {
        type: String,
        label: "Reinforced concrete beams",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "yes", label: "Yes: framed in reinforced concrete beams"},
                {value: "no", label: "No: no reinforced concrete beams"}
            ]
        }
    },
    rcColumns: {
        type: String,
        label: "Reinforced concrete columns",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "yes", label: "Yes: framed in reinforced concrete columns"},
                {value: "no", label: "No: no reinforced concrete columns"}
            ]
        }
    }
});

WaterRatioSchema = new SimpleSchema({
    waterRatio: {
        type: String,
        label: "What amount of the mixture is the water content during mixing?",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "0.42", label: "0.42"},
                {value: "0.36", label: "0.36"},
                {value: "0.23", label: "0.23"}
            ]
        }
    }
});

ExpansionJointsSchema = new SimpleSchema({
    expansionJoints: {
        type: String,
        label: "here are the expansion joints placed?",
        autoform: {
            type: 'select2',
            options: [
                {value: "", label: "select one"},
                {value: "approvedInternals", label: "At approved internals"},
                {value: "spacedOut", label: "Spaced far apart"},
                {value: "nil", label: "No expansion joints"}
            ]
        }
    }
});

//this is the schema that will be used to get the content that goes into the buildings collection
BuildingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "The name of the building"
	},
    rating: {
		type: Number,
        autoform: {
			type: "hidden"
		},
        label: "Rating"
	},
    floors: {
        type: Number,
        label: "Number of floors in the building"
    },
    image: {
        type: String,
        label: "image of the building",
        autoform: {
        	afFieldInput: {
        		type: "fileUpload",
		        collection: "buildingImages",
		        accept: 'image/*',
                label: "add building's image here"
        	}
        }
    },
    location: {
		type: Object,
		optional: true,
        label: "Location of the building",
		autoform: {
			type: 'map',
			afFieldInput: {
				geolocation: true,
	            searchBox: true,
	            width:'100%',
	            zoom: 13,
	            autolocate: true,
	            mapType: 'hybrid',
	            googleMap: {
	            	mapTypeControl: false
	            }
			}
		}
	},
	'location.lat': {
		type: Number,
		decimal: true
	},
	'location.lng': {
		type: Number,
		decimal: true
	},
    certificateOccupation: {
        type: Boolean,
        label: "certificate of occupation issued?",
        autoform: {
            type: 'boolean-checkbox',
        }
    },
    wetlands: {
        type: WetLandsSchema,
        label: "Land"
    },
    steelGrade: {
        type: SteelGradeSchema,
        label: "Steel Grade (Density)"
    },
    wallingGrade: {
        type: WallingGradeSchema,
        label: "Walling Grade"
    },
    concreteGrade: {
        type: ConcreteGradeSchema,
        label: "Concrete Grade"
    },
    loadBearingWalls: {
        type: LoadBearingWallsSchema,
        label: "Load Bearing Walls"
    },
    nonLoadBearingWalls: {
        type: NonLoadBearingWallsSchema,
        label: "Non-Load Bearing Walls"
    },
    waterRatio: {
        type: WaterRatioSchema,
        label: "Water Ratio"
    },
    expansionJoints: {
        type: ExpansionJointsSchema,
        label: "Expansion Joints"
    },
	isPublished: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();  // Prevent user from supplying their own val
			}
		},
		autoform: {
			type: "hidden"
		}
	},
	updatedAt: {
		type: Date,
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true,
		autoform: {
			type: "hidden"
		}
	}
});



Meteor.methods({
	deleteBuilding: function(id, imageId){
		Buildings.remove(id);
		BuildingImages.remove(imageId);
		FlowRouter.go('show');
	}
});
//here we actually attach the schema above to the collection that we had created earlier
Buildings.attachSchema ( BuildingSchema );
