import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetails = (props) => 
    (
        <View>
        <Text>{props.album.title}</Text>
        </View>
    );

export default AlbumDetails;
