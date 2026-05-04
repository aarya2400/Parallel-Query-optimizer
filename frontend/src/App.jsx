// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// import { useState } from "react";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend
// } from "recharts";

// function App() {
//   const [data, setData] = useState(null);

//   const runTest = async () => {
//     const res = await axios.get("http://127.0.0.1:8000/run");
//     setData(res.data);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🚀 Parallel Query Optimizer</h1>

//       <button onClick={runTest}>Run Simulation</button>

//       {data && (
//         <>
//           <h2>Sequential Time: {data.sequential_time.toFixed(2)} ms</h2>

//           {data.results.map((r, i) => (
//             <div key={i}>
//               <h3>{r.threads} Threads</h3>
//               <p>Time: {r.time.toFixed(2)} ms</p>
//               <p>Speedup: {r.speedup}x</p>
//               <p>Efficiency: {r.efficiency.toFixed(2)}%</p>
//             </div>
//           ))}

//           <h2>📊 Performance Graph</h2>

//           <BarChart width={600} height={300} data={data.results}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="threads" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="speedup" />
//             <Bar dataKey="efficiency" />
//           </BarChart>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         "https://parallel-query-optimizer.onrender.com/run"
//       );

//       setData(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Parallel Query Optimizer</h1>

//       <button onClick={fetchData}>
//         Run Backend
//       </button>

//       {loading && <p>Loading...</p>}

//       {data && (
//         <div>
//           <h3>Sequential Time: {data.sequential_time}</h3>

//           <h3>Results:</h3>
//           {data.results.map((r, index) => (
//             <div key={index}>
//               <p>Threads: {r.threads}</p>
//               <p>Time: {r.time}</p>
//               <p>Speedup: {r.speedup}</p>
//               <p>Efficiency: {r.efficiency}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://parallel-query-optimizer.onrender.com/run"
      );

      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🚀 Parallel Query Optimizer</h1>

      <button
        onClick={fetchData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Run Backend
      </button>

      {loading && <p>Loading...</p>}

      {data && (
        <div
          style={{
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Sequential Time: {data.sequential_time}</h3>

          <h3>Results:</h3>
          {data.results.map((r, index) => (
            <div key={index}>
              <p>Threads: {r.threads}</p>
              <p>Time: {r.time}</p>
              <p>Speedup: {r.speedup}</p>
              <p>Efficiency: {r.efficiency}</p>
              <hr />
            </div>
          ))}

          <h3>📊 Speedup Graph</h3>

          <LineChart width={600} height={300} data={data.results}>
            <XAxis dataKey="threads" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="speedup" />
          </LineChart>
        </div>
      )}
    </div>
  );
}

export default App;