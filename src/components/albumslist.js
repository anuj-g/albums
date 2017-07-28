import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => { this.setState({ albums: response.data }); });
    }

    renderAlbumList() {
        return this.state.albums.map(album =>
             <AlbumDetail key={album.title}>{album.title} albume={album}></AlbumDetail>);
    }

    render() {
        return (
            <View>
                {this.renderAlbumList()}
            </View>
        );
    }
}

export default AlbumsList;
