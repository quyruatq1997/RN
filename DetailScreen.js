import * as React from 'react';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {img} = this.props.route.params
        return (
            <View style={styles.container}>
                <Image style={{width: '80%', height: '50%'}} source={{uri: img}} resizeMode='contain'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
    },
});
