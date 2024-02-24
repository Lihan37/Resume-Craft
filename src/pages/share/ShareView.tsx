import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IResumeData } from "../../services/resumeEditor/resumeEditorSlice";
import { ICoverLetter } from "../../services/coverletterEditor/coverletterEditorSlice";
import ResumeShare from "./ResumeShare";
import CoverLetterShare from "./CoverLetterShare";

interface IResumeDataState {
  success: boolean;
  type: string;
  data: IResumeData;
}
interface ICoverLetterDataState {
  success: boolean;
  type: string;
  data: ICoverLetter;
}

const ShareView: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataResume, setResumeData] = useState<IResumeDataState>();
  const [dataCoverLetter, setCoverLetterData] =
    useState<ICoverLetterDataState>();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_API}/user/v1/share/data/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!data.success) {
        setLoading(false);
        navigate("/notfound");
      }
      if (data.success) {
        setLoading(false);
        if (data.type === "resume") {
          setResumeData(data);
          return;
        }
        if (data.type === "coverletter") {
          setCoverLetterData(data);
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    !loading && (
      <div className="flex justify-center items-center w-full h-screen bg-slate-200">
        {dataResume?.type === "resume" && dataResume.data._id ? (
          <ResumeShare data={dataResume.data} />
        ) : null}
        {dataCoverLetter?.type === "coverletter" && dataCoverLetter.data._id ? (
          <CoverLetterShare data={dataCoverLetter.data} />
        ) : null}
      </div>
    )
  );
};

export default ShareView;
