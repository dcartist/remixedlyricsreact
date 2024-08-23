import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const PageContainer = ({ children, rowClassName = "", containerClassName = "", title="", noHeaders = false}) => {
    useEffect(() => {
        document.title = title;
      }, [])

    return (
      <Container className={containerClassName}>
        {
            !noHeaders && (
                <Row>
                    <h1>{title}</h1>
                    <hr></hr>
                </Row>
            )
        }
        <Row className={rowClassName}>{children}</Row>
      </Container>
    );
  };
const SongContainer = ({ children, rowClassName = "", containerClassName = "", title=""}) => {
    useEffect(() => {
        document.title = title;
      }, [])

    return (
      <Container className={containerClassName}>
        <Row>
            <h1>{title}</h1>
            <hr></hr>
        </Row>
        <Row className={rowClassName}>


        </Row>
      </Container>
    );
  };



  export { PageContainer, SongContainer };