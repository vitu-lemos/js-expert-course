const File = require("./src/file");
const { rejects } = require("assert");
const { error } = require("./src/constants");

(async () => {
  {
    const filePath = "./mocks/fields-invalid.csv";
    const rejection = new Error(error.FILE_FIELDS_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/empty-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/invalidPath.csv";
    const rejection = new Error(error.FILE_PATH_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
})();
