import commandList from '../commands';

import { Command } from '../types';

const commands = Object.values(commandList) as Command[];

export const parseCommand = (message: string): Command | null => {
	const args = message.slice(1).split(' ');
	const commandName = String(args.shift()?.toLowerCase());

	let commandObject = null;
	commands.forEach(command => {
		const hasMainName = commandName === command.name;
		const hasLocalizedName = command.localizedNames && command.localizedNames.includes(commandName);

		if (hasMainName || hasLocalizedName) {
			commandObject = command;
		}
	});

	return commandObject;
};

export const messageStartsWithPrefix = (message: string) => {
	const prefix = String(process.env.COMMAND_PREFIX);
	return message.startsWith(prefix);
};