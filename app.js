import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Platform,
    TextInput,
    Button,
    ScrollView,
    Dimensions,

} from 'react-native';

export default class app extends Component {
    constructor(props){
        super(props);
        this.state = {currentPage:0};
    }
    render (){
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <TextInput style={styles.input} placeholder='搜索商品'>
                    </TextInput>
                    <Button style={styles.button} title='search'></Button>
                </View>
                <View style={styles.advertisingment}>
                    <ScrollView ref='scrollView' horizontal={true} pagingEnabled={true}>
                        <Text style={
                            {width:Dimensions.get('window').width,
                                height:180,
                                backgroundColor:'gray'}
                        }>
                            产品1
                        </Text>
                        <Text style={
                            {width:Dimensions.get('window').width,
                                height:180,
                                backgroundColor:'red'}
                        }>
                            产品2
                        </Text>
                        <Text style={
                            {width:Dimensions.get('window').width,
                                height:180,
                                backgroundColor:'blue'}
                        }>
                            产品3
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.products}>
                    <Text>
                        产品
                    </Text>
                </View>
            </View>
        );
    }


    componentDidMount(){
        this._startTimer();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    _startTimer(){
        this.interval = setInterval(() => {
            nextPage = this.state.currentPage + 1;
            if (nextPage >= 3){
                nextPage = 0;
            }
            this.setState({currentPage:nextPage});
            const offSetX = nextPage * Dimensions.get('window').width;
            this.refs.scrollView.scrollResponderScrollTo({x:offSetX,y:0,animated:true});
        },2000);
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    searchbar:{
        marginTop:Platform.OS === 'ios'
            ?20
            :0,
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    input:{
        flex:1,
        borderColor:'gray',
        borderWidth:2
    },button:{
        flex:1
    },
    advertisingment:{
        height:180
    },
    products:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    }
});
