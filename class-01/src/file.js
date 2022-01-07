const { readFile } = require("fs/promises");
const { error, DEFAULT_VALIDATION_OPTIONS } = require("./constants");

class File {
  static async csvToJson(path) {
    const content = await File.getFileContent(path);
    const validator = await File.validator(content);
    if (!validator.valid) throw new Error(validator.error);

    return content;
  }

  static async getFileContent(path) {
    try {
      const file = (await readFile(path)).toString("utf8");
      return file;
    } catch (e) {
      throw new Error(error.FILE_PATH_MESSAGE);
    }
  }

  static async validator(csvString, options = DEFAULT_VALIDATION_OPTIONS) {
    const [header, ...fileContent] = csvString.split("\n");

    const isHeaderValid = header === options.fields.join(",");
    if (!isHeaderValid) {
      return {
        valid: false,
        error: error.FILE_FIELDS_MESSAGE,
      };
    }

    const isFileLengthValid =
      fileContent.length > 0 && fileContent.length <= options.maxSize;
    if (!isFileLengthValid) {
      return {
        valid: false,
        error: error.FILE_LENGTH_MESSAGE,
      };
    }

    return {
      valid: true,
    };
  }
}

module.exports = File;
