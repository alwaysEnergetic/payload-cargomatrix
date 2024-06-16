import React from 'react'
import { TextFieldProps } from '@payloadcms/ui/fields/Text'
import './index.scss'

const Cell: React.FC<TextFieldProps> = (props) => {
    const { path } = props;
    if (!path) return null;

    return <div className="chip" style={{ backgroundColor: path as string }} />;
}

export default Cell