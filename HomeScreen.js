import * as React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';

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
        ];
        return (
            <View style={styles.container}>
                <FlatList
                    data={album_list}
                    contentContainerStyle={{ justifyContent: 'center'}}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Details', {
                                title: item.title,
                                id: item.id
                            })}>
                            <Image style={{
                                width: '80%',
                                height: 200,
                                margin: 7,
                                borderRadius: 2,
                                borderBottomWidth: 1,

                                alignSelf: 'center'
                            }}
                                   source={{uri: item.img}}
                                   resizeMode='contain'
                            />
                        </TouchableOpacity>
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

});
