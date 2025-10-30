import { useState } from "react";

export default function useContributions() {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
}
