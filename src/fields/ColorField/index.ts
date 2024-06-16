import { Field } from 'payload/types';

import InputField from './InputField';
import Cell from './Cell';

export const validateHexColor = (value: string): boolean | string => {
    return (
        value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)?.length === 1 ||
        `${value} is not a valid hex color`
    );
};

export const ColorField: Field = {
    name: 'color',
    type: 'text',
    admin: {
        components: {
            Field: InputField,
            Cell
        },
    },
    validate: async (value: string): Promise<string | true> => {
        if (typeof value === 'undefined') {
            return true;
        }
        return (
            value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)?.length === 1 ||
            `${value} is not a valid hex color`
        );
    },
    required: true,
};
