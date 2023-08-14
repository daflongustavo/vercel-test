import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

function VideoPlayer({ currentVideoUrl, changeVideo }) {
  return (
    <>
      <div className={styles.videos}>
        <div className={styles.playerWrapper}>
          {currentVideoUrl && (
            <iframe src={currentVideoUrl} controls className={styles.player} />
          )}
        </div>
        <div className={styles.description}>
          <h1>Description</h1>
          <p>descrição aqui</p>

          <h1>FAQ</h1>
          <p>faq aqui</p>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
