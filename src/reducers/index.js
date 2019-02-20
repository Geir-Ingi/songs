import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Smorcarena', duration: '2:30'},
        {title: 'All Star', duration: '1:11'},
        {title: 'Dorki dorki dorki', duration: '1:53'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});