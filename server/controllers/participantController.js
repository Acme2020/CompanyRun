const Participant = require("../models/participantModel");

module.exports = {
	show: async (req, res) => {
		try {
			const result = await Participant.getParticipant(req.params.id);
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
