Objectives = new Mongo.Collection( 'objectives');

var ObjSchema = new SimpleSchema({
	objId: {
		label: "Objective ID",
		type: String,
		defaultValue: "{{nextObjNumber}}"
	},
	"type": {
	    type: String,
	    label: "Objective Type"
	},
	"focus": {
    type: String,
    label: "Objective Focus"
	},
	"description": {
		label: "Description",
		type: String
	},
	"objStartDate": {
		label: "Objective Start Date",
		type: Date
	},
	"objEndDate": {
		label: "Objective End Date",
		type: Date
	},
	"days": {
		label: "Billable Days",
		type: Number,
		decimal: true,
		defaultValue: 1,
		optional: true
	},
	"margin": {
		label: "Margin",
		type: Number,
		decimal: true,				
		optional: true
	},
	"amount": {
		label: "Amount",
		type: Number,
		decimal: true,
		optional: true
	}
});

Objectives.attachSchema(ObjSchema);
