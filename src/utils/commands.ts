import commandList from '../commands';

import { Command } from '../types';

const commands = Object.values(commandList) as Command[];

export const parseCommand = (message: string) => {
	const args = message.slice(1).split(' ');
	const commandName = String(args.shift()?.toLowerCase());

	let commandObject: Command | null = null;
	for (const command of commands) {
		const hasMainName = commandName === command.name;
		const hasLocalizedName = command.localizedNames && command.localizedNames.includes(commandName);

		if (hasMainName || hasLocalizedName) {
			commandObject = command;
			break;
		}
	}

	return commandObject;
};

export const messageStartsWithPrefix = (message: string) => {
	const prefix = String(process.env.COMMAND_PREFIX);
	return message.startsWith(prefix);
};