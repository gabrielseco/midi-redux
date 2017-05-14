import { TimeUtils } from './TimeUtils';
describe('TimeUtils', () => {
  it('should test getBPM', () => {
    expect(TimeUtils.getBMP(600000)).toBe(100);
  });

  it('should get delta time when is currentTime is 0 ', () => {
    expect(TimeUtils.getDeltaSeconds(0, 0, 0, 0)).toBe(0);
  });

  it('should get the delta time', () => {
    expect(TimeUtils.getDeltaSeconds(1000, 120 ,120, undefined)).toBe(4166.666666666667)
  })
});