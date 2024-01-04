const fs = require("node:fs");

// 1. employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
//****************************
// fs.writeFile(
//   "example.json",
//   '{"name": "Employee 1 Name", "salary": 2000}',
//   "utf8",
//   (err) => {
//     if (err) console.log(err);
//   }
// );

// 2. Bu veriyi okuyalım. (READ)
//****************************
// fs.readFile("example.json", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// 3. Bu veriyi güncelleyelim.
//****************************
// const filePath = "example.json";
// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   // Check if the file is empty
//   if (!data.trim()) {
//     console.log("File is empty.");
//     return;
//   }

//   try {
//     // Parse the JSON data
//     const jsonData = JSON.parse(data);

//     // Update the existing object with new properties (age and address)
//     jsonData.age = 25;
//     jsonData.address = "Employee 2 Address";

//     // Convert the updated data back to JSON format
//     const updatedData = JSON.stringify(jsonData, null, 2);

//     // Write the updated data back to the file
//     fs.writeFile(filePath, updatedData, "utf8", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("File updated successfully!");
//       }
//     });
//   } catch (parseError) {
//     console.log("Error parsing JSON:", parseError);
//   }
// });

// 4.Dosyayı silelim.
//****************************
// fs.unlink("example.json", (err) => {
//   if (err) console.log(err);
// });
