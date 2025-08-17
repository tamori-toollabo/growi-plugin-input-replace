import React from 'react';
import { useInputReplace } from './InputReplaceContext';

type Props = {
	target: string;
};

const SpanReplace: React.FC<Props> = ({ target }) => {
	const { values } = useInputReplace();
	return <span>{values[target] || ''}</span>;
};

export default SpanReplace;
