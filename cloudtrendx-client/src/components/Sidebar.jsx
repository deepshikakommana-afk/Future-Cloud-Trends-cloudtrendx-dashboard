import {
  FaCloud,
  FaChartBar,
  FaRobot,
  FaShieldAlt,
  FaServer,
  FaDatabase,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-[270px] h-screen bg-black border-r border-slate-800 fixed left-0 top-0 p-6 flex flex-col justify-between">

      <div>

        <div className="flex items-center gap-3 mb-14">
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

          <h1 className="text-3xl font-bold text-cyan-400">
            CloudTrendX
          </h1>
        </div>

        <div className="flex flex-col gap-7 text-gray-300">

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaChartBar />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaCloud />
            <p>Cloud Trends</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaRobot />
            <p>AI Predictions</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaShieldAlt />
            <p>Security Center</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaServer />
            <p>Infrastructure</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaDatabase />
            <p>Data Centers</p>
          </div>

          <div className="flex items-center gap-4 hover:text-cyan-400 cursor-pointer transition-all">
            <FaBell />
            <p>Notifications</p>
          </div>

        </div>

      </div>

      <div>

        <div className="bg-cyan-500/10 border border-cyan-500 p-5 rounded-2xl mb-5">

          <h2 className="text-cyan-400 font-bold text-lg">
            AI Forecast
          </h2>

          <p className="text-sm text-gray-300 mt-3 leading-6">
            AI-native cloud infrastructure expected
            to dominate enterprise systems by 2030.
          </p>

        </div>

        <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <FaUserCircle className="text-3xl text-cyan-400" />

          <div>
            <p className="font-bold">
              Cloud Admin
            </p>

            <p className="text-sm text-gray-400">
              Enterprise Access
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;