// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { forwardRef } from "react";
// import { IResumeData } from "../../../services/resumeEditor/resumeEditorSlice";
// import { resume } from "../resume";
// import styleVienna from "./ViennaStyle";
// export interface IVienna {
//   resume?: IResumeData;
// }

// const Vienna: React.ForwardRefRenderFunction<HTMLDivElement> = ({ _ }, ref) => {
//   const style = styleVienna.require;
//   const styleCommon = styleVienna.common;
//   const personalSectionTitle =
//     resume.sectionTitles.personalInfo &&
//     resume.sectionTitles.personalInfo !== "Untitled" &&
//     (resume.personalInfo.nationality ||
//       resume.personalInfo.placeOfBirth ||
//       resume.personalInfo.DateOfBirth ||
//       resume.personalInfo.drivingLicense) &&
//     resume.sectionTitles.personalInfo;

//   return (
//     <div
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
//         {/* Header Section  */}
//         <div
//           style={{
//             ...styleCommon.header,
//             backgroundColor: style.theme,
//           }}>
//           {resume.avatar.url && (
//             <div
//               style={{
//                 ...styleCommon.headerDivOne,
//               }}>
//               <img
//                 style={{ width: "100%", height: "100%" }}
//                 src={resume.avatar.url}
//                 alt="avatar"
//               />
//             </div>
//           )}
//           <div
//             style={{
//               ...styleCommon.headerDivTwo,
//             }}>
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
//             {resume.personalInfo.address && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.address.fontFamily,
//                   fontSize: style.personalInfo.address.fontSize,
//                   fontWeight: style.personalInfo.address.fontWeight,
//                   color: style.personalInfo.address.color,
//                   textAlign: style.personalInfo.address.textAlign as any,
//                 }}>
//                 {" "}
//                 {resume.personalInfo.address}
//               </span>
//             )}
//             {resume.personalInfo.city && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.city.fontFamily,
//                   fontSize: style.personalInfo.city.fontSize,
//                   fontWeight: style.personalInfo.city.fontWeight,
//                   color: style.personalInfo.city.color,
//                   textAlign: style.personalInfo.city.textAlign as any,
//                 }}>
//                 {" "}
//                 {resume.personalInfo.city}
//               </span>
//             )}
//             {resume.personalInfo.country && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.country.fontFamily,
//                   fontSize: style.personalInfo.country.fontSize,
//                   fontWeight: style.personalInfo.country.fontWeight,
//                   color: style.personalInfo.country.color,
//                   textAlign: style.personalInfo.country.textAlign as any,
//                 }}>
//                 {" "}
//                 {resume.personalInfo.country}
//               </span>
//             )}

//             {resume.personalInfo.postalCode && (
//               <span
//                 style={{
//                   fontFamily: style.personalInfo.postalCode.fontFamily,
//                   fontSize: style.personalInfo.postalCode.fontSize,
//                   fontWeight: style.personalInfo.postalCode.fontWeight,
//                   color: style.personalInfo.postalCode.color,
//                   textAlign: style.personalInfo.postalCode.textAlign as any,
//                 }}>
//                 {" "}
//                 {resume.personalInfo.postalCode}
//               </span>
//             )}
//             {resume.personalInfo.email && (
//               <h1
//                 style={{
//                   fontFamily: style.personalInfo.email.fontFamily,
//                   fontSize: style.personalInfo.email.fontSize,
//                   fontWeight: style.personalInfo.email.fontWeight,
//                   color: style.personalInfo.email.color,
//                   textAlign: style.personalInfo.email.textAlign as any,
//                 }}>
//                 <a href={`mailto:${resume.personalInfo.email}`}>
//                   {resume.personalInfo.email}
//                 </a>
//               </h1>
//             )}
//           </div>
//         </div>

//         {/* // Body  */}
//         <div style={{ ...styleCommon.body }}>
//           <div style={{ ...styleCommon.bodyDivOne }}>
//             {personalSectionTitle && (
//               <h1
//                 style={{
//                   fontFamily: style.sectionTitles.personalInfoStyle.fontFamily,
//                   fontSize: style.sectionTitles.personalInfoStyle.fontSize,
//                   fontWeight: style.sectionTitles.personalInfoStyle.fontWeight,
//                   color: style.sectionTitles.personalInfoStyle.color,
//                   textAlign: style.sectionTitles.personalInfoStyle
//                     .textAlign as any,
//                 }}>
//                 {personalSectionTitle} :
//               </h1>
//             )}
//             {resume.personalInfo.nationality && (
//               <>
//                 <h1 style={{ ...styleCommon.personalInfoLabel }}>
//                   Nationality :
//                 </h1>
//                 <h1
//                   style={{
//                     fontFamily: style.personalInfo.nationality.fontFamily,
//                     fontSize: style.personalInfo.nationality.fontSize,
//                     fontWeight: style.personalInfo.nationality.fontWeight,
//                     color: style.personalInfo.nationality.color,
//                     textAlign: style.personalInfo.nationality.textAlign as any,
//                   }}>
//                   {resume.personalInfo.nationality}
//                 </h1>
//               </>
//             )}
//             {resume.personalInfo.drivingLicense && (
//               <>
//                 <h1 style={{ ...styleCommon.personalInfoLabel }}>
//                   Driving License :
//                 </h1>
//                 <h1
//                   style={{
//                     fontFamily: style.personalInfo.drivingLicense.fontFamily,
//                     fontSize: style.personalInfo.drivingLicense.fontSize,
//                     fontWeight: style.personalInfo.drivingLicense.fontWeight,
//                     color: style.personalInfo.drivingLicense.color,
//                     textAlign: style.personalInfo.drivingLicense
//                       .textAlign as any,
//                   }}>
//                   {resume.personalInfo.drivingLicense}
//                 </h1>
//               </>
//             )}
//             {resume.personalInfo.placeOfBirth && (
//               <>
//                 <h1 style={{ ...styleCommon.personalInfoLabel }}>
//                   Place Of Birth
//                 </h1>
//                 <h1
//                   style={{
//                     fontFamily: style.personalInfo.placeOfBirth.fontFamily,
//                     fontSize: style.personalInfo.placeOfBirth.fontSize,
//                     fontWeight: style.personalInfo.placeOfBirth.fontWeight,
//                     color: style.personalInfo.placeOfBirth.color,
//                     textAlign: style.personalInfo.placeOfBirth.textAlign as any,
//                   }}>
//                   {resume.personalInfo.placeOfBirth}
//                 </h1>
//               </>
//             )}
//             {resume.personalInfo.DateOfBirth && (
//               <>
//                 <h1 style={{ ...styleCommon.personalInfoLabel }}>
//                   Date Of Birth :
//                 </h1>
//                 <h1
//                   style={{
//                     fontFamily: style.personalInfo.DateOfBirth.fontFamily,
//                     fontSize: style.personalInfo.DateOfBirth.fontSize,
//                     fontWeight: style.personalInfo.DateOfBirth.fontWeight,
//                     color: style.personalInfo.DateOfBirth.color,
//                     textAlign: style.personalInfo.DateOfBirth.textAlign as any,
//                   }}>
//                   {resume.personalInfo.DateOfBirth}
//                 </h1>
//               </>
//             )}
//           </div>
//           <div style={{ ...styleCommon.bodyDivTwo }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default forwardRef(Vienna);
