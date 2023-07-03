import React, { useEffect, useState } from "react";
import "./Dashboard.css";


const Dashboard = () => {
  const [info,setInfo]=useState({confirmed:"",recovered:"",deceased:"",vaccinated:"",vaccinated2:""})
    const getCovidData = async()=>{
        try{

            const data = await fetch("https://data.covid19india.org/v4/min/data.min.json")
            const jsonData = await data.json()
            const nadia= jsonData.WB.districts.Nadia.total;
            // console.log(jsonData.WB.districts.Nadia.total.confirmed)
            setInfo({confirmed:nadia.confirmed,recovered:nadia.recovered,deceased:nadia.deceased,vaccinated1:nadia.vaccinated1,vaccinated2:nadia.vaccinated2})
        }
        catch(err){console.log(err)}
    }
    useEffect(()=>{
      getCovidData()
      const originalTitle = document.title;
      document.title = 'Covid 19 update';
      return () => {
        document.title = originalTitle;
      }
    },[])
    
  return (
    <>
    <div className="dashboard">
    <div className="header">🔴Nadia Covid 19 update </div>
      <div className="box" ><span className="title" >CONFIRMED</span><span className="box">{info.confirmed}</span></div>
      <div className="box"><span className="title" >RECOVERED</span><span className="box" id="b2">{info.recovered} </span></div>
      <div className="box"><span className="title" >DECEASED</span><span className="box">{info.deceased}</span></div>
      <div className="box"><span className="title" >VACCINATED 1</span><span className="box">{info.vaccinated2}</span></div>
      <div className="box"><span className="title" >VACCINATED 2</span><span className="box">{info.vaccinated2}</span></div>
    </div>
    </>
  );
};

export default Dashboard;
