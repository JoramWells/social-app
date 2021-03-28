import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Avatar, Card, Skeleton } from "antd";
import moment from "moment";
// const CommentSection = lazy(() => import("./CommentSection"));

const { Meta } = Card;

function PostPage(props) {
  const [post, setPost] = useState([]);
  const postId = props.match.params.postId;
  const fetchBlog = async () => {
    const { data } = await axios.post(`/api/blog/getPost/${postId}`);
    setPost(data.blog);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  const created = post.createdAt;

  if (post.id) {
    return (
      <>
        <Row justify="space-around" align="middle">
          <Col md={12}>
            <Card
              className="postPage"
              style={{ margin: "1rem", border: "0px" }}
            >
              <Meta
                avatar={<Avatar src={post.avatar} />}
                title={post.writer}
                description={moment()
                  .subtract(1, { created })
                  .format("YYYY-MM-DD HH:mm:ss")}
              />
              <br />
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Card>
          </Col>
        </Row>
        {/* <Row justify="space-around" align="middle">
          <Col md={12}>
            <CommentSection />
          </Col>
        </Row> */}
      </>
    );
  } else {
    return (
      <Row justify="space-around" align="middle" style={{ marginTop: "100px" }}>
        <Col>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </Col>
      </Row>
    );
  }
}

export default PostPage;
