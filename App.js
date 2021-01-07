import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";

const API_KEY = "66990731143848af13fc778c38ef3455";

export default function App() {
  const [condition, setCondition] = useState('')
  const [temp, setTemp] = useState(null)

  const getWeather = async (latitude, longitude) => {
    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setTemp(data.main.temp)
    setCondition(data.weather[0].main);
    
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude)
    }

    catch (error) {
      console.log(error)
      Alert.alert("Can't find you.", "So sad")
    }

  }
  useEffect(() => {
    getLocation();
  }, [])

  return (
    <Weather temp={Math.round(temp)} condition={condition} />
  )

}


      //웹에서는 flexDirection이 row지만 모바일에서는 column이다
      //flex 1은 모든 공간의 사용이 가능
      // 자식간의 관계에서 flex는 부모를 기준으로 서로 차지하는 기준을 정한다
      // 한 자식이 2, 다른 자식이 1을 기준으로 하면 2로 설정한 자식이 부모의 2/3을 차지한다