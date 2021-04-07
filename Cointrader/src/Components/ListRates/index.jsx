import React from 'react';
import { List, Typography, Avatar } from 'antd';
import PropTypes from 'prop-types';
import ListRow from './ListRow';

const DEFUALT_MAX_PER_PAGE = 4;

const ListRates = (props) => {

  //let { data } = props;
  //data = [{base: "USD", rate: "1235"}];
  const avatarUrl = `https://restcountries.eu/rest/v2/currency/${"ARG"}?fields=flag`;
  //Set the preferences to display if there exist. base code
  const preferences = props.preferences ? props.preferences : [];
  //To display per page
  const maxPerPage = props.max ? props.max : DEFUALT_MAX_PER_PAGE;
  //sort te data to get first the preference if there are.
  data = preferences.reduce( (acc, base) => {
    const index = data.map( val => val.base).indexOf(base);
    if(index > -1) {
      const item = data.slice(index,0);
      data.unshift(item);
    }
    return data;
  }, data);
  
  const toDisplay = 


  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={avatarUrl}/>}
            title={<ListRow base={item.base} rate={item.rate} key={index + "_listRates"}/>}
          />
        </List.Item>
      )}
    />)
  ;
}

ListRates.propTypes = {
  data : PropTypes.array,
  max : PropTypes.number,
  preferences : PropTypes.array
}
export default ListRates;