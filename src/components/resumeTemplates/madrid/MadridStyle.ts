// https://i.ibb.co/zJdVXq1/madrid-resume-templates.webp

const styleMadrid = {
  common: {
    container: {
      padding: "0px 0px",
      width: "100%",
      height: "100%",
    },
    header: {
      display: "flex",
      gap: "15px",
      padding: "0px 24px 10px 0px",
    },

    headerDivOne: {
      width: "213.3px",
      height: "100%",
      display: "block",
    },
    headerDivTwo: {
      width: "100%",
    },
    styleSkill:{
      display:"flex", 
      gap:"4px",
       flexWrap:"wrap"
    },

    // personalInfoEmail: {
    //   marginLeft: "10px",
    // },

    body: {
      
      gap: "15px",
      padding: "5px 40px 0px 40px",
    },
    // bodyDivOne: {
    //   width: "150px",
    // },
    // bodyDivTwo: {
    //   width: "100%",
    // },
    margin: {
      marginTop: "2px",
      marginBottom: "2px",
    },
    flex:{
      display: "flex",
    },
    sectionTitle: {
      backgroundColor: "#9AEBFE",
      padding: "2px 2px",
      display: "inline-block",
      
      textColor: "white",
    },
    
    personalInfoLabel: {
      color: "#002B18",
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: "13px",
    },

    skillsLevelContainer: {
      width: "100%",
      backgroundColor: "#d1d1d1",
      height: "3px",
      display: "flex",
      gap: "2px",
      marginTop: "4px",
    },

    skillsLevel: { width: `20%`, backgroundColor: "#3a3139", height: "100%" },
  },
  require: {
    theme: "#9AEBFE",
    themeOptions: ["#E4E4E4", "#FED78C", "#9AEBFE", "#FFF66D", "#4BFBBA"],
    skillLevel: false,
    skillLevelDisabled: false,
    personalInfo: {
      jobTitle: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "14px",
        textAlign: "start",
      },
      firstName: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 700,
        fontSize: "20px",
        textAlign: "start",
      },
      lastName: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 700,
        fontSize: "20px",
        textAlign: "start",
      },
      email: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      phoneNumber: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      country: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      city: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      address: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      postalCode: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      drivingLicense: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      nationality: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      placeOfBirth: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      DateOfBirth: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
    },
    workExperience: {
      city: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "10px",
        textAlign: "start",
      },
      description: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
      employer: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "10px",
        textAlign: "start",
      },
      endMontYear: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
      jobTitle: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "10px",
        textAlign: "start",
      },
      startMontYear: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
    },
    skills: {
      label: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
      level: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
    },
    professionalSummary: {
      summery: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
    },
    languages: {
      language: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      level: {
        color: "#6d696d",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
    },
    references: {
      name: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "10px",
        textAlign: "start",
      },
      company: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "10px",
        textAlign: "start",
      },
      phone: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
      email: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "10px",
        textAlign: "start",
      },
    },
    educations: {
      school: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      degree: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      startMontYear: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      endMontYear: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      city: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      description: {
        color: "#172554",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
    },
    socialProfiles: {
      label: {
        color: "#6EA3F8",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "12px",
        textAlign: "start",
      },
      link: {
        color: "#6EA3F8",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
        fontSize: "15px",
        textAlign: "start",
      },
    },
    sectionTitles: {
      personalInfoStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      professionalSummaryStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      workExperienceStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      skillsStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      languagesStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      referencesStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      educationsStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
      socialProfilesStyle: {
        color: "#002B18",
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: "12px",
        textAlign: "start",
      },
    },
  },
};

export default styleMadrid;
