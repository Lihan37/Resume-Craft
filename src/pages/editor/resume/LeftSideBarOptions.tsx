import React from "react";
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
} from "../../../types/resumeEditor";
import AddEducationHistory from "./AddEducationHistory";
import AddSocialWebSite from "./AddSocialWebSite";
import AddSkills from "./AddSkills";
import AddLanguages from "./AddLanguages";
import AddReferences from "./AddReferences";
import PersonaData from "./PersonaData";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkExperience,
  setEducation,
  setSkills,
  setReference,
  setLanguage,
  setSocialProfile,
} from "../../../services/resumeEditor/resumeEditorSlice";
import {
  selectEducation,
  selectLanguage,
  selectReference,
  selectSkills,
  selectSocialProfile,
  selectWorkExperience,
} from "../../../services/resumeEditor/resumeEditorSelector";

const LeftSideBarOptions: React.FC = () => {
  const dispatch = useDispatch();
  const workExperiences = useSelector(selectWorkExperience);
  const educations = useSelector(selectEducation);
  const skills = useSelector(selectSkills);
  const languages = useSelector(selectLanguage);
  const socialProfile = useSelector(selectSocialProfile);
  const references = useSelector(selectReference);

  return (
    <div>
      <div className="pb-10">
        <AccordionItem>
          <AccordionHeader id={1} tittle="Personal Information" />
          <AccordionPanel id={1}>
            <PersonaData />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={2} tittle="Professional Summary" />
          <AccordionPanel id={2}>
            <div className="py-5 px-5">
              <InputTextEditor />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={3} tittle="Employment History" />
          <AccordionPanel id={3}>
            <AddEmploymentHistory
              initialValue={workExperiences}
              getValue={(data: TypeOfSingleEmploymentHistory[]) => {
                dispatch(setWorkExperience(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={4} tittle="Education" />
          <AccordionPanel id={4}>
            <AddEducationHistory
              initialValue={educations}
              getValue={(data: TypeOfSingleEducationHistory[]) => {
                dispatch(setEducation(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={501} tittle="Websites & Social Links" />
          <AccordionPanel id={501}>
            <AddSocialWebSite
              initialValue={socialProfile}
              getValue={(data: TypeOfSingleSocialWebSite[]) => {
                dispatch(setSocialProfile(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={502} tittle="Skills" />
          <AccordionPanel id={502}>
            <AddSkills
              initialValue={skills}
              getValue={(data: TypeOfSkill[]) => {
                dispatch(setSkills(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={6} tittle="Languages" />
          <AccordionPanel id={6}>
            <AddLanguages
              initialValue={languages}
              getValue={(data: TypeOfLanguage[]) => {
                dispatch(setLanguage(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader id={7} tittle="References" />
          <AccordionPanel id={7}>
            <AddReferences
              initialValue={references}
              getValue={(data: TypeOfReference[]) => {
                dispatch(setReference(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
      </div>
    </div>
  );
};

export default React.memo(LeftSideBarOptions);
