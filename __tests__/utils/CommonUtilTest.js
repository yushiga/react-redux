import CommonUtil from 'utils/CommonUtil';

describe('CommonUtil', () => {
  describe('isEmptyString', () => {
    describe('引数指定あり', () => {
      it('falseが返ること', () => {
        const result = CommonUtil.isEmptyString('jest is fun');
        expect(result).toBeFalsy();
      });
    });
    describe('引数指定なし', () => {
      it('trueが返ること', () => {
        const result = CommonUtil.isEmptyString();
        expect(result).toBeTruthy();
      });
    });
    describe('引数空文字', () => {
      it('trueが返ること', () => {
        const result = CommonUtil.isEmptyString('');
        expect(result).toBeTruthy();
      });
    });
  });
});
