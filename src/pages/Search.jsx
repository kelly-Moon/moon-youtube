import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/section/Main";
import VideoSearch from "../components/video/VideoSearch";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextpageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
    setLoading(true);
  }, [searchId]);

  const fetchVideos = (query, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextpageToken(data.nextPageToken);
        setVideos((preVideos) => [...preVideos, ...data.items]);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken);
    }
  };

  const searchPageClass = loading ? "isLoagding" : "isLoaded";
  return (
    <Main title="유튜브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="serachPage" className={searchPageClass}>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;
