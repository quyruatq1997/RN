import * as React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';


export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let album_list = [
            {
                id: '1',
                title: 'Dota 2',
                img: 'http://cdn.dota2.com/apps/dota2/images/nav/logo.png',
            },
            {
                id: '2',
                title: 'League Of Legend',
                img: 'https://lienminh.garena.vn/templates/lmht_2013/images/logo_lmht.png',
            },
            {
                id: '1',
                title: 'Dota 2',
                img: 'http://cdn.dota2.com/apps/dota2/images/nav/logo.png',
            },
            {
                id: '2',
                title: 'League Of Legend',
                img: 'https://lienminh.garena.vn/templates/lmht_2013/images/logo_lmht.png',
            },
            {
                id: '1',
                title: 'Dota 2',
                img: 'http://cdn.dota2.com/apps/dota2/images/nav/logo.png',
            },
            {
                id: '2',
                title: 'League Of Legend',
                img: 'https://lienminh.garena.vn/templates/lmht_2013/images/logo_lmht.png',
            },
            {
                id: '1',
                title: 'Dota 2',
                img: 'http://cdn.dota2.com/apps/dota2/images/nav/logo.png',
            },
            {
                id: '2',
                title: 'League Of Legend',
                img: 'https://lienminh.garena.vn/templates/lmht_2013/images/logo_lmht.png',
            },
        ];
        return (
            <View style={styles.container}>
                <FlatList
                    data={album_list}
                    numColumns={1}
                    contentContainerStyle={{justifyContent: 'center'}}
                    renderItem={({item}) =>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={styles.album}
                                onPress={() => this.props.navigation.navigate('Albums', {
                                    title: item.title,
                                    id: item.id,
                                })}>
                                <Image style={styles.album_img}
                                       source={{uri: item.img}}
                                       resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Text style={{margin: 7}}>{item.title}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,
    },
    album: {
        width: '30%',
        margin: 7,
        borderRadius: 20,
        borderWidth: 1,
    },
    album_img: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        margin: 7,
    },
});
