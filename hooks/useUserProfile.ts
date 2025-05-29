"use client";
import { useEffect, useState } from "react";
export default function useUserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (user) setUserProfile(JSON.parse(user));
    setLoading(false);
  }, []);

  return { userProfile, loading };
}
