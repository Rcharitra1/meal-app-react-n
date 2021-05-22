import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HelperButton'

const FavoritesScreen = props =>{

    let favoriteMeals = MEALS.filter((meal)=> meal.id==='m1' || meal.id==='m4');


    let renderScreen = <View style={styles.noItemView}><Text style={styles.noItem}>No Meals in favorites screen</Text></View>
    if(favoriteMeals.length>0)
    {
        renderScreen = <MealList meals={favoriteMeals} navigation = {props.navigation}/>
    }
    return(
        <View style={styles.screen}>
        {renderScreen}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        screen:{
            flex:1,
        },
        noItemView:{
            justifyContent:'center',
            alignItems:'center',
            flex: 1
        },
        noItem:{
            fontFamily:'open-sans',
            fontSize:22,
            textAlign:'center',
            
            
        }
    }
)


FavoritesScreen.navigationOptions =(navData)=>{
    return{
        headerTitle:'Favorites',
        headerLeft :()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
        </HeaderButtons>
    }
        
}

export default FavoritesScreen;