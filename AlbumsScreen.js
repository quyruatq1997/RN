import * as React from 'react';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export class AlbumsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataSource: [], imgUrl: ''};
    }

    getDota2Heroes() {
        return fetch('https://api.opendota.com/api/heroStats')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: Object.keys(responseJson).map((key) => (responseJson[key]['img'].split('/'))[5]),
                    imgUrl: 'http://cdn.dota2.com/apps/dota2/images/heroes/',
                });
            })
            .catch((error) => {
                console.error(error);
            });
        // http://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png
    }

    getLolChapmions() {
        return fetch('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: Object.keys(responseJson['data']).map((key) => responseJson['data'][key]),
                    imgUrl: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/',
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //  http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Aatrox.png
    }

    componentDidMount() {
        const {title} = this.props.route.params;
        if (title === 'Dota 2') {
            this.getDota2Heroes();
        } else {
            this.getLolChapmions();
        }
    }

    render() {
        const {id} = this.props.route.params;
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    numColumns={4}
                    contentContainerStyle={{justifyContent: 'center'}}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => this.props.navigation.navigate('Detail', {
                                img: id === '1' ? this.state.imgUrl + item.replace('?', '') : this.state.imgUrl + item['image']['full'],
                            })}
                        >
                            <Image style={styles.item_img}
                                   source={{uri: id === '1' ? this.state.imgUrl + item.replace('?', '') : this.state.imgUrl + item['image']['full']}}
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
    item: {
        width: '21%',
        margin: 7,
        borderRadius: 7,
        alignItems: 'center',
    },
    item_img: {
        width: '80%',
        height: 100,
        borderRadius: 7,
    },
});
