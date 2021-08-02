export function verifyPhone(phone) {
  var phonePattern, isValid;
  //11位 第一位是1 第二位数 3～9 之间 后9位随意
  phonePattern = /^1(3|4|5|6|7|8|9)\d{9}$/;
  isValid = phonePattern.test(phone);
  return isValid;
}
export function validEmail(email) {
  var emailPattern, isValidEmail;
  emailPattern =
    /^[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  isValidEmail = emailPattern.test(email);
  return isValidEmail;
}
// 只能输入6-20个字母、数字、下划线
export function isPasswd(s) {
  var patrn = /^(\w){6,20}$/;
  if (!patrn.exec(s)) return false;
  return true;
}
