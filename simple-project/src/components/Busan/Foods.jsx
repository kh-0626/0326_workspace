import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const StyledWrap = styled.div`
  width : 1200px;
  height : auto;
  min-height : 1200px;
  margin : auto;
  margin-top : 30px;
  margin-bottom : 30px;
  border : 1px solid #ffc3c359;
  bot-shadow : 0 0 1px 1px rgba(0, 0, 0, 0.02);
`;

const StyledTitle = styled.h1`
  font-size : 60px;
  font-weight : 800;
  color : skyblue;
  text-align: center;
  margin: 15px 0px;
`;

const StyledInnerWrap = styled.div`
  width : 1100px;
  margin : auto;
  height : auto;
  min-height : 600px;
  padding : 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius : 11px;
`;

const StyledCard = styled.div`
  width : 330px;
  height : 250px;
  margin : 9px 9px;
  padding : 8px;
  box-shadow : 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  display : inline-block;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
  }
`;

const StyledImage = styled.img`
    width : 330px;
    height: 180px;
`;
const StyledStoreName = styled.h3`
    font-weight : bold;
    text-align: center;
    font-size: 17px;
    margin: 0px;
    margin-top: 12px;
`;

const StyledMoreButton = styled.div`
    width : 150px;
    height : 40px;
    line-height : 40px;
    text-align: center;
    margin: auto;
    border-radius: 22px;
    background-color: #ff9a9e;
    color: white;
    font-weight: 900;
    border: 2px dotted lightpink;
    margin-top: 35px;
    font-size: 18px;

    &:hover{
      cursor : pointer;
      background-color: white;
      font-size: 20px;
      color: #ff9a9e;
    }
`;

const Foods = () => {
  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

  const navi = useNavigate();

  useEffect(() => {
    /*
    fetch('http://localhost/spring/busans?pageNo=${pageNo}')
    .then((response) => response.json());
    .then((data) => console.log(data));
    .catch((err) => console.error("문제발생 삐용삐용", err));
    .finally(console.log("꼭무조건함"));
    

    axios({
      url: `http://localhost/spring/busans?pageNo=${pageNo}`,
      method: "get",
    }).then((result) => console.log(result));
    */


    axios
      .get(`http://localhost/spring/busans?pageNo=${pageNo}`)
      .then((result) => {
        console.log("결과잘오나~~");
        console.log(result);
        const response = result.data.getFoodKr.item;
        console.log(response);
        // foods[1, 2, 3, 4, 5, 6, 7]
        // response[10, 11, 12, 13, 14, 15]
        setFoods([...foods, ...response]);
        if(response.length < 9){
          setHasMore(false);
        }
      });
  }, [pageNo]);

  const ClickToButtonHandler = () => {
    setPageNo((pageNo) => pageNo + 1);
  }

  return (
    <>
      <StyledWrap>
        <StyledTitle>부산의 맛집 알아보기</StyledTitle>
        <StyledInnerWrap>
          {foods.length === 0 ? (
            <h3>음식점 목록을 불러오는 중입니다.</h3>
            ) : (
              foods.map((e) => (
              <StyledCard key={e.UC_SEQ} onClick={() => navi(``)}>
                  <StyledImage src={e.MAIN_IMG_THUMB} />
                    <br />
                  <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                </StyledCard>
                ))
            )}
        </StyledInnerWrap>
        {hasMore && (
          <StyledMoreButton onClick={ClickToButtonHandler}>
            더보기
          </StyledMoreButton>
        )}
      </StyledWrap>
    </>
  );
};

export default Foods;