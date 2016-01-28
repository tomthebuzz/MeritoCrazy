Reviews = new Mongo.Collection( 'reviews');

var ReviewSchema = new SimpleSchema({
	"reviewId": {
		label: "Review ID",
		type: String,
		defaultValue: "{{nextReviewNumber}}"
	},
	"ReviewDate": {
		label: "Review Date",
		type: Date
	},
	"evalId": {
		label: "Evaluation",
		type: String
	},
	"emplId": {
		label: "Employee",
		type: String
	},
	"ReviewerId": {
		label: "Reviewer",
		type: String
	},
	"reviewStatus": {
		label: "Eval Status",
		type: String,
		optional: true
	},
	"evalFinal": {
		label: "Final Evaluation",
		type: String,
		optional: true
	}
});

Reviews.attachSchema(ReviewSchema);
