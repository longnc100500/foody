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
    TextInput,
    Modal

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import resDetails from '../redux/reducers/resDetails';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const data = {
    name: 'Mì Xào Trứng & Mì Ý',
    addr: '160/3 Võ Thị Sáu, P.8, Quận 3, TP.HCM',
    start: '15:00',
    end: '22:00',
    pics: 'https://www.foody.vn/ho-chi-minh/mi-xao-bo-trung-mi-y',
    rating: 5,

}

const Header = ({ title, navigation, likeStatus, like, unlike }) =>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign name={'close'} size={25} color={'white'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>{title}</Text>
        <TouchableOpacity onPress={likeStatus === true ? () => { unlike() } : () => { like() }}>
            <MaterialIcons name={likeStatus === true ? 'favorite' : 'favorite-border'} size={25} color={'white'} />
        </TouchableOpacity>
    </View>

class ResDetails extends Component {
    constructor(props) {
        super(props);
        this.CartButton = this.CartButton.bind(this);

    }

    componentDidMount() {
        console.log(this.props.modalData);
        return true;
    }
    CartButton = (amount, navigation) => {
        if (amount !== 0) {
            return <TouchableOpacity style={styles.addToCartBtn}
                onPress={() => navigation.navigate('Order')}
            >
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Gio hang : {this.props.cartData.amount}</Text>
            </TouchableOpacity>

        }
        else
            return <View></View>
    }
    render() {
        const { modalData, showModal, hideModal, navigation, like, likeHandle, unlikeHandle, increase, decrease, addToCartHandle, resMenu } = this.props;
        //const modalData = { name: 'Thit bo xao hanh', price: '50.000', currentAmount: 0, };
        return (

            <View style={styles.container} >
                <Header title={data.name} navigation={navigation} likeStatus={like} like={likeHandle} unlike={unlikeHandle} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalData.visible}

                >
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 10, left: 10 }}
                            onPress={() => { hideModal() }}

                        >
                            <AntDesign name={'close'} size={25} color={'black'} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{modalData.item.infor.name}</Text>
                            <Text >{modalData.item.infor.price}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.addToCartBtn}
                            onPress={() => {
                                addToCartHandle(modalData.item);
                                hideModal()
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Them vao gio hang</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', width: '80%', height: 100, marginTop: 30, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                            <TouchableOpacity
                                style={{ margin: 20, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, backgroundColor: 'red' }}
                                onPress={() => { increase() }}
                                disabled={modalData.max === modalData.item.amount ? true : false}
                            >
                                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>+</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{modalData.item.amount}</Text>
                            <TouchableOpacity
                                style={{ margin: 20, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, backgroundColor: 'yellowgreen' }}
                                onPress={() => { decrease() }}
                                disabled={modalData.min === modalData.item.amount ? true : false}
                            >
                                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </Modal>

                <View>
                    <View style={styles.mainView}>
                        <Image
                            style={styles.avatarImg}
                            source={require('../Pics/login.jpg')}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>{data.name}</Text>
                        <Text style={{ padding: 5 }}>{data.rating}</Text>

                        <Text style={{ fontWeight: 'bold', padding: 5 }}>Mở cửa: {data.start}</Text>
                        <Text style={{ fontWeight: 'bold', padding: 5 }}>Đóng cửa: {data.end}</Text>

                        <View style={{ width: screenWidth, height: 1, backgroundColor: 'lightgray', marginVertical: 10 }}></View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>Menu</Text>
                        <View style={styles.mainMenu}>
                            {/* {renderItems(data.menu, this.showModal)} */}
                            <FlatList
                                data={resMenu}
                                numColumns={2}
                                keyExtractor={(item) => item.infor.id.toString()}
                                renderItem={({ item }) => <TouchableOpacity style={styles.foodBtn}
                                    onPress={() => showModal(item)}
                                >
                                    <Image
                                        source={require('../Pics/login.jpg')}
                                        style={styles.btnImg}
                                    />
                                    <Text style={{ marginVertical: 8, fontSize: 15, marginLeft: 10 }} >{item.infor.name}</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>{item.infor.price}</Text>
                                </TouchableOpacity>}
                            />
                        </View>
                    </View>
                </View>

                {this.CartButton(this.props.cartData.amount, navigation)}

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: screenWidth,
        height: screenHeight * 0.1,
        backgroundColor: '#ed185f',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainView: {
        flex: 1,

    },
    avatarImg: {
        width: screenWidth,
        height: 149,
        resizeMode: 'center',
    },
    popularView: {
        flexDirection: 'row',
        width: screenWidth,
        padding: 5,
        //flexDirection: 'column',
        flexWrap: 'wrap',

        justifyContent: 'space-around'

    },
    mainMenu: {
        width: screenWidth,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    foodBtn: {
        margin: 10,

        width: screenWidth * 0.4,
        height: screenWidth * 0.5,
        //borderRadius: 5,
        backgroundColor: 'white',
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        //borderWidth: 1,
    },
    btnImg: {
        width: '100%',
        height: '70%',
        resizeMode: 'center',
        borderRadius: 5,

    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        width: screenWidth,
        height: screenHeight * 0.8,

        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    addToCartBtn: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 40,
        width: '95%',
        height: 50,
        backgroundColor: 'pink',
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
    }

})
const mapStateToProps = (state) => {
    return {
        resMenu: state.resDetails.menu,
        cartData: state.resDetails.cart,
        like: state.resDetails.like,
        modalData: state.modal,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (data) => dispatch({ type: 'SHOW_MODAL', item: data }),
        hideModal: () => dispatch({ type: 'HIDE_MODAL' }),
        likeHandle: () => dispatch({ type: 'LIKE' }),
        unlikeHandle: () => dispatch({ type: 'UNLIKE' }),
        increase: () => dispatch({ type: 'INCREASE' }),
        decrease: () => dispatch({ type: 'DECREASE' }),
        addToCartHandle: (item) => dispatch({ type: 'ADD_ITEM', item: item })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResDetails);
//export default resDetails;