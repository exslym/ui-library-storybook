import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './index';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// add controls:
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		as: 'h1',
		children:
			'be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick',
	},
};
