import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumsList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => { this.setState({ albums: response.data }); });
    }

    renderAlbumList() {
        return this.state.albums.map(album => <Text key={album.title}>{ album.title }</Text>);
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
