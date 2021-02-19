const db = require("../db/db");

exports.getParticipants = async () => {
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
			"SELECT first_name, last_name, email, avatar_name FROM participants WHERE id = $1",
			[id]
		);
		return result.rows;
	} catch (error) {
		console.log(error);
	}
};

exports.createParticipant = async (
	first_name,
	last_name,
	email,
	avatar_name
) => {
	try {
		let result = await db.query(
			"INSERT INTO participants (first_name, last_name, email, avatar_name) VALUES ($1, $2, $3, $4) RETURNING *",
			[first_name, last_name, email, avatar_name]
		);
		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
};
