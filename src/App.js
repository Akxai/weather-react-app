// import logo from "./menu.svg";
// import location from "./map-pin.svg";
// import down from "./chevron-down.svg";
// import moon from "./moon.svg";
import cloud from "./cloud.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="w-12 h-12"></div>
      <div class="flex justify-between">
        <div class="my-2 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-white"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div class="flex my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-blue-600"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span class="text-white mx-2">Hyderabad</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-white"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="bg-gray-700 rounded-3xl relative right-2">
          <div class="flex my-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-white stroke-2 w-7 h-7 relative left-1"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-none fill-blue-500 bg-white rounded-full w-7 h-7 relative left-2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-left text-2xl font-sans font-bold text-white p-4">
          Today's Report
        </h3>
      </div>
      <div>
        <img class="w-48 h-48 mx-auto m-10" src={cloud}></img>
      </div>
      <div class="flex flex-col justify-center m-5">
        <h4 class="text-white font-semibold">Its Cloudy</h4>
        <h1 class="text-white text-7xl font-mono ordinal font-bold relative left-4">
          29
          <span class="text-blue-700 text-6xl font-mono relative bottom-1.5">
            °
          </span>
        </h1>
      </div>
      <div class="flex justify-around mt-11 mb-11">
        <div>
          <img
            class="w-16 h-16"
            src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
          ></img>
          <p class="text-white font-mono">30%</p>
          <span class="text-slate-400 font-mono font-thin text-xs">
            Humidity
          </span>
        </div>
        <div>
          <img
            class="w-16 h-16"
            src="https://cdn-icons-png.flaticon.com/512/4814/4814268.png"
          ></img>
          <p class="text-white font-mono">23 Km/h</p>
          <span class="text-slate-400 font-mono font-thin text-xs">Sun</span>
        </div>
        <div>
          <img
            class="w-16 h-16"
            src="https://cdn-icons-png.flaticon.com/512/3093/3093390.png"
          ></img>
          <p class="text-white font-mono">23 Km/h</p>
          <span class="text-slate-400 font-mono font-thin text-xs">
            Raining
          </span>
        </div>
      </div>
      <div class="max-w-2xl bg-slate-900 h-24 m-7 rounded-2xl flex justify-around items-center mx-auto">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fill-blue-600 w-8 h-8 stroke-none"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8 stroke-slate-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8 stroke-slate-500"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8 stroke-slate-500"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
