import React, { useState } from "react";
import { Button, Text, YStack, Spinner } from "tamagui";

// Define the type for the fetched data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchDataComponent: React.FC = () => {
  const [data, setData] = useState<Post | null>(null); // State to hold fetched data
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading state
  const [error, setError] = useState<string | null>(null); // State to handle errors

  // Async function to fetch data
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Handle non-2xx status
      }
      const result: Post = await response.json();
      setData(result); // Update state with fetched data
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Update state with error message
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <YStack alignItems="center" space="$4" padding="$4">
      <Button onPress={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </Button>

      {loading && <Spinner size="$4" />}

      {error && (
        <Text color="red10" fontSize="$4">
          {error}
        </Text>
      )}

      {data && (
        <YStack space="$2" width="100%">
          <Text fontSize="$5" fontWeight="bold">
            {data.title}
          </Text>
          <Text fontSize="$4">{data.body}</Text>
        </YStack>
      )}
    </YStack>
  );
};

export default FetchDataComponent;
