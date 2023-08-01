import React, { useState, useEffect, CSSProperties } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export const LoadingScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 6000);
  }, []);

  return (
    <div className="loader">
      {loading ? (
        <HashLoader
          color={"#d4618a"}
          loading={loading}
          size={65}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        ""
      )}
    </div>
  );
};
