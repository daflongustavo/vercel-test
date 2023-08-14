import React, { useState } from "react";
import Layout from "@/components/Layout/layout";
import styles from "../components/Portal/Dashboard/Dashboard.module.css";
import VideoPlayer from "@/components/Portal/VideoPlayer";
import Course from "@/components/Portal/Accordion";

const Dashboard = () => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  function changeVideo(videoUrl) {
    setCurrentVideoUrl(videoUrl);
  }
  return (
    <>
      <Layout pageHeaderTittle=".Dashboard">
        <div className={styles.Dashboard}>
          <VideoPlayer
            currentVideoUrl={currentVideoUrl}
            changeVideo={changeVideo}
          />
          <Course changeVideo={changeVideo} />
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
