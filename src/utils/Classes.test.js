import classes from './classes';
describe('Classes Utility', () => {
  it('should test the classes utility with one class', () => {
    expect(classes({ notification: true, hidden: false })).toBe('notification');
  });
  it('should test the classes utility with zero class', () => {
    expect(classes({ notification: false })).toBe('');
  });

  it('should test the classes utility with two classes', () => {
     expect(classes({ notification: true, hidden: true })).toBe('notification hidden');
  })
});