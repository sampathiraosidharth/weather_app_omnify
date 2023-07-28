# weather_app_omnify
THIS APPLICATION FOCUS ON A BASIC MODEL OF DESINING A FULL STACK WEATHER FORECASTING APP WHICH IS USING MERN FRAMEWORK TO PROCESS.
# WEATHER APPLICATION
## REACT APP
### Creating / installing the frontend
-> npm create-react-app OMNIFYWEATHWEAPP
        this command helps us to create a react app using the node modules.

-> npm install axios 
        this command helps us to enable and install the axios package which is responsible for the backend connections.

-> npx install -d tailwindcss
-> npm tailwind init 
        tail wind is a external extension which i am using here to make the css. change the config of the css according to the refernece : https://tailwindcss.com/docs/guides/create-react-app

### Creating / installing the backend
-> npm init -y installing the node.js for installing the node modules.
-> npm install express : so i've handeled the backend using the express js

## Weather API
### https://openweathermap.org/api : this is the external API which i used to build my application.
    fields which could be added to the application as given in the reference are :

    Fields in API response

coord
coord.lon Longitude of the location
coord.lat Latitude of the location
weather (more info Weather condition codes)
weather.id Weather condition id
weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
weather.description Weather condition within the group. You can get the output in your language. Learn more
weather.icon Weather icon id
base Internal parameter
main
main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.feels_like Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
main.humidity Humidity, %
main.temp_min Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.temp_max Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.sea_level Atmospheric pressure on the sea level, hPa
main.grnd_level Atmospheric pressure on the ground level, hPa
visibility Visibility, meter. The maximum value of the visibility is 10km
wind
wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
wind.deg Wind direction, degrees (meteorological)
wind.gust Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
clouds
clouds.all Cloudiness, %
rain
rain.1h (where available) Rain volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
rain.3h (where available) Rain volume for the last 3 hours, mm. PPlease note that only mm as units of measurement are available for this parameter.
snow
snow.1h(where available) Snow volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
snow.3h (where available)Snow volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter.
dt Time of data calculation, unix, UTC
sys
sys.type Internal parameter
sys.id Internal parameter
sys.message Internal parameter
sys.country Country code (GB, JP etc.)
sys.sunrise Sunrise time, unix, UTC
sys.sunset Sunset time, unix, UTC
timezone Shift in seconds from UTC
id City ID. Please note that built-in geocoder functionality has been deprecated. 
name City name. Please note that built-in geocoder functionality has been deprecated. 
cod Internal parameter

## THIS APPLICATION FOCUS ON A BASIC MODEL OF DESINING A FULL STACK WEATHER FORECASTING APP WHICH IS USING MERN FRAMEWORK TO PROCESS.
