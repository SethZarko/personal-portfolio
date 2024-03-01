import { useParams } from 'react-router-dom';

import { InsuranceWebsite } from "../projects/InsuranceWebsite.jsx";
import { Test } from '../projects/Test.jsx'

export const PortfolioElement = () => {
  const { id } = useParams();


  return (
    <>
      {id === '1' && <InsuranceWebsite/>} 
      {id === '2' && <Test/>} 
    </>
  );
};