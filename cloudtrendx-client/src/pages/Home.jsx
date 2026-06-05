import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";

import { Bar, Doughnut, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function Home() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trends")
      .then((res) => {
        setTrends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const barData = {
    labels: trends.map((item) => item.name),

    datasets: [
      {
        label: "Growth %",
        data: trends.map((item) => item.growth),

        backgroundColor: [
          "#06b6d4",
          "#3b82f6",
          "#8b5cf6",
          "#14b8a6",
        ],

        borderRadius: 12,
      },
    ],
  };

  const cloudProviderData = {
    labels: ["AWS", "Azure", "Google Cloud"],

    datasets: [
      {
        data: [45, 30, 25],

        backgroundColor: [
          "#06b6d4",
          "#3b82f6",
          "#8b5cf6",
        ],

        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],

    datasets: [
      {
        label: "AI Cloud Expansion",

        data: [30, 45, 58, 70, 85, 98],

        borderColor: "#06b6d4",

        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white flex">

      <Sidebar />

      <div className="ml-[270px] w-full p-10">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Future Cloud Intelligence
            </h1>

            <p className="text-gray-400 mt-4 text-xl">
              AI-powered infrastructure monitoring &
              futuristic cloud analytics platform.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl w-[320px]">
            <p className="text-gray-400">
              System Status
            </p>

            <div className="flex items-center gap-3 mt-3">
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-green-400 font-bold">
                All Cloud Systems Operational
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-4 gap-5 mb-10">

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-gray-400">
              Global Cloud Market
            </h2>

            <p className="text-5xl font-bold mt-5 text-cyan-400">
              $1.2T
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-gray-400">
              AI Cloud Growth
            </h2>

            <p className="text-5xl font-bold mt-5 text-cyan-400">
              85%
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-gray-400">
              Hybrid Adoption
            </h2>

            <p className="text-5xl font-bold mt-5 text-cyan-400">
              91%
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-gray-400">
              Security Score
            </h2>

            <p className="text-5xl font-bold mt-5 text-cyan-400">
              98%
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">
              Future Cloud Trends
            </h2>

            <Bar data={barData} />
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">
              AI Expansion Forecast
            </h2>

            <Line data={lineData} />
          </div>

        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold mb-6">
              Cloud Market Share
            </h2>

            <div className="w-[280px] mx-auto">
              <Doughnut data={cloudProviderData} />
            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold mb-6">
              AI Predictions
            </h2>

            <div className="space-y-5">

              <div className="bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500">
                <h3 className="font-bold text-cyan-400">
                  Quantum Cloud
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  Enterprise quantum systems expected
                  by 2032.
                </p>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500">
                <h3 className="font-bold text-purple-400">
                  AI-native Infrastructure
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  Autonomous infrastructure systems
                  rapidly evolving globally.
                </p>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500">
                <h3 className="font-bold text-blue-400">
                  Green Data Centers
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  Sustainable infrastructure growth
                  increasing annually.
                </p>
              </div>

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold mb-6">
              Infrastructure Activity
            </h2>

            <div className="space-y-5">

              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="font-bold">
                  AI Cloud Cluster Expanded
                </p>

                <p className="text-gray-400 text-sm">
                  2 minutes ago
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <p className="font-bold">
                  Security Scan Completed
                </p>

                <p className="text-gray-400 text-sm">
                  10 minutes ago
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-bold">
                  Hybrid Nodes Activated
                </p>

                <p className="text-gray-400 text-sm">
                  25 minutes ago
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-bold">
                  Carbon Optimization Running
                </p>

                <p className="text-gray-400 text-sm">
                  1 hour ago
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500 transition-all"
            >

              <h2 className="text-3xl font-bold">
                {trend.name}
              </h2>

              <p className="text-cyan-400 mt-3 text-xl">
                Growth: {trend.growth}%
              </p>

              <p className="text-gray-400 mt-4">
                Future enterprise cloud adoption is
                accelerating rapidly across global
                infrastructure ecosystems.
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;