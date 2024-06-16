'use client';
import React, { useEffect } from 'react';

// this is how we'll interface with Payload itself
import { useField } from '@payloadcms/ui/forms/useField';

// we'll re-use the built-in Label component directly from Payload
import { FieldLabel } from '@payloadcms/ui/forms/FieldLabel';

// we can use existing Payload types easily
import { TextField as TextFieldType } from 'payload/types';

// we'll import and reuse our existing validator function on the frontend, too
import { validateHexColor } from './index';

// Import the SCSS stylesheet
import './index.scss';

import { themes } from '../../constants'

// keep a list of default colors to choose from

const baseClass = 'custom-color-picker';

const mode : string = 'light';

type InputFieldInnerProps = Omit<TextFieldType, 'path'> & {
    path: string;
    label: string;
    required: boolean;
};

function InputFieldInner(props: InputFieldInnerProps) {
    const { path, label, required } = props;

    const { value = '', setValue } = useField<string>({
        path,
    });

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className={baseClass}>
            <FieldLabel htmlFor={path} label={label} required={required} />
            <ul className={`${baseClass}__colors`}>
                {themes.map((theme: any, i: number) => (
                    <li key={i} className='d-flex'>
                        <button
                            type="button"
                            key={theme?.activeColor[mode === 'dark' ? 'dark' : 'light']}
                            className={`chip ${
                                theme?.name === value ? 'chip--selected' : ''
                            } chip--clickable`}
                            style={
                                {
                                    backgroundColor: `hsl(${
                                    theme?.activeColor[mode === 'dark' ? 'dark' : 'light']
                                  })`,
                                } as React.CSSProperties
                              }
                            aria-label={theme.name}
                            onClick={() => setValue(theme.name)}
                        >
                        </button>
                        <span className='color-title'>{theme.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const InputField: React.FC<InputFieldInnerProps> = (props) => {
    const { path, ...rest } = props;

    if (path === undefined) {
        return <></>;
    }

    return <InputFieldInner path={path} {...rest} />;
}

export default InputField;
