const Participant = require("../models/participantModel");
const multer = require("multer");
const filesystem = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const result_split = (array, size) => {
	if (!array.length) {
		return [];
	}
	const head = array.slice(0, size);
	const tail = array.slice(size);

	return [head, ...result_split(tail, size)];
};

module.exports = {
	index: async (req, res) => {
		try {
			const result = await Participant.getParticipants();
			console.log(result);
			res.json({
				status: "success",
				results: result.length,
				data: {
					response_chunks: result_split(result, 2),
					response_all: result,
				},
			});
		} catch (err) {
			console.log(err);
		}
	},
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
	create: async (req, res) => {
		try {
			const result = await Participant.createParticipant(
				req.params.first_name,
				req.params.last_name,
				req.params.email
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

	upload: multer().single("Avatar"),

	uploadAvatar: async (req, res) => {
		console.log(req);
		const {
			file,
			body: { name },
		} = req;

		if (file.detectedFileExtension != ".jpg")
			next(new Error("invalid file type"));

		await pipeline(
			file.stream,
			filesystem.createWriteStream(
				`${__dirname}/../public/images/${file.originalName}`
			)
		);

		res.send("Avatar uploaded successfully");
	},
};
