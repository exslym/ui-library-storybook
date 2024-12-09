import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// add controls:
	argTypes: {
		variant: {
			options: ['solid', 'outline', 'ghost'],
			control: { type: 'select' },
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' },
		},
		colorScheme: {
			options: ['primary'],
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
	args: {
		children: 'Button',
		variant: 'solid',
		size: 'md',
		colorScheme: 'primary',
	},
};
export const Outline: Story = {
	args: {
		children: 'Button',
		variant: 'outline',
		size: 'md',
		colorScheme: 'primary',
	},
};
export const Ghost: Story = {
	args: {
		children: 'Button',
		variant: 'ghost',
		size: 'md',
		colorScheme: 'primary',
	},
};
