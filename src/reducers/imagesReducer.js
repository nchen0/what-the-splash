import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return [...state, ...action.images];
        default:
            return state;
    }
    // if (action.type === IMAGES.LOAD_SUCCESS) {
    //     return [...state, ...action.images];
    // }
    // return state;
};

export default imagesReducer;
