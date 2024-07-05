export const validateSignUp = (values, type) => {
  const errors = {};
  if (type !== "updateAdmin") {
    if (values.username) {
      if (values.username.length < 4) {
        errors.username = "Must be at least 4 characters";
      } else if (values.username.length > 20) {
        errors.username = "Must be at most 20 characters";
      } else if (!/^(?!\s)[a-zA-Z0-9]*$/.test(values.username)) {
        errors.username = "Invalid username";
      }
    }
    if (values.password) {
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/.test(
          values.password
        )
      ) {
        errors.password =
          "Password must contain at least 8 characters, including UPPER/lowercase, special character and numbers";
      }
    }
    if (type !== "createAdmin") {
      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password does not match";
      }
    }
  }
  if (values.fullName) {
    if (
      !/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/.test(
        values.fullName
      )
    ) {
      errors.fullName = "Invalid full name";
    }
  }
  if (values.email) {
    if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email address";
    }
  }

  if (values.phoneNumber) {
    if (values.phoneNumber.length > 10) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!values.phoneNumber.startsWith("0") && values.phoneNumber.length > 9) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!/^0?([3|5|7|8|9]+([0-9]{8})\b)/.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
  }
  return errors;
};
