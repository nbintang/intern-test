import React, { useEffect } from "react";

export default function useGetStoredOtp() {
  const [otpData, setOtpData] = React.useState<{
    otp: string;
    loading: boolean;
  }>({
    otp: "",
    loading: true,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedOtp = localStorage.getItem("otp-email");
      if (storedOtp) {
        setOtpData((prev) => ({
          ...prev,
          otp: storedOtp || "",
        }));
      }
      setOtpData((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }, []);

  return {
    otp: otpData.otp,
    loading: otpData.loading,
  };
}
