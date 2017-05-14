import { ControllerUtils } from './ControllerUtils';
import {
  MIDIControllerTypes,
  MIDIControllerChannels
} from '../constants/MIDIControllers';

describe('ControlUtils', () => {
  it('should test isVolume', () => {
    expect(ControllerUtils.isVolume(7)).toBeTruthy();
  });

  it('should test when is not volume', () => {
    expect(ControllerUtils.isVolume(10)).toBeFalsy();
  });

  it('should test isPercussion', () => {
    expect(ControllerUtils.isPercussion(10)).toBeTruthy();
  });

  it('should test isPercussion and be falsy', () => {
    expect(ControllerUtils.isPercussion(5)).toBeFalsy();
  });
});