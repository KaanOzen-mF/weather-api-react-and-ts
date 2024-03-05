import { useState, useEffect } from "react";
import "./App.css";
import DisplayCityWeather from "./components/CityWeatherComponents/DisplayCityWeather";
import { DisplayWeather } from "./components/WeatherComponents/DisplayWeather";
import DisplayForecastWeather from "./components/ForecastWeatherComponents/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavbarComponents/WeatherNavBar";
import { WeatherGraphs } from "./components/WeatherGraphsComponents/WeatherGraphs";
import { TemperatureProvider } from "./components/TemperatureContext";
import {
  MainPage,
  WeatherMainPageContainer,
  WeatherMainPageLeftContainer,
  WeatherMainPageRightContainer,
} from "./components/styles.module";

// Define the structure for the user's location state
interface UserLocation {
  lat: number | null;
  lng: number | null;
}

function App() {
  // Background state based on weather conditions
  const [background, setBackground] = useState<string>("");

  // Currently selected city for weather details
  const [selectedCity, setSelectedCity] = useState<string>("");

  // Application loading state
  const [isLoading, setIsLoading] = useState(true);

  // Location modal visibility state
  const [showLocationModal, setShowLocationModal] = useState(false);

  // User's location state
  const [userLocation, setUserLocation] = useState<UserLocation>({
    lat: null,
    lng: null,
  });

  // Check for geolocation permission and fetch user's location
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Fetch user's location and update the state
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setShowLocationModal(false); // Hide the modal
        },
        (error) => {
          console.error(
            "Access to location was denied or an error occurred:",
            error
          );
          setShowLocationModal(false); // Hide the modal and use default location
          setUserLocation({ lat: 37.0, lng: 35.3213 }); // Coordinates of Adana
        }
      );
    };

    if ("geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (
            permissionStatus.state === "granted" ||
            permissionStatus.state === "prompt"
          ) {
            fetchLocation(); // Fetch location if permission is granted or will be asked
          } else {
            setShowLocationModal(true); // Show modal if permission is denied
          }
        });
    } else {
      console.log("This browser does not support geolocation.");
      setUserLocation({ lat: 37.0, lng: 35.3213 }); // Use default location if geolocation is not supported
    }
  }, []);

  // Handle giving location permission by the user
  const handleLocationPermission = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update userLocation state with the fetched coordinates
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setShowLocationModal(false); // Hide the modal after getting the permission
        },
        (error) => {
          // This part will work if location permission is denied or an error occurred
          console.error("Location permission denied or error occurred:", error);
          setShowLocationModal(false); // Hide the modal in case of an error
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Handle the user choosing to continue without giving location permission
  const handleContinueWithoutLocation = () => {
    setShowLocationModal(false);
  };

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle city selection from the navbar
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  // Main rendering logic
  if (isLoading) return <div className="loading">Loading...</div>;

  // Location permission modal
  if (showLocationModal) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>We need your location</h2>
          <p>
            Please allow location access to use this service, or continue
            without location information.
          </p>
          <button onClick={handleLocationPermission}>
            Give Location Access
          </button>
          <button
            onClick={handleContinueWithoutLocation}
            className="secondary-button"
          >
            Continue Without Location
          </button>
        </div>
      </div>
    );
  }

  // Main app content
  return (
    <TemperatureProvider>
      <MainPage style={{ backgroundImage: `url(${background})` }}>
        <WeatherNavBar onCitySelect={handleCitySelect} />
        <WeatherMainPageContainer>
          <WeatherMainPageLeftContainer>
            <DisplayWeather
              setBackground={setBackground}
              selectedCity={selectedCity}
            />
            <WeatherGraphs selectedCity={selectedCity} />
          </WeatherMainPageLeftContainer>
          <WeatherMainPageRightContainer>
            <DisplayForecastWeather
              selectedCity={selectedCity}
              userLocation={userLocation}
            />
            <DisplayCityWeather />
          </WeatherMainPageRightContainer>
        </WeatherMainPageContainer>
      </MainPage>
    </TemperatureProvider>
  );
}

export default App;
