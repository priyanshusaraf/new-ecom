import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import { toast } from "react-toastify";
import "./Banner.css";

function Banner() {
  const [bannerURL, setBannerURL] = useState("");

  const fetchConfig = async () => {
    try {
      const res = await axios.get("/homepage");
      console.log(res.data);
      setBannerURL(res.data.config.banner[0].imageUrl);
    } catch (err) {
      console.error("Error fetching config", err);
      toast.error("Error fetching config");
    }
  };

  useEffect(() => {
    fetchConfig();
  });

  return (
    <div className="banner">
      <img src={bannerURL} alt="Banner" className="banner__image" />
    </div>
  );
}

export default Banner;
