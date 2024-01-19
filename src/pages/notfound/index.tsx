import React from "react";
import useTitleSet from "../../hooks/useTitleSet";

const NotFound: React.FC = () => {
  useTitleSet("Not Found");
  return <div>NotFound</div>;
};

export default NotFound;
