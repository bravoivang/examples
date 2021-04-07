import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import style from './index.module.scss';

const Screen = (props) => {
  
  return (
    <div className={style.container} id="1">
      <Row className={style.mainRow} id="2">
        <Col className={style.mainCol} id="3" span={12}>{props.children}</Col>
      </Row>
    </div>
  )
}

Screen.propTypes = {
  title : PropTypes.string,
}

export default Screen;