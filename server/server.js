require("dotenv").config();

const port = process.env.PORT;

const app = require("../server/app");

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
