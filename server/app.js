var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var session = require("express-session");
const flash = require("express-flash");
var indexRouter = require("./routes");
var participantRouter = require("./routes/participantRoutes");
var runRouter = require("./routes/runRoutes");

var app = express();

// Misc
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// Authentication
app.use(flash());
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", indexRouter);
app.use("/participant/:id/run", runRouter);
app.use("/participant", participantRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
//app.use(function (err, req, res, next) {
//	// set locals, only providing error in development
//	res.locals.message = err.message;
//	res.locals.error = req.app.get("env") === "development" ? err : {};
//
//	// render the error page
//	res.status(err.status || 500);
//	res.render("error");
//});

module.exports = app;
