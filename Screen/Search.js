import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TouchableHighlight,
    Dimensions,
    TextInput

} from 'react-native';
import { CommonActions, StackActions } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sectionData = {
    title: 'Trending',
    items: [
        {
            foodName: 'Mỳ xào bò',
            resName: 'Mỳ xào cô bảy',
            rating: 4,
            price: 30000
        },
        {
            foodName: 'Bánh mì chả bò',
            resName: 'Tuấn Mập',
            rating: 5,
            price: 20000
        },
        {
            foodName: 'Cơm chiên dương châu',
            resName: 'Quán cơm 67',
            rating: 4,
            price: 50000
        },
        {
            foodName: 'Bún bò Huế',
            resName: 'Quán quê hương',
            rating: 3,
            price: 50000
        }

    ]
}

function renderSectionData(items) {
    let arr = [];
    items.forEach(function (item) {
        let tmp =
            <TouchableOpacity style={styles.sectionItemsBtn}>
                <Image style={styles.sectionImg}
                    source={require('../Pics/home1.jpg')}
                />
                <View style={styles.sectionInf}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>
                        {item.foodName}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'lightgray' }}>
                        {item.resName}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom: 2, width: '100%', position: 'absolute', }}>
                        <Text>
                            Rating : {item.rating}
                        </Text>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        arr.push(tmp);
    });
    return arr;


}
const Header = ({ navigation }) =>
    <View style={styles.header}>
        <TouchableOpacity style={{ marginRight: 10 }}
            onPress={() => navigation.pop()}

        >
            <MaterialIcons name={'keyboard-arrow-left'} size={40} color='white' />
        </TouchableOpacity>
        <TextInput placeholder='Place, food , ect.'
            style={{
                width: screenWidth * 0.8,
                height: 40,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 5,
                padding: 5,
            }} />
    </View>

class Home extends Component {
    constructor(props) {
        super(props);
        const navigation = this.props.navigation;
    }
    componentDidMount() {
        console.log('I did mount');
        return 1;
    }
    componentWillUnmount() {
        console.log('I will unmount');
        return 1;
    }
    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <FlatList
                    data={sectionData.items}
                    style={styles.list}
                    keyExtractor={(item, idx) => idx}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.sectionItemsBtn}>
                            <Image style={styles.sectionImg}
                                source={require('../Pics/home1.jpg')}
                            />
                            <View style={styles.sectionInf}>
                                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 5 }}>
                                    {item.foodName}
                                </Text>
                                <Text style={{ fontSize: 12, color: 'lightgray', marginBottom: 5 }}>
                                    {item.resName}
                                </Text>

                                <Text style={{ marginBottom: 5 }}>
                                    Rating : {item.rating}
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {item.price}
                                </Text>

                            </View>
                        </TouchableOpacity>}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        //flex: 1,
        backgroundColor: '#ed185f',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
        paddingLeft: 0,

    },
    list: {
        paddingRight: 20,
        width: screenWidth,
        //borderWidth: 1,
    },
    sectionItemsBtn: {
        flexDirection: 'row',
        width: '100%',
        height: screenHeight * 0.15,
        margin: 10,
        marginBottom: 10,
        padding: 10,
        //borderWidth: 2,
        //borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },


    },
    sectionView: {
        width: screenWidth,
        height: screenHeight * 0.3,
    },
    sectionContainer: {

        flex: 1,
    },
    sectionImg: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'cover',
        //borderWidth: 1,

    },
    sectionInf: {
        flexDirection: 'column',
        flex: 4,
        padding: 5,
        //borderWidth: 1,
        //borderColor: 'black',
    }
});
export default Home;