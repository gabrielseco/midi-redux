import { readMidiFile } from './FileActions';

describe('FileActions action creator', () => {
  it('should test readMidiFile reading and event and dispatching an action', () => {
    spyOn(global, 'FileReader').and.returnValue({
      addEventListener: jest.fn(),
      readAsBinaryString: jest.fn()
    });
    const reader = new FileReader();
    const file = new File([""], "filename");
    const fn = readMidiFile({
      target: {
        files: [
          file
        ]
      }
    });
    expect(typeof fn).toBe('function');
    fn();
  });
});