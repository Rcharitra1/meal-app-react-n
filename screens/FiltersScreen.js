import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HelperButton';


const FiltersScreen = (props)=>{
    return(
        <View style={styles.screen}>
            <Text>Filter Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    

});

FiltersScreen.navigationOptions=navData =>{
    return{
        headerTitle:'Filters',
        headerLeft : ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
        </HeaderButtons>
    }
}



export default FiltersScreen;