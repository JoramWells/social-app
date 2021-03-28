import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row, Divider } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../../_actions/blog_actions";
const { Title } = Typography;
const { Meta } = Card;

function BlogPage() {
  const BlogList = useSelector((state) => state.blogList);
  const { loading, blogs, error } = BlogList;
  const user = useSelector((state) => state.userSignin);
  const { userInfo } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listBlogs());
    return () => {};
  }, []);

  return (
    <div>
      <div style={{ width: "75%", paddingLeft: "50px", paddingTop: "10px" }}>
        ,vdsncv
      </div>

      <Divider plain />
      <Title level={2} style={{ textAlign: "center" }}>
        Recent Posts
      </Title>

      <div>
        <Row align="middle" justify="space-around">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Col>
              {blogs.map((blog) => (
                <Row justify="space-around" align="stretch" key={blog.id}>
                  <Link to={`/blog/post/${blog.id}`}>
                    <Col md={12}>
                      <Card
                        className="card"
                        hoverable
                        style={{ width: 450, marginTop: 16 }}
                        actions={
                          [
                            // <Icon type="setting" key="setting" />,
                            // <Icon type="edit" key="edit" />,
                            // <a href={`/blog/post/${blog._id}`}> <Icon type="ellipsis" key="ellipsis" /></a>,
                          ]
                        }
                      >
                        <Meta
                          avatar={<Avatar src={blog.avatar} />}
                          title={blog.writer}
                          description={blog.updatedAt}
                        />

                        <div
                          style={{
                            height: 250,
                            marginTop: 10,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          />
                        </div>
                      </Card>
                    </Col>
                  </Link>
                </Row>
              ))}
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default BlogPage;
