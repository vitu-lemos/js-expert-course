const constants = {
  error: {
    FILE_LENGTH_MESSAGE: "The file length is wrong",
    FILE_FIELDS_MESSAGE: "The file fields is wrong",
    FILE_PATH_MESSAGE: "The file path is wrong or was not provided",
  },
  DEFAULT_VALIDATION_OPTIONS: {
    maxSize: 3,
    fields: ["id", "age", "name", "profession"],
  },
};

module.exports = constants;
