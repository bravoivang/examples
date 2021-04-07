import React from 'react';
import { Col, DatePicker, Rate, Row, Select, Typography } from 'antd';
import { PrimaryButton, SecondayButton } from '../../Common/Buttons';
import ListRates from '../ListRates/index';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './style.module.scss';
import CustomSelector from '../../Common/Select';
import {objectToArray} from './../../Helpers/helpers';


const { Title } = Typography;


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Trader = (props) => {
  function disabledDate(current) {
    // Can not select days after today
    return current && current > moment().endOf('day');
  }

  const dataList = objectToArray([], props.rates, ["base", "rate"]);  
  const prefrences = ["CAD", "GBP", "USD", "EUR"];

  console.log("TRADER props: ", props);
  return (
    <div className={style.traderCard}>
      <Row>
        <Col span={24}>
          <Title className={style.h2} level={2}>Histórico de cotizaciones</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title className={style.h5} level={5}>Selecciona la moneda de referencia</Title>
          <CustomSelector defaultValue={"USD"} placeholder={"Moneda"} onChange={(ev)=> {console.log("base cambiada", ev)}} options={props.bases}/>
        </Col>
      </Row>
      <Row >
        <Col span={24}>
          <Title className={style.h5} level={5}>Ingresa la fecha de cotización</Title>
          <DatePicker onChange={props.setDate}
            disabledDate={disabledDate}/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PrimaryButton onClick={props.search}>Buscar cotizaciones</PrimaryButton>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ListRates data={dataList} prefrences = {prefrences}/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <SecondayButton onClick={props.seeMore}>Ver más cotizaciones</SecondayButton>
        </Col>
      </Row>
    </div>
  );


}


Trader.propTypes = {
  date : PropTypes.instanceOf(Date),
  reference : PropTypes.string,
  rates : PropTypes.array,
  bases:  PropTypes.array,
}

export default Trader;