import React from 'react';
import { Platform } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/colors'
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions={
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS==='android' ?Colors.primary: 'transparent'
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerTintColor: Platform.OS==='android'? 'white' : Colors.primary
    }
}
const MealsNavigator=createStackNavigator({
    Categories: {screen:CategoriesScreen},
    CategoryMeals : {
        screen: CategoryMealsScreen
    },
    MealDetail :{
        screen:MealDetailScreen,
        
    }
}, defaultStackNavOptions,);


const FavNavComp=createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail :MealDetailScreen
},defaultStackNavOptions);

const tabSpecs =   {
    Meals: {screen: MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },

    },
 
 },
    Favorites: {
        screen:FavNavComp,
        navigationOptions:{
            tabBarIcon:(tabinfo)=>{
                return <Ionicons name='ios-star' size={25} color={tabinfo.tintColor}/>
            },
            tabBarColor:Colors.secondary,
        }
    }
}

const MealsFavTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabSpecs, {
    activeTintColor: Colors.primary,
    shifting:true
}):
createBottomTabNavigator(
    tabSpecs,
    {
        tabBarOptions:{
            labelStyle:{
                fontFamily:'open-sans-bold'
            },
            activeTintColor:Colors.secondary,
            
        },
    }
);
const FilterNavigator = createStackNavigator({
    Filters : FiltersScreen
}, defaultStackNavOptions)


const MainNavigator = createDrawerNavigator({
    Mealsfavs:{
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FilterNavigator
},{
    contentOptions:{
        activeTintColor:Colors.secondary,
        labelStyle :{
            fontFamily:'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator);