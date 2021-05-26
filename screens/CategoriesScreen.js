import React from 'react';
import {  FlatList, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HelperButton';



const CategoriesScreen = (props)=>{
    const renderGridItem = (itemData)=>{
        return <CategoryGridTile title={itemData.item.title} onSelect={()=>{ props.navigation.navigate({routeName: 'CategoryMeals', params:{
            categoryId : itemData.item.id,
            mealTitle:itemData.item.title
        }})}}
        color={itemData.item.color}
        />
        
    }
 
    return(
        <FlatList data={CATEGORIES} renderItem ={renderGridItem} numColumns={2}/>
    );
}

CategoriesScreen.navigationOptions =(navData)=> {

    return{
    headerTitle:'Meals Categories',
    headerLeft : ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
    </HeaderButtons>
    }
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    

});

export default CategoriesScreen;