import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types'
import { Fontisto } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'
import Loading from './Loading';

const main = [
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
]

const weatherOptions = {
    Thunderstorm: {
        iconName: "flash",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "rain",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "umbrella",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "snowflake",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Mist: {
        iconName: "day-haze",
        gradient: ["#eef2f3", "#8e9eab"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "day-haze",
        gradient: ["#D7D2CC", "#414345"],
        title: "Smoke",
        subtitle: "Put on your Mask."
    },
    Haze: {
        iconName: "day-haze",
        gradient: ["#eef2f3", "#304352"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: "fog",
        gradient: ["#3C3B3F", "#605C3C"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Fog: {
        iconName: "fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Fog",
        subtitle: "Mist"
    },
    Sand: {
        iconName: "fog",
        gradient: ["#3C3B3F", "#D39D38"],
        title: "Sand",
        subtitle: "The sky is Yellow"
    },
    Ash: {
        iconName: "fog",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Ash",
        subtitle: "Another one bites the dust"
    },
    Squall: {
        iconName: "wind",
        gradient: ["#3b8d99", "#243B55"],
        title: "Squall",
        subtitle: "Stay..."
    },
    Tornado: {
        iconName: "wind",
        gradient: ["#bdc3c7", "#141E30"],
        title: "Tornado",
        subtitle: "Oh, God..."
    },
    Clear: {
        iconName: "day-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    }
}

function Weather({ temp, condition }) {
    console.log(condition)

    if (weatherOptions[condition] === undefined) {
        return (
            <Loading/>
        )
    }
    else {
        return (
            <LinearGradient
                // Background Linear Gradient
                colors={weatherOptions[condition].gradient}
                style={style.container}
            >
                <StatusBar style="light" />
                <View style={style.halfContainer}>
                    <Fontisto
                        size={96}
                        name={weatherOptions[condition].iconName}
                        color="white"
                    />
                    <Text style={style.temp}>{temp}°</Text>
                </View>
                <View style={{...style.halfContainer, ...style.textContainer}}>
                    <Text style={style.title}>{weatherOptions[condition].title}</Text>
                    <Text style={style.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
        )
    }
}

export default Weather

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(main).isRequired
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: 'white',
        fontSize:24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
}) 