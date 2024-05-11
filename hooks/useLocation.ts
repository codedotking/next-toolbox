import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState<Location>({} as Location);
  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location);
    };
    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  });
  return location;
}
