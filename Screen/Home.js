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
function renderItem(data) {
    let a = [];
    data.forEach(e => {
        let tmp = <Image
            style={styles.slideImg}
            source={require('../Pics/home1.jpg')}
        />
        a.push(tmp);
    })
    return a;
}
function renderSectionData(items, navigation) {
    let arr = [];
    items.forEach(function (item) {
        let tmp =
            <TouchableOpacity style={styles.sectionItemsBtn}
                onPress={() => { navigation.navigate('FoodDetails') }}
            >
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

const Section = ({ title, items, navigation }) =>
    <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingRight: 20 }}>
            <Text style={{ fontWeight: '700', fontSize: 17 }}>{title}</Text>
            <TouchableOpacity>
                <Text style={{ color: 'red' }}>View All</Text>
            </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderSectionData(items, navigation)}
        </ScrollView>
    </View>
class Home extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.unFocusTextInput = this.unFocusTextInput.bind(this);

    }
    unFocusTextInput() {
        this.textInput.current.blur();

    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.header}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Browse</Text>
                    <TextInput placeholder='Place, food , ect.'
                        style={{
                            marginTop: 10,
                            width: '100%',
                            height: 40,
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: 5,
                            padding: 5,
                        }}
                        ref={this.textInput}
                        onFocus={() => {
                            this.props.navigation.navigate('Search', this.unFocusTextInput())
                        }}
                    />

                </View>
                <ScrollView style={{ padding: 5 }}>
                    <View style={styles.welcomeSectionView}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator
                        >
                            {renderItem(data)}
                        </ScrollView>
                    </View>
                    <View style={styles.sectionView}>
                        <Section title={sectionData.title} items={sectionData.items} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.sectionView}>
                        <Section title='Popular' items={sectionData.items} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.sectionView}>
                        <Section title='Free Ship' items={sectionData.items} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.sectionView}>
                        <Section title='Family' items={sectionData.items} navigation={this.props.navigation} />
                    </View>

                </ScrollView>
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
        height: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,

    },
    scrollV: {
        //flex: 7,
    },
    welcomeSectionView: {
        width: '100%',
        height: 200,

    },
    containSlideImg: {
        flex: 1,
    },
    slideImg: {
        //flex: 1,
        width: screenWidth,
        height: 200,
        resizeMode: 'center',
    },
    sectionItemsBtn: {
        flex: 1,
        flexDirection: 'column',
        width: screenWidth * 0.5,
        margin: 10,
        marginBottom: 40,
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
        flex: 3,
        width: null,
        height: null,
        resizeMode: 'center'

    },
    sectionInf: {
        flex: 2,
        padding: 5,
        //borderWidth: 1,
        //borderColor: 'black',
    }
});
export default Home;