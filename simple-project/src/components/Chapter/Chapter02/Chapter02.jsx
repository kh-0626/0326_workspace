// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 유저정보 ==> 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  height: 140px;
  border: 1px solid lightgray;
  display: inline-block;
  margin: 40px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const MemberInfo = ({ member }) => {
  //console.log(props.member);
  const { memberId, memberName, email, color } = member;
  //const member = props.member;
  //console.log(member);
  return (
    <>
      <StyledDiv color={color}>
        <h4>아이디 : {memberId}</h4>
        <strong>이름 : {memberName}</strong>
        <p>이메일 : {email}</p>
      </StyledDiv>
    </>
  );
};

const Chapter02 = () => {
    const response = [
      {
        memberId : "admin",
        memberName : "짱구",
        email: "jjang9@kh.com",
      },
      {
        memberId : "user01",
        memberName : "철수",
        email: "ironwater@kh.com",
      },
      {
        memberId : "user02",
        memberName : "유리",
        email: "glass@kh.com",
      },
    ];

  return (
    <>
        {response ? (
          response.map((e, i) => <MemberInfo member={e} key={e.memberId} />)
        ) : (
          <div>조회결과가 존재하지 않습니다.</div>
        )}


      {/* 
      <MemberInfo member={response[0]} />
      <MemberInfo member={response[1]} />
      <MemberInfo member={response[2]} />
      */}

      {/* 아 여기까지가 1절이었구나
      <StyledDiv>
        <h4>아이디 : {response[0].memberId}</h4>
        <strong>이름 : {response[0].memberName}</strong>
        <p>이메일 : {response[0].email}</p>
      </StyledDiv>
      */}
    </>
  );
};

export default Chapter02;