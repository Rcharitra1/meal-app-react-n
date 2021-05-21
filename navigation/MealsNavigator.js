import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors'
const MealsNavigator=createStackNavigator({
    Categories: {screen:CategoriesScreen,
    navigationOptions:{
        headerTitle:'Meals Categories'
    }},
    CategoryMeals : {
        screen: CategoryMealsScreen
    },
    MealDetail :{
        screen:MealDetailScreen,
        navigationOptions:{
            headerTitle:'Details'
        }
        
    }

}, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS==='android' ?Colors.primary: 'transparent'
        },
        headerTintColor: Platform.OS==='android'? 'white' : Colors.primary
    }
},);

export default createAppContainer(MealsNavigator);
