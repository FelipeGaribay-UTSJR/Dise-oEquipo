require("dotenv").config();

app.use(process.env.SESSION_SECRET);

var port=process.env.PORT || 3000;