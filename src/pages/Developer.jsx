import React from "react";
import Main from "../components/section/Main";
import { developerText } from "../data/developer";
import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <Main title="추천 개발자" description="오늘의 추천 개발자 유튜버입니다.">
      <section id="developerPage">
        <h2>😎추천 개발자를 소개합니다.</h2>
        <div className="developer__inner">
          {developerText.map((develpoer, key) => (
            <div className="developer" key={key}>
              <div className="develpoer__img play__icon">
                <Link to={`/channel/${develpoer.channelId}`}>
                  <img src={develpoer.img} alt={develpoer.name} />
                </Link>
              </div>
              <div className="develpoer__info">
                <Link to={`/channel/${develpoer.channelId}`}>
                  {develpoer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Developer;
