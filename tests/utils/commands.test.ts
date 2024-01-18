const mockedCommandList = {
  'default-command': {
    name: 'default-name',
    localizedNames: ['localized-name'],
    execute: () => true,
  },
};

jest.doMock('../../src/commands', () => mockedCommandList);

import { messageStartsWithPrefix, parseCommand } from '../../src/utils';

describe('Command utils tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
  
  describe('parseCommand tests', () => {
    it('should return null by command not found', () => {
      const message = '!unknown-command';
      const command = parseCommand(message);
      expect(command).toBeNull();
    });

    it('should return command by default name', () => {
      const message = '!default-name';
      const command = parseCommand(message);
      expect(command).toEqual(mockedCommandList['default-command']);
    });

    it('should return command by localized name', () => {
      const message = '!localized-name';
      const command = parseCommand(message);
      expect(command).toEqual(mockedCommandList['default-command']);
    });
  });
});
