import "./App.css";
import YoutubeAnalytics from "./components/YoutubeAnalytics";
import useYoutubeStats from "./hooks/useYoutubeStats";

const App = () => {
  const { stats, loading, error } = useYoutubeStats();

  console.log(stats);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">YouTube Channel Analytics</h1>
        <YoutubeAnalytics data={stats} />
      </div>
    </div>
  );
};

export default App;
