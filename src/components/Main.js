import { useEffect, useState } from "react";
import styled from "styled-components";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import PostModel from "./PostModel";
import { connect } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addIncrement } from "../actions/index";

const Main = (props) => {
  const [showModl, setShowModel] = useState("close");

  const { count } = useSelector((state) => state.increment);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addIncrement());
  };
  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModl) {
      case "open":
        setShowModel("close");
        break;

      case "close":
        setShowModel("open");
        break;

      default:
        setShowModel("close");
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>

            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  color="#378fe9"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                <span>Photo</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  color="#5f9b41"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                </svg>
                <span>Video</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  color="#c37d16"
                >
                  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                </svg>
                <span>Event</span>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  color="#e16745"
                >
                  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
                <span>Write Article</span>
              </button>
            </div>
          </ShareBox>

          <Content>
            {props.loading && (
              <RotatingLines
                strokeColor="#9db3c8"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
            )}

            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <Link>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </Link>

                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                      </svg>
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <Link>
                      {!article.sahreImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sahreImg && (
                          <img src={article.sahreImg} alt="" />
                        )
                      )}
                    </Link>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                          alt=""
                        />
                        <span>{count}</span>
                      </button>
                    </li>
                    <li>
                      <Link>0</Link>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button onClick={handleIncrement}>
                      <SlLike />
                      <span>Like</span>
                    </button>

                    <button>
                      <FaRegCommentDots />
                      <span>Comment</span>
                    </button>

                    <button>
                      <FaShare />
                      <span>Share</span>
                    </button>

                    <button>
                      <RiSendPlaneFill />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          <PostModel showModl={showModl} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommanCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommanCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 700;
      cursor: pointer;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      /* margin-top: 10px ; */
      padding-bottom: 4px;

      button {
        svg {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
          @media only screen and (max-width: 390px) {
   
        font-size: 10px;
      }
        }
      }
      /* button:hover{
          background-color: red ;
          padding: 0px -14px  ;
        } */
      @media only screen and (max-width: 390px) {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: nowrap;
        font-size: 5px;
      }
    }
  }
`;

const Article = styled(CommanCard)`
  padding: 0px;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  background-color: #f9fafb;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0px;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background: white;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-left: 8px;
    }
  }
`;

const Content = styled.div`
  text-align: center;
`;
const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticleAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
