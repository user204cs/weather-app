# Weather App 🌦️

A simple React weather application built with Vite. Enter a city name to get real-time weather information using the OpenWeatherMap API.

## Features
- Search for current weather by city name
- Displays temperature, location, humidity, wind speed, and weather icon
- Responsive and clean UI
- Error handling for invalid city names and API issues

## Screenshots
(Add your own screenshots here)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd weatehr app/vite-project
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the `vite-project` directory:
     ```env
     VITE_APP_ID=your_openweathermap_api_key
     ```
   - Get your API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` by default.

## Usage
- Enter a city name in the search bar and click the search icon.
- Weather information for the city will be displayed.
- If the city is not found or the API key is invalid, an error message will appear.

## Project Structure
```
weatehr app/
  vite-project/
    src/
      components/
        Weather.jsx
        Weather.css
      App.jsx
      main.jsx
      index.css
    public/
    .env
    package.json
    ...
```

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## License
This project is for educational purposes.
