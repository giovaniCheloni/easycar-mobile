import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/home/home.jsx";
import Passenger from "./screens/passenger/passenger.jsx";
import Ride from "./screens/ride/ride.jsx";
import RideDetail from "./screens/ride-detail/ride-detail.jsx";

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="home" component={Home}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen name="passenger" component={Passenger}
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerTransparent: true,
                    animation: "slide_from_right"
                }} />

            <Stack.Screen name="ride" component={Ride}
                options={{
                    headerTitle: "Viagens Disponíveis",
                    headerTitleAlign: "center",
                    animation: "slide_from_left"
                }} />

            <Stack.Screen name="ride-detail" component={RideDetail}
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerTransparent: true,
                    animation: "slide_from_bottom"
                }} />


        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;