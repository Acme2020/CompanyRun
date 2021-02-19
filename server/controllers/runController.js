const Participant = require("../models/runModel");
const moment = require("moment");
const durationformat = require("moment-duration-format");

module.exports = {
	index: async (req, res) => {
		try {
			const result = await Participant.getRuns(req.params.id);
			const sum_distance = result
				.map((el) => el.distance)
				.reduce((sum, item) => (sum = sum + item), 0);
			const sum_time = result
				.map((el) => el.time)
				.reduce(
					(sum, item) => (sum = moment.duration(sum).add(item)),
					0
				)
				.format();

			res.json({
				status: "success",
				results: result.length,
				data: { response: result, sums: { sum_distance, sum_time } },
			});
		} catch (err) {
			console.log(err);
		}
	},

	create: async (req, res) => {
		console.log(req.body);
		const body = req.body;
		try {
			const result = await Participant.createRun(
				body.run_date,
				body.distance,
				body.time,
				req.params.id
			);
			console.log(result);
			res.json({
				status: "success",
				results: result.length,
				data: { response: result[0] },
			});
		} catch (err) {
			console.log(err);
		}
	},

	delete: async (req, res) => {
		try {
			const result = await Participant.deleteRun(req.params.run_id);
			console.log(result);
			res.json({
				status: "success",
				results: result.length,
				data: { response: result[0] },
			});
		} catch (err) {
			console.log(err);
		}
	},
};
