import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Form from './Form';
import Modal from './Modal';

const App = () => {
  const [images, setImages] = useState();
  const [modalState, setModalState] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const onClick = (imageId) => {
    setModalState(true);
    setSelectedContent(imageId);
  };

  return (
    <div className="app">
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="form-control">
            <Form />
          </Col>
        </Row>
        <Row>
          {
            images && images.map(img => (
              <Col key={img.id} xs={12} sm={6} md={4} lg={3} className="content-holder" onClick={() => onClick(img.id)}>
                <img src={`${img.user.profile_image}.webp`} alt=''/>
                <p>{img.user.name}</p>
              </Col>
            ))
          }
          </Row>
      </Grid>
      {
        modalState &&
          <Modal onCloseRequest={() => setModalState(false)} contentId={selectedContent}>
            {
              images && images.map(img => (
                <div key={img.id} id={`img${img.id}`} className="content hidden">
                  <img src={`${img.url}.jpg`} alt='' loading="lazy" />
                  <p>{img.description}</p>
                </div>
              ))
            }
          </Modal>
      }
    </div>
  );
}

export default App;
