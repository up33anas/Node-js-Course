const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName = "appLog.txt") => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    const logDir = path.join(__dirname, "logs");

    if (!fs.existsSync(logDir)) {
      await fsPromises.mkdir(logDir);
    }

    await fsPromises.appendFile(path.join(logDir, logName), logItem);
  } catch (error) {
    console.error("Logging failed:", error);
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "errorLog.txt"),
      `${new Date().toISOString()}\t${error}\n`
    );
  }
};

module.exports = logEvents;
