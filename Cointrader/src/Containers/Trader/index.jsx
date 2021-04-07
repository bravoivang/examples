import React, { useEffect } from 'react';
import Trader from '../../Components/Trader';
import { Spin } from 'antd';
import { useCurrencie, useSearch, useSetDate, useSetBase } from './hooks';

const TraderContainer = () => {

  const loadingBases = async () => {
    let bases = [];
    await fetch('https://api.exchangeratesapi.io/latest', {})
    .then( response => response.json() )
    .then( data => bases = Object.keys(data.rates));
    return bases;
  }
  let bases = [];

  console.log("TraderContainer: ingresando");
  const load = useSearch();
  const setBase = useSetBase();
  const setDate = useSetDate();
  let { loading, rates, date, base} = useCurrencie();
  console.log("TraderContainer: data availeble", loading, rates, date, base);

  useEffect(()=> {
    //first load: 
    console.log("useEffect on Mount")
    load(null, base);
  }, []);

  useEffect(()=> {
    console.log("useEffect on changes");
    bases = loadingBases();
    console.log("TraderContainer: useEffect", bases);
    load(date, base);
  },[date, base]);
  

  if (loading) {
    return <Spin/>
  }
  return (
    <Trader 
      rates={rates} 
      date={date} 
      reference={base} 
      setDate={setDate} setBase={setBase}
      search={load}
      seeMore={()=>{console.log("see More!")}}
      bases={bases}
    />
  );
}

export default TraderContainer;
