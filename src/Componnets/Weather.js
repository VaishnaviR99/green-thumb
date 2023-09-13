import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";


export default function Weather() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [refreshing, setRefreshing] = useState(false);



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    })(); //anonymous function call
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = "dbc2556638a4ceade633640964d9fcb2";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      setRefreshing(true);

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
        console.log(weatherData, "DDaaataaaAA");
      } else {
        console.error("Error fetching weather data:", data.message);
        setRefreshing(false);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setRefreshing(false);
    }
  };
  const handleRefresh = () => {
    
    fetchWeatherData(latitude, longitude);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  }

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.cityName}>
          {weatherData.name}, {weatherData.sys?.country}
        </Text>

        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <MaterialCommunityIcons name="refresh" size={40} color="#7ed957" />
        </TouchableOpacity>
      </View>

      <Text style={styles.temperature}>{weatherData.main?.temp}°C</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}.png`,
        }}
        style={styles.weatherIcon}
      />
      <Text style={styles.weatherDescription}>
        {weatherData.weather?.[0]?.description}
      </Text>
      <View style={styles.details}>
        <View style={styles.detail}>
          <MaterialCommunityIcons name="clock" size={26} color="#7ed957" />
          <Text style={styles.detailText}>
            Date & Time: {new Date(weatherData.dt * 1000).toLocaleString()}
          </Text>
        </View>
        <View style={styles.detail}>
          <MaterialCommunityIcons
            name="weather-windy"
            size={26}
            color="#7ed957"
          />
          <Text style={styles.detailText}>
            Wind Speed: {weatherData.wind?.speed} m/s
          </Text>
        </View>
        <View style={styles.detail}>
          <MaterialCommunityIcons name="water" size={26} color="#7ed957" />
          <Text style={styles.detailText}>
            Humidity: {weatherData.main?.humidity}%
          </Text>
        </View>
        <View style={styles.detail}>
          <MaterialCommunityIcons
            name="weather-rainy"
            size={26}
            color="#7ed957"
          />
          <Text style={styles.detailText}>
            Rain: {weatherData.rain?.["1h"]} mm/h
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    margin: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 48,
  },
  weatherIcon: {
    //width: 100,
    height: 150,
    resizeMode:"contain"
  },
  weatherDescription: {
    fontSize: 18,
    alignSelf:"center",
  },
  details: {
    marginTop: 20,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
