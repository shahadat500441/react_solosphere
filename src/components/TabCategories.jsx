import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import {useEffect,useState} from "react"
import axios from "axios"

const TabCategories = () => {
  const [jobs, setJobs]= useState([])
  useEffect(()=>{
    const getData = async()=>{
      const {data}= await axios(`${import.meta.env.VITE_APP_URL}/jobs`)
      setJobs(data)
    }
getData()
  },[])


  return (
    <Tabs>
      <div className="container px-6 my-10 mx-auto">
        <h1 className=" text-2xl md:text-3xl text-center font-bold text-gray-800 capitalize">Browse Job Categories</h1>
        <p className ="text-center text-gray-500 max-w-2xl mx-auto my-6">Three categories available for the time being. They are web development, Graphic design and digital marketing . Browse them by clicking on the tabs below</p>
        <div className="flex justify-center items-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {jobs.filter(j=> j.category === "Web Development").map((job)=><JobCard
          key={job._id}
          job={job}
          ></JobCard>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
              jobs.filter(j=> j.category === "Graphic Design").map((job)=> <JobCard
              key={job._id}
              job={job}
              ></JobCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
              jobs.filter(j=> j.category === "Digital Marketing").map((job)=> <JobCard
              key={job._id}
              job={job}
              ></JobCard>)
            }
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
