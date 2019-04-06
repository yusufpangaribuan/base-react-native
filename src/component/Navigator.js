import { createAppContainer, createStackNavigator } from "react-navigation";
import { route, config }                            from "~/config/route";
// you can also import from @react-navigation/native

const AppNavigator = createStackNavigator(route, config);

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;