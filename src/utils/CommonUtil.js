export default class CommonUtil {
  static isEmptyString(val) {
    return val === null || val === undefined || val.length === 0;
  }
}
