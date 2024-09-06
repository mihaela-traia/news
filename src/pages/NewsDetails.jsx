import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { getNewsDetails } from "../api/adaptors";
import Button from "react-bootstrap/Button";
import styles from "./NewsDetails.module.css";
import { getFormattedDate } from "../utils/date";

function NewsDetails() {
  const { newsId } = useParams();
  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetails = useFetch(newsDetailsEndpoint);
  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const { title, description, image, date, author, content } =
    adaptedNewsDetails;
  const formattedDate = getFormattedDate(date);
  return (
    <Layout>
      <Container className={`${styles.newsDetails} my-5`}>
        <div className="row d-flex justify-content-center">
          <div className="col-xs-12 col-lg-8">
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              dangerouslySetInnerHTML={{ __html: image }}
              className="mb-4"
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{formattedDate}</p>
              </div>
              <Button>Adaugă la favorite</Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
