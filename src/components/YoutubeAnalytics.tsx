import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type YoutubeStats = {
  fetched_at: string;
  views: number;
  subscribers: number;
  videos: number;
  channel_id: string;
  id: string;
};

type Props = {
  data: YoutubeStats[];
};

const YoutubeAnalytics = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Views Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Views Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="fetched_at"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              formatter={(value) =>
                new Intl.NumberFormat().format(Number(value))
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#8884d8"
              name="Views"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Subscribers Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Subscribers Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="fetched_at"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              formatter={(value) =>
                new Intl.NumberFormat().format(Number(value))
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="subscribers"
              stroke="#82ca9d"
              name="Subscribers"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Videos Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Videos Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="fetched_at"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              formatter={(value) =>
                new Intl.NumberFormat().format(Number(value))
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="videos"
              stroke="#ffc658"
              name="Videos"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YoutubeAnalytics;
