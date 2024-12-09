import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// add controls:
	argTypes: {
		type: {
			options: ['text', 'password', 'number', 'date'],
			control: { type: 'select' },
		},
		placeholder: {
			options: ['Insert text here', 'Password', 'Number', 'Date'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		type: 'text',
		placeholder: 'Insert text here',
	},
};

export const Password: Story = {
	args: {
		type: 'password',
		placeholder: 'Password',
	},
};

export const Number: Story = {
	args: {
		type: 'number',
		placeholder: 'Number',
	},
};

export const Date: Story = {
	args: {
		type: 'date',
		placeholder: 'Date',
	},
};
