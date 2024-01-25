import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";

import { Container } from "../../../components/common/Container";

const Search: React.FC = () => {
  useTitleSet("Cover letter templates");
  return (
    <Container>
         <div className="pt-10 flex justify-center ">
          <input
            className="p-2 rounded-xl w-1/3 border-2 border-cyan-600"
            placeholder="Type Your Job Title"
            list="select"
          />

          <datalist className="bg-white text-black" id="select">
            <option value="Architect" />
            <option value="Civil Engineer" />
            <option value="Teacher" />
            <option value="IT & Networking" />
            <option value="Business analyst" />
          </datalist>
        </div>
    </Container>
  );
};

export default Search;