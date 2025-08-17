import React from 'react';
import { useInputReplace } from './InputReplaceContext';

type Props = {
	target: string;
	placeholder?: string;
};

const InputReplace: React.FC<Props> = ({ target, placeholder }) => {
	const { values, setValue } = useInputReplace();
	return (
		<input
			name={target}
			placeholder={placeholder}
			value={values[target] || ''}
			onChange={(e) => setValue(target, e.target.value)}
		/>
	);
};

export default InputReplace;
