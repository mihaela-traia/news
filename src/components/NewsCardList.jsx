import React from "react";
import Container from "react-bootstrap/Container";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const { newsList } = props;

  return (
    <Container>
      <div className="row">
        {newsList.map((news) => {
          return (
            <div className="col-xs-12 col-md-6 col-lg-4 mb-4" key={news.id}>
              <NewsCard
                newsId={news.id}
                imgSrc={news.thumbnail}
                title={news.title}
                description={news.description}
                hasCloseButton={news.hasCloseButton}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default NewsCardList;
