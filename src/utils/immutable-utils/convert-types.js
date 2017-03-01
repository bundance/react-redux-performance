import { objOf, when } from 'ramda';
import { List, Map } from 'immutable';

export const asList = when(Map.isMap, _convertToList);
export const asMap = when(List.isList, _convertToMap);
export const mapOf = key => obj => Map(objOf(key)(obj));

function _convertToList(map) {
    return map.toList();
}

function _convertToMap(list) {
    return list.toMap();
}