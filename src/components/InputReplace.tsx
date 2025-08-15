import React from 'react';

type Props = {
	name: string;
	placeholder: string;
};

const InputReplace: React.FC<Props> = ({ name, placeholder }) => {
	return <input name={name} placeholder={placeholder} />;
};

export default InputReplace;
