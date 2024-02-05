import React from "react";
import Accordion from "../../../components/accordion";
import AccordionItem from "../../../components/accordion/AccordionItem";
import AccordionHeader from "../../../components/accordion/AccordionHeader";
import AccordionPanel from "../../../components/accordion/AccordionPanelProps";
import InputTextEditor from "../../../components/common/InputTextEditor";
import AddEmploymentHistory from "./AddEmploymentHistory";
import {
  TypeOfLanguage,
  TypeOfReference,
  TypeOfSingleEducationHistory,
  TypeOfSingleEmploymentHistory,
  TypeOfSingleSocialWebSite,
  TypeOfSkill,
} from "../../../types";
import AddEducationHistory from "./AddEducationHistory";
import AddSocialWebSite from "./AddSocialWebSite";
import AddSkills from "./AddSkills";
import AddLanguages from "./AddLanguages";
import AddReferences from "./AddReferences";
import PersonaData from "./PersonaData";

const LeftSideBarOptions: React.FC = () => {
  const handleAddEmploymentHistory = (
    data: TypeOfSingleEmploymentHistory[]
  ) => {
    console.log("handleAddEmploymentHistory", data);
  };

  const handleAddEducationHistory = (data: TypeOfSingleEducationHistory[]) => {
    console.log("handleAddEducationHistory", data);
  };

  const handleAddSocialWebSite = (data: TypeOfSingleSocialWebSite[]) => {
    console.log("handleAddSocialWebSite", data);
  };

  const handleAddSkills = (data: TypeOfSkill[]) => {
    console.log("handleAddSkills", data);
  };

  const handleAddLanguages = (data: TypeOfLanguage[]) => {
    console.log("handleAddLanguages", data);
  };

  const handleAddReferences = (data: TypeOfReference[]) => {
    console.log("handleAddReferences", data);
  };

  return (
    <div>
      <div className="pb-10">
        <Accordion multiple={true} defaultIndex={0}>
          {/* Personal Information  */}
          <AccordionItem>
            <AccordionHeader>Personal Information</AccordionHeader>
            <AccordionPanel>
              <PersonaData />
            </AccordionPanel>
          </AccordionItem>
          {/* Professional Summary */}
          <AccordionItem>
            <AccordionHeader>Professional Summary</AccordionHeader>
            <AccordionPanel>
              <div className="py-5 px-5">
                <InputTextEditor />
              </div>
            </AccordionPanel>
          </AccordionItem>
          {/* Employment History */}
          <AccordionItem>
            <AccordionHeader>Employment History</AccordionHeader>
            <AccordionPanel>
              <AddEmploymentHistory getValue={handleAddEmploymentHistory} />
            </AccordionPanel>
          </AccordionItem>
          {/* Education */}
          <AccordionItem>
            <AccordionHeader>Education</AccordionHeader>
            <AccordionPanel>
              <AddEducationHistory getValue={handleAddEducationHistory} />
            </AccordionPanel>
          </AccordionItem>
          {/* Websites & Social Links */}
          <AccordionItem>
            <AccordionHeader>Websites & Social Links</AccordionHeader>
            <AccordionPanel>
              <AddSocialWebSite getValue={handleAddSocialWebSite} />
            </AccordionPanel>
          </AccordionItem>
          {/* Skills */}
          <AccordionItem>
            <AccordionHeader>Skills</AccordionHeader>
            <AccordionPanel>
              <AddSkills getValue={handleAddSkills} />
            </AccordionPanel>
          </AccordionItem>
          {/* Language */}
          <AccordionItem>
            <AccordionHeader>Languages</AccordionHeader>
            <AccordionPanel>
              <AddLanguages getValue={handleAddLanguages} />
            </AccordionPanel>
          </AccordionItem>
          {/* References */}
          <AccordionItem>
            <AccordionHeader>References</AccordionHeader>
            <AccordionPanel>
              <AddReferences getValue={handleAddReferences} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default React.memo(LeftSideBarOptions);
