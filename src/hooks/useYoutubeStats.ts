import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export type YoutubeStats = {
  fetched_at: string;
  views: number;
  subscribers: number;
  videos: number;
  channel_id: string;
  id: string;
};

const generateMockData = (days: number = 30): YoutubeStats[] => {
  const data: YoutubeStats[] = [];
  const baseViews = faker.number.int({ min: 100000, max: 1000000 });
  const baseSubscribers = faker.number.int({ min: 10000, max: 100000 });
  const baseVideos = faker.number.int({ min: 50, max: 200 });

  // Generate data for each day with a slight increase
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));

    data.push({
      fetched_at: date.toISOString(),
      views: Math.floor(baseViews * (1 + i * 0.02)), // 2% increase per day
      subscribers: Math.floor(baseSubscribers * (1 + i * 0.01)), // 1% increase per day
      videos: Math.floor(baseVideos + i * 0.5), // Add 1 video every 2 days
      channel_id: "mock_channel_1",
      id: faker.string.uuid(),
    });
  }

  return data;
};

const useYoutubeStats = () => {
  const [stats, setStats] = useState<YoutubeStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API delay
    const fetchMockData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockData = generateMockData();
        setStats(mockData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMockData();
  }, []);

  return { stats, loading, error };
};

export default useYoutubeStats;
