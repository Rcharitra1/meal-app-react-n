import React, {useEffect, useCallback} from 'react';
import { View,  StyleSheet, ShadowPropTypesIOS } from 'react-native';


import { useSelector, useDispatch } from 'react-redux'
import MealDetailTile from '../components/MealDetailTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HelperButton';
import {toggleFavorite} from '../store/actions/meals'

const MealDetailScreen = (props)=>{
    const mealId = props.navigation.getParam('mealId');
    const isFavMeal  = useSelector(state => state.meals.favoriteMeals.some(meal=>meal.id==mealId));
    const availableMeals = useSelector(state => state.meals.meals);
    const meal = availableMeals.find((item)=> item.id === mealId);

    

    

    

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(()=>{
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);

    useEffect(()=>{
        props.navigation.setParams({toggleFavHandler: toggleFavHandler})

   
        
    }, [meal])

    useEffect(()=>{
        props.navigation.setParams({isFav:isFavMeal})
    }, [isFavMeal])

    return(
        <View style={styles.screen}>
            <MealDetailTile ingredients={meal.ingredients} steps ={meal.steps} title = {meal.title} image={meal.imageUrl} afford={meal.afforadability} time={meal.duration} complex={meal.complexity}/>
          
        </View>
    );
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle =navigationData.navigation.getParam('mealTitle');
    const toggleFavFunc = navigationData.navigation.getParam('toggleFavHandler');
    const isFav = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Fav' iconName={isFav?'ios-star':'ios-star-outline'} onPress={toggleFavFunc}/>
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    }
});

export default MealDetailScreen;

