const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.businessname = !isEmpty(data.businessname) ? data.businessname : "";
  data.businessaddress = !isEmpty(data.businessaddress)
    ? data.businessaddress
    : "";
  data.lto = !isEmpty(data.lto) ? data.lto : "";
  data.pharmacistame = !isEmpty(data.pharmacistame) ? data.pharmacistame : "";
  data.ownername = !isEmpty(data.ownername) ? data.ownername : "";

  if (!validator.isLength(data.businessname, { min: 4, max: 40 })) {
    errors.businessname = "First name must be 4 to 40 characters";
  }

  if (validator.isEmpty(data.businessname)) {
    errors.businessname = "First name field is required";
  }

  if (!validator.isLength(data.businessaddress, { min: 4, max: 40 })) {
    errors.businessaddress = "Last name must be 4 to 40 characters";
  }

  if (validator.isEmpty(data.businessaddress)) {
    errors.businessaddress = "Last name field is required";
  }

  if (!validator.isLength(data.lto, { min: 4, max: 40 })) {
    errors.lto = "Last name must be 4 to 40 characters";
  }

  if (validator.isEmpty(data.lto)) {
    errors.lto = "Last name field is required";
  }
  if (!validator.isLength(data.pharmacistame, { min: 4, max: 40 })) {
    errors.pharmacistame = "Last name must be 4 to 40 characters";
  }

  if (validator.isEmpty(data.pharmacistame)) {
    errors.pharmacistame = "Last name field is required";
  }
  if (!validator.isLength(data.ownername, { min: 4, max: 40 })) {
    errors.ownername = "Last name must be 4 to 40 characters";
  }

  if (validator.isEmpty(data.ownername)) {
    errors.ownername = "Last name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
