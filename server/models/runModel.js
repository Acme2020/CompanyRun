const db = require("../db/db");

exports.getRuns = async (id) => {
	try {
		let result = await db.query(
			"SELECT * FROM runs WHERE participant_id = $1",
			[id]
		);
		return result.rows;
	} catch (error) {
		console.log(error);
	}
};

exports.createRun = async (run_date, distance, time, participant_id) => {
	try {
		let result = await db.query(
			"INSERT INTO runs (run_date, distance, time, participant_id, created_on) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[run_date, distance, time, participant_id, "NOW()"]
		);

		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
};

exports.deleteRun = async (run_id) => {
	try {
		let result = await db.query(
			"DELETE FROM runs WHERE id = $1 RETURNING *",
			[run_id]
		);
		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
};
