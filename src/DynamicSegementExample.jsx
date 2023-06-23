import React from "react";
import { useParams } from "react-router-dom";

function DynamicSegementExample() {
  const params = useParams();
  console.log("DynamicSegmentExample Component ka params : ", useParams());
  return <div>DynamicSegementExample : {params.dynamicSegment}</div>;
}

export default DynamicSegementExample;
