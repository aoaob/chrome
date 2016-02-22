'use strict';
import deepequal from 'deep-equal';
import {EDITOR} from '../action-names';

export default function(state=[], action) {
    if (action.type === EDITOR.SET_FILES && !deepequal(state, action.items)) {
        state = action.items;
    }
    return state;
};
