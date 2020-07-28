import React from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TextInput} from 'react-native';

const MOCKED_MOVIES_DATA = [
    {
        title: '标题1',
        year: '2015',
        posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg',},
    }
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81
    }
});

const App = () => {
    const movie = MOCKED_MOVIES_DATA;
    return (
        <View style={styles.container}>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
            <Image source={{uri: movie.posters.thumbnail}}/>
        </View>
    );
};
export default App;