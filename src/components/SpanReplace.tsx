import React from 'react';

type Props = {
	target: string;
	value: string;
};

const SpanReplace: React.FC<Props> = ({ target, value }) => {
	return <span className="replace-target" data-target={target}>{value}</span>;
};

export default SpanReplace;
