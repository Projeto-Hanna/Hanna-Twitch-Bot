import { messageStartsWithPrefix } from '../../src/utils';

describe('messageStartsWithPrefix tests', () => {
  it('should return success by prefix found in message begin', () => {
    const message = '!discord';
    const hasPrefix = messageStartsWithPrefix(message);
    expect(hasPrefix).toBeTruthy();
  });

  it('should return fail by no prefix found in message', () => {
    const message = 'discord';
    const hasPrefix = messageStartsWithPrefix(message);
    expect(hasPrefix).toBeFalsy();
  });

  it('should return fail by prefix not found in message begin', () => {
    const message = 'dis!cord !hello';
    const hasPrefix = messageStartsWithPrefix(message);
    expect(hasPrefix).toBeFalsy();
  });
});