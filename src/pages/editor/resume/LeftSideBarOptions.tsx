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
import { setFocus } from "../../../services/generalEditor/generalEditorSlice";
import { selectFocusInput } from "../../../services/generalEditor/generalEditorSelector";

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
  const focusInput = useSelector(selectFocusInput);

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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "personalInfoStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={1}>
            <PersonaData
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "personalInfo" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "professionalSummaryStyle",
                  focusSection: "sectionTitles",
                })
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "workExperienceStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={3}>
            <AddEmploymentHistory
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "workExperience" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "educationsStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={4}>
            <AddEducationHistory
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "educations" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "socialProfilesStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={501}>
            <AddSocialWebSite
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "socialProfiles" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "skillsStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={502}>
            <AddSkills
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "skills" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "languagesStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={6}>
            <AddLanguages
              initialFocusedValue={focusInput}
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "languages" })
                );
              }}
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
            onFocus={() => {
              dispatch(
                setFocus({
                  focusInput: "referencesStyle",
                  focusSection: "sectionTitles",
                })
              );
            }}
          />
          <AccordionPanel id={7}>
            <AddReferences
              getFocusedInputValue={(data: string) => {
                dispatch(
                  setFocus({ focusInput: data, focusSection: "references" })
                );
              }}
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
