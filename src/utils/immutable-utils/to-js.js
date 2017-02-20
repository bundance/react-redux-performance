import React from 'react';
import { Iterable } from 'immutable';

const KEY = 0;
const VALUE = 1;

export const toJS = (WrappedComponent) => 
    (props) => {
        const propsJS = Object.entries(props).reduce((newProps, prop)  => {
            newProps[prop[KEY]] = Iterable.isIterable(prop[VALUE]) ? _getJSValue(prop) : prop[VALUE];

            return newProps;
        }, {});

        return <WrappedComponent {...propsJS}/>
    };

/**
 * Return undefined if prop[VALUE] is empty, otherwise .toJS() will return an empty object
 * @param prop
 * @returns {*}
 * @private
 */
function _getJSValue(prop) {
    return prop[VALUE].size ? prop[VALUE].toJS() : undefined;
}
