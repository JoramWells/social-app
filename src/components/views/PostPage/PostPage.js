import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Col, Row, Avatar } from "antd";
const { Title, Text } = Typography;

function PostPage(props) {
  const [post, setPost] = useState([]);
  const postId = props.match.params.postId;
  const fetchBlog = async () => {
    const { data } = await axios.post(`/api/blog/getPost/${postId}`);
    setPost(data.blog);
    console.log(data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  console.log(post);

  if (post.id) {
    return (
      <div className="postPage" style={{ margin: "1rem" }}>
        <Row justify="space-around" align="middle">
          <Col md={12}>
            <Title level={4}>
              <Avatar src={post.avatar} />
              {"   "}
              {post.writer}
            </Title>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Text level={4}>{post.createdAt}</Text>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div style={{ width: "80%", margin: "3rem auto", textAlign: "center" }}>
        loading...
      </div>
    );
  }
}

export default PostPage;
