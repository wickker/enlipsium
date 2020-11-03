import styled from "styled-components";
import { Row, Col } from "antd";
import ReactPlayer from "react-player";

const StyledCol = styled(Col)`
&& {
    height: 87vh;
}
`

export default function Scintillator() {
    return (
       <Row>
           <StyledCol span={24}>
           <ReactPlayer url="https://www.youtube.com/watch?v=qEWFxJlmqlg&ab_channel=KeshiVEVO" width="100%" height="100%" controls="true"/>
           </StyledCol>
       </Row>
    );
}