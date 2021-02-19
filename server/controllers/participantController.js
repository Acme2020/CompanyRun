const Participant = require("../models/participantModel");
const multer = require("multer");
const filesystem = require("fs");
const { promisify } = require("util");
const sharp = require("sharp");

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

	upload: multer().single("Avatar"),

	create: async (req, res) => {
		const file = req.file;
		const body = req.body;
		const avatarPathServer = `${__dirname}/../public/images/${new Date().getTime()}${
			file.originalName
		}`;
		const avatarName = `${new Date().getTime()}${file.originalName}`;
		const pipeline = promisify(require("stream").pipeline);

		if (file.detectedMimeType.startsWith("image")) {
			try {
				const result = await Participant.createParticipant(
					body.FirstName,
					body.LastName,
					body.Email,
					avatarName
				);
				console.log(result);
				res.json({
					status: "success",
					results: result.length,
					data: { response: result[0] },
				});

				const resizeImage = sharp()
					.resize(150, 150)
					.toFormat("jpeg")
					.jpeg({ quality: 90 });

				await pipeline(
					file.stream,
					resizeImage,
					filesystem.createWriteStream(avatarPathServer)
				);
			} catch (err) {
				console.log(err);
			}
		} else res.send("invalid file type");
	},
};
