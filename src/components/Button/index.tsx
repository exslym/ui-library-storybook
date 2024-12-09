import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = ({ ...props }) => {
	return <button className='text-blue-500' {...props} />;
};
