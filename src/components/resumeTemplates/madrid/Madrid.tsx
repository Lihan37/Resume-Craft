// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { forwardRef } from "react";
// import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
// import { resume } from "../resume";
// import styleMadrid from "./MadridStyle";
// // import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
// export interface IMadrid {
//   resume?: IResumeData;
// }

// const Madrid: React.ForwardRefRenderFunction<HTMLDivElement> = (
//   { _ },
//   ref
// ) => {
//   const style = styleMadrid.require;
//   const styleCommon = styleMadrid.common;
//   const personalSectionTitle =
//     resume.sectionTitles.personalInfo &&
//     resume.sectionTitles.personalInfo !== "Untitled" &&
//     (resume.personalInfo.nationality ||
//       resume.personalInfo.email ||
//       resume.personalInfo.placeOfBirth ||
//       resume.personalInfo.DateOfBirth ||
//       resume.personalInfo.phoneNumber ||
//       resume.personalInfo.address ||
//       resume.personalInfo.city ||
//       resume.personalInfo.postalCode ||
//       resume.personalInfo.country ||
//       resume.personalInfo.drivingLicense) &&
//     resume.sectionTitles.personalInfo;
//   const personalSummaryTitle =
//     resume.sectionTitles.professionalSummary &&
//     resume.sectionTitles.professionalSummary !== "Untitled" &&
//     resume.sectionTitles.professionalSummary;

//   const educationSectionTitle =
//     resume.sectionTitles.educations &&
//     resume.sectionTitles.educations !== "Untitled" &&
//     resume.educations.length > 0 &&
//     resume.educations.find(
//       (item) => item.city || item.degree || item.description || item.school
//     ) &&
//     resume.sectionTitles.educations;

//   return (
//     <div
//       className="bg-blue-500"
//       ref={ref}
//       style={{
//         // transform: `scale(${resume.zoom})`,
//         height: resume.fontSize.height,
//         width: resume.fontSize.width,
//         transformOrigin:
//           parseFloat(resume.fontSize.height.slice(0, -2)) > 1190.14
//             ? "bottom"
//             : "",
//         transition: "transform 0.5s",
//       }}>
//       <div
//         style={{
//           ...styleCommon.container,
//         }}>
//         {/* header section */}
//         <div
//           style={{
//             ...styleCommon.header,
//             backgroundColor: style.theme,
//           }}>
//           {resume.avatar.url && (
//             <div style={{ ...styleCommon.headerDivOne }}>
//               <img
//                 style={{ width: "100%", height: "100%" }}
//                 src={resume.avatar.url}
//                 alt="avatar"
//               />
//             </div>
//           )}
//           <div style={{ ...styleCommon.headerDivTwo }}>
//             {resume.personalInfo.firstName && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.firstName.fontFamily,
//                   fontSize: style.personalInfo.firstName.fontSize,
//                   fontWeight: style.personalInfo.firstName.fontWeight,
//                   color: style.personalInfo.firstName.color,
//                   textAlign: style.personalInfo.firstName.textAlign as any,
//                 }}>
//                 {resume.personalInfo.firstName}
//               </span>
//             )}
//             {resume.personalInfo.lastName && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.lastName.fontFamily,
//                   fontSize: style.personalInfo.lastName.fontSize,
//                   fontWeight: style.personalInfo.lastName.fontWeight,
//                   color: style.personalInfo.lastName.color,
//                   textAlign: style.personalInfo.lastName.textAlign as any,
//                 }}>
//                 {" "}
//                 {resume.personalInfo.lastName}
//               </span>
//             )}
//             {resume.personalInfo.jobTitle && (
//               <h1
//                 style={{
//                   fontFamily: style.personalInfo.jobTitle.fontFamily,
//                   fontSize: style.personalInfo.jobTitle.fontSize,
//                   fontWeight: style.personalInfo.jobTitle.fontWeight,
//                   color: style.personalInfo.jobTitle.color,
//                   textAlign: style.personalInfo.jobTitle.textAlign as any,
//                 }}>
//                 {resume.personalInfo.jobTitle}
//               </h1>
//             )}
//             {resume.personalInfo.email && (
//               <>
//                 {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>Email :</h1> */}
//                 <h1
//                   style={{
//                     fontFamily: style.personalInfo.email.fontFamily,
//                     fontSize: style.personalInfo.email.fontSize,
//                     fontWeight: style.personalInfo.email.fontWeight,
//                     color: style.personalInfo.email.color,
//                     textAlign: style.personalInfo.email.textAlign as any,
//                   }}>
//                   {resume.personalInfo.email}
//                 </h1>
//               </>
//             )}
//           </div>
//         </div>
//         {/* body section */}
//         <div style={{ ...styleCommon.body }}>
//           {/* info div */}
//           <div>
//             {personalSectionTitle && (
//               <h1
//                 style={{
//                   ...style.sectionTitles.personalInfoStyle,
//                   textAlign: style.sectionTitles.personalInfoStyle
//                     .textAlign as any,
//                 }}>
//                 <span style={{ ...styleCommon.sectionTitle }}>
//                   {personalSectionTitle}
//                 </span>
//               </h1>
//             )}

//             {(resume.personalInfo.postalCode ||
//               resume.personalInfo.address ||
//               resume?.personalInfo.country ||
//               resume?.personalInfo.city) && (
//               <h1>
//                 {resume.personalInfo.postalCode && (
//                   <span
//                     style={{
//                       ...style.personalInfo.postalCode,
//                       textAlign: style.personalInfo.postalCode.textAlign as any,
//                     }}>
//                     {resume.personalInfo.postalCode},
//                   </span>
//                 )}
//                 {resume.personalInfo.address && (
//                   <span
//                     style={{
//                       ...style.personalInfo.address,
//                       textAlign: style.personalInfo.address.textAlign as any,
//                     }}>
//                     {resume.personalInfo.address},
//                   </span>
//                 )}
//                 {resume.personalInfo.city && (
//                   <span
//                     style={{
//                       ...style.personalInfo.city,
//                       textAlign: style.personalInfo.city.textAlign as any,
//                     }}>
//                     {resume.personalInfo.city},
//                   </span>
//                 )}
//                 {resume.personalInfo.country && (
//                   <span
//                     style={{
//                       ...style.personalInfo.country,
//                       textAlign: style.personalInfo.city.textAlign as any,
//                     }}>
//                     {resume.personalInfo.country},
//                   </span>
//                 )}
//               </h1>
//             )}

//             {resume.personalInfo.DateOfBirth && (
//               <h1
//                 style={{
//                   ...style.personalInfo.DateOfBirth,
//                   textAlign: style.personalInfo.DateOfBirth.textAlign as any,
//                 }}>
//                 {resume.personalInfo.DateOfBirth}
//               </h1>
//             )}
//             {resume.personalInfo.placeOfBirth && (
//               <h1
//                 style={{
//                   ...style.personalInfo.placeOfBirth,
//                   textAlign: style.personalInfo.placeOfBirth.textAlign as any,
//                 }}>
//                 {resume.personalInfo.placeOfBirth}
//               </h1>
//             )}

//             {resume.personalInfo.phoneNumber && (
//               <h1
//                 style={{
//                   ...style.personalInfo.phoneNumber,
//                   textAlign: style.personalInfo.phoneNumber.textAlign as any,
//                 }}>
//                 {resume.personalInfo.phoneNumber}
//               </h1>
//             )}
//             {resume.personalInfo.nationality && (
//               <h1
//                 style={{
//                   ...style.personalInfo.nationality,
//                   textAlign: style.personalInfo.nationality.textAlign as any,
//                 }}>
//                 {resume.personalInfo.nationality}
//               </h1>
//             )}

//             {resume.personalInfo.city && (
//               <>
//                 {/* <h1 style={{ ...styleCommon.personalInfoLabel }}>City :</h1> */}
//                 <h1
//                   style={{
//                     ...style.personalInfo.city,
//                     textAlign: style.personalInfo.city.textAlign as any,
//                   }}>
//                   {resume.personalInfo.city}
//                 </h1>
//               </>
//             )}

//             {resume.personalInfo.country && (
//               <h1
//                 style={{
//                   ...style.personalInfo.country,
//                   textAlign: style.personalInfo.country.textAlign as any,
//                 }}>
//                 {resume.personalInfo.country}
//               </h1>
//             )}
//             {resume.personalInfo.drivingLicense && (
//               <h1
//                 style={{
//                   ...style.personalInfo.drivingLicense,
//                   textAlign: style.personalInfo.drivingLicense.textAlign as any,
//                 }}>
//                 {resume.personalInfo.drivingLicense}
//               </h1>
//             )}
//           </div>

//           {/* profile div */}
//           <div>
//             {personalSummaryTitle && (
//               <h1
//                 style={{
//                   ...style.sectionTitles.professionalSummaryStyle,
//                   textAlign: style.sectionTitles.professionalSummaryStyle
//                     .textAlign as any,
//                 }}>
//                 <span style={{ ...styleCommon.sectionTitle }}>
//                   {personalSummaryTitle}
//                 </span>
//               </h1>
//             )}

//             {resume.professionalSummary && (
//               <p
//                 style={{
//                   ...style.professionalSummary.summery,
//                   textAlign: style.professionalSummary.summery.textAlign as any,
//                 }}>
//                 {resume.professionalSummary}
//               </p>
//             )}
//           </div>

//           {/* educations */}
//           <div>
//             {educationSectionTitle && (
//               <h1
//                 style={{
//                   ...style.sectionTitles.educationsStyle,
//                   textAlign: style.sectionTitles.educationsStyle
//                     .textAlign as any,
//                 }}>
//                 <span style={{ ...styleCommon.sectionTitle }}>
//                   {educationSectionTitle}
//                 </span>
//               </h1>
//             )}

//             {resume.educations.map((item, i) => (
//               <div key={i}>
//                 <h1>{item.school}</h1>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* {resume.skills.map((item) => {
//           return (
//             <div className="w-80 flex justify-start items-center h-2 bg-red-200 mt-5">
//               {createArrayUpToNumber(item.level / 20).map((i) => (
//                 <div
//                   key={i}
//                   style={{ width: `20%` }}
//                   className=" h-full bg-red-600 block mr-1"></div>
//               ))}
//             </div>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default forwardRef(Madrid);
