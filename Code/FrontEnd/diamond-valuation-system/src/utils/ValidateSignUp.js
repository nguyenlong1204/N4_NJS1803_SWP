export const validateSignUp = (values, type) => {
  const errors = {};
  if (type !== "updateAdmin") {
    if (values.username) {
      if (values.username.length < 6) {
        errors.username = "Must be at least 6 characters";
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
  if (values.fullName.length < 1) {
    errors.fullName = "Full name is required";
  }
  if (values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  }
  if (values.phoneNumber) {
    if (values.phoneNumber.length !== 10) {
      errors.phoneNumber = "Invalid phone number";
    } else if (
      !/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(values.phoneNumber)
    ) {
      errors.phoneNumber = "Invalid phone number";
    }
  }
  return errors;
};
