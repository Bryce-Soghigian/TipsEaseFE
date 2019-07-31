import React from "react";
import styled from "styled-components";
import Tip from './Tip'


const WorkerCardContainer = styled.div`
  display: flex;
  font-family: 'Varela Round', sans-serif;
  align-items: center;
`;

const WorkerImage = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 3px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 12px 0px #383838;
`;

const WorkerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3.2rem;
`;

const WorkerName = styled.h2`
  font-size: 3.2rem;
  margin: 0.5rem 0;
  color: #f3e367;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 2px;
`;

const WorkerText = styled.p`
  font-size: 1.8rem;
  text-align: left;
  line-height: 3.2rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
`;

const WorkerRole = styled(WorkerText)`
  font-size: 2rem;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 1px;
`;

const WorkerEmployment = styled(WorkerText)`
  color: white;
  font-size: 2rem;
`;

const WorkerCard = props => {

  return (
    <WorkerCardContainer>
      <WorkerImage image='https://images.robertharding.com/previeww/RF/TI/HORIZONTAL/1178-4100.jpg' />
      
      <WorkerInfo>
        <WorkerName>{props.name}</WorkerName>
        <WorkerRole>{props.role}</WorkerRole>
        <WorkerText>Employed for<br /><WorkerEmployment>{props.timeEmployed[0]} years, {props.timeEmployed[1]} months</WorkerEmployment></WorkerText>
        <Tip />
      </WorkerInfo>
    </WorkerCardContainer>
  );
}

export default WorkerCard;