const Participant = require("../models/participantModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const authenticateUser = async (email, password, done) => {
	try {
		const result = await Participant.loginParticipant(email);
		if (result.length === 0) {
			return done(null, false, {
				message: "Incorrect username.",
			});
		}
		console.log(result[0]);
		return done(null, result[0]);
	} catch (error) {
		console.log(error);
	}
};

const strategy = new LocalStrategy(
	{ usernameField: "email", passwordField: "password" },
	authenticateUser
);

passport.use(strategy);

passport.serializeUser((user, done) => {
	console.log("serlialized");
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await Participant.getParticipant(id);
		console.log(user);
		return done(null, user);
	} catch (error) {
		console.log(error);
	}
});
