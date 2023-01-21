import surveyJSON from "@/data/survey.json";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import React, { useState } from "react";
import SurveyResults from "@/components/SurveyResults";

const survey_model = new Model(surveyJSON);

export default function JimmySurvey() {
  const [result, setResult] = useState(null);

  function onComplete(survey) {
    console.log("Results", survey.data);
    setResult(survey.data);
  }

  return (
    <div style={{ width: "100%" }}>
      {result ? (
        <SurveyResults result={result} />
      ) : (
        <Survey model={survey_model} onComplete={onComplete} />
      )}
    </div>
  );
}
