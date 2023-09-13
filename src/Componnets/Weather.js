// import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
// import Geolocation from "react-native-geolocation-service";

// const WeatherApp = () => {
//   const [location, setLocation] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {

//     const requestLocationPermission = async () => {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: "Location Permission",
//             message: "This app requires access to your location.",
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {

//           Geolocation.getCurrentPosition(
//             (position) => {
//               setLocation(position.coords);
//               fetchWeatherData(
//                 position.coords.latitude,
//                 position.coords.longitude
//               );
//             },
//             (error) => {
//               console.error("Error getting location:", error);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//           );
//         } else {
//           console.error("Location permission denied");
//         }
//       } catch (err) {
//         console.error("Error requesting location permission:", err);
//       }
//     };

//     if (Platform.OS === "android") {
//       requestLocationPermission();
//     } else {

//       Geolocation.getCurrentPosition(
//         (position) => {
//           setLocation(position.coords);
//           fetchWeatherData(position.coords.latitude, position.coords.longitude);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     }
//   }, []);

//   const fetchWeatherData = async (latitude, longitude) => {
//     try {
//       const apiKey = "dbc2556638a4ceade633640964d9fcb2";
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       if (data.cod === 200) {
//         setWeatherData(data);
//       } else {
//         console.error("Error fetching weather data:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather App</Text>
//       {location && (
//         <View style={styles.locationInfo}>
//           <Text>Latitude: {location.latitude}</Text>
//           <Text>Longitude: {location.longitude}</Text>
//         </View>
//       )}
//       {weatherData && (
//         <View style={styles.weatherInfo}>
//           <Text>City: {weatherData.name}</Text>
//           <Text>Temperature: {weatherData.main.temp}°C</Text>
//           <Text>Description: {weatherData.weather[0].description}</Text>
//         </View>
//       )}
//       <Button
//         title="Refresh Weather"
//         onPress={() => {
//           fetchWeatherData(location.latitude, location.longitude);
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   locationInfo: {
//     marginTop: 20,
//   },
//   weatherInfo: {
//     marginTop: 20,
//   },
// });

// export default WeatherApp;


import React from 'react'

const Weather = () => {
  return (
      <View>
          <Text>Weather app</Text>
    </View>
  )
}

export default Weather