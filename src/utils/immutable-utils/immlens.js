import { lens } from 'ramda';
import { fromJS } from 'immutable';

export const immLens = key => lens((x) => x && x.get(key), (val, x) => x && x.set(key, fromJS(val)));