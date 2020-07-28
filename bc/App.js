import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const MOCKED_MOVIES_DATA = [
    {
        title: '标题1',
        year: '2015',
        posters: { thumbnail: 'https://img.mofyi.com/202007/2214592217132.png', },
    }
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});

const App = () => {
    const movie = MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: movie.posters.thumbnail }}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.tilte}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>
    );
};
export default App;