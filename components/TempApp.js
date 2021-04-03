import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LottieView from "lottie-react-native";

export default function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("New Delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7ccbcdf6dd1f75b8a0b630d1930fb36`;
      const response = await fetch(URL);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        height: "90%",
        width: "90%",
      }}
    >
      {!city ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
            elevation: 20,
          }}
        >
          <View>
            <LottieView
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../assets/not_found.json")}
              autoPlay
              loop
            />
            <View>
              <TextInput
                style={{
                  //   borderWidth: 5,s
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                  textAlign: "center",
                  fontSize: 24,
                  height: 60,
                  backgroundColor: "powderblue",
                  color: "#FFF",
                }}
                autoCapitalize={true}
                autoFocus={true}
                placeholder="Search"
                value={search}
                onChangeText={(search) => {
                  setSearch(search);
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "skyblue",
            justifyContent: "center",
            alignItems: "center",
            elevation: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 30, color: "#FFF" }}>{city.temp}</Text>
          <Text style={{ fontSize: 30, color: "#FFF" }}>{search}</Text>

          <View>
            <TextInput
              style={{
                //   borderWidth: 5,s
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
                textAlign: "center",
                fontSize: 24,
                height: 60,
                backgroundColor: "#FFF",
                width: 300,
                color: "powderblue",
              }}
              autoCapitalize={true}
              autoFocus={true}
              placeholder="Search"
              value={search}
              onChangeText={(search) => {
                setSearch(search);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
