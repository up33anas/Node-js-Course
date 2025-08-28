const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    // deleting file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    // writing to file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );

    // appending to file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );

    // renaming file
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    // reading the new file
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

console.log("Hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete...");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete...");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete...");
//           }
//         );
//       }
//     );
//   }
// );
