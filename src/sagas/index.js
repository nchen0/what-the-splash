import { put, takeEvery, take, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

// watcher saga
function* rootSaga() {
    // Now we just need to dispatch the IMAGES.LOAD action for this to happen.
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// We have a watcher saga -> listening to actions -> invokes worker saga

export default rootSaga;
