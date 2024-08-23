import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '../Rating/Rating';


// Main Page Container
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



// Container for songs
const SongContainer = ({ rowClassName = "", containerClassName = "", title="", info}) => {
    useEffect(() => {
       info ?  document.title = `${info.title} - ${info.artist.name}` : document.title = ` No Artist Found` ;
      }, [])

    return (
      <Container className={containerClassName}>
        {
            info ?  <Row>
                <Col>
                <h1>{info.title}</h1>
            <p>{info.artist.name}</p>
                </Col>
                <Col className="d-flex align-items-center">
                
            <p className="ms-auto">Remixed Level: <Rating ratingNumber={info.remix_level.level} /></p>
                </Col>
            
             </Row> : <Row>
            <h1>No Artist Found</h1> </Row>
           
        }
        <hr></hr>
       {
        info &&  <Row className={rowClassName}>
        <pre>{info.lyrics}  </pre>
        </Row>
       }
      </Container>
    );
  };



  export { PageContainer, SongContainer };