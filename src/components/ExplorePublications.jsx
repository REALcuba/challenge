import React, { useEffect, useState } from "react";
import { explorePublications } from "../lensQueries/explorePublications";
import Card from "./Card/Card";
import "./style.css";
export default function ExplorePublications(props) {
  const [card, setcard] = useState([1, 2]);

  const init = async () => {
    try {
      const request = {
        sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
        noRandomize: true,
        sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
        publicationTypes: ["POST"],
        cursor: '{"timestamp":1,"offset":0}',
        limit: 24,
      };
      const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
      // console.log(response)
      const responseArr = response.data.explorePublications.items;
      // console.log(responseArr);
      responseArr.forEach((item, index) => {
        console.log("este es foreach");
         console.log(index, item.id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  // setcard((response)=>{
  //          init();
  //   // console.log(response)
  //   const responseArr = response.data.explorePublications.items;
  //   return (responseArr[0].profile.name)

  //       });
  // console.log({ card });
  return (
    <Card init={()=>{ init()}}/>
  );
}
