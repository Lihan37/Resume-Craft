import React from "react";
import AccordionItem from "../../../components/accordion/AccordionItem";
import AccordionHeader from "../../../components/accordion/AccordionHeader";
import AccordionPanel from "../../../components/accordion/AccordionPanelProps";
import InputTextEditor from "../../../components/common/InputTextEditor";
import AddEmploymentHistory from "./AddEmploymentHistory";
import {
  IResumePersonalInfo,
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
  setPersonalInfo,
  setProfessionalSummary,
  setSectionTitles,
} from "../../../services/resumeEditor/resumeEditorSlice";
import {
  selectEducation,
  selectLanguage,
  selectPersonalInfo,
  selectProfessionalSummary,
  selectReference,
  selectSectionTitles,
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
  const personalInfo = useSelector(selectPersonalInfo);
  const professionalSummary = useSelector(selectProfessionalSummary);
  const sectionTitle = useSelector(selectSectionTitles);

  return (
    <div>
      <div className="pb-10">
        <AccordionItem>
          <AccordionHeader
            id={1}
            title={sectionTitle.personalInfo}
            getValue={(data: string) => {
              dispatch(setSectionTitles({ name: "personalInfo", value: data }));
            }}
          />
          <AccordionPanel id={1}>
            <PersonaData
              initialValue={personalInfo}
              getValue={(data: IResumePersonalInfo) => {
                dispatch(setPersonalInfo(data));
              }}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader
            id={2}
            title={sectionTitle.professionalSummary}
            getValue={(data: string) => {
              dispatch(
                setSectionTitles({ name: "professionalSummary", value: data })
              );
            }}
          />
          <AccordionPanel id={2}>
            <div className="py-5 px-5">
              <InputTextEditor
                initialValue={professionalSummary}
                getValue={(data: string) => {
                  dispatch(setProfessionalSummary(data));
                }}
              />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader
            id={3}
            title={sectionTitle.workExperience}
            getValue={(data: string) => {
              dispatch(
                setSectionTitles({ name: "workExperience", value: data })
              );
            }}
          />
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
          <AccordionHeader
            id={4}
            title={sectionTitle.educations}
            getValue={(data: string) => {
              dispatch(setSectionTitles({ name: "educations", value: data }));
            }}
          />
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
          <AccordionHeader
            id={501}
            title={sectionTitle.socialProfiles}
            getValue={(data: string) => {
              dispatch(
                setSectionTitles({ name: "socialProfiles", value: data })
              );
            }}
          />
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
          <AccordionHeader
            id={502}
            title={sectionTitle.skills}
            getValue={(data: string) => {
              dispatch(setSectionTitles({ name: "skills", value: data }));
            }}
          />
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
          <AccordionHeader
            id={6}
            title={sectionTitle.languages}
            getValue={(data: string) => {
              dispatch(setSectionTitles({ name: "languages", value: data }));
            }}
          />
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
          <AccordionHeader
            id={7}
            title={sectionTitle.references}
            getValue={(data: string) => {
              dispatch(setSectionTitles({ name: "references", value: data }));
            }}
          />
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
