const db = require("../db/db");

const getParticipants = async () => {
	try {
		let result = await db.query("SELECT * FROM participants");
		return result.rows;
	} catch (error) {
		console.log(error);
	}
};

exports.getParticipant = async (id) => {
	try {
		let result = await db.query(
			"SELECT * FROM participants WHERE id = $1",
			[id]
		);
		return result.rows;
	} catch (error) {
		console.log(error);
	}
};
