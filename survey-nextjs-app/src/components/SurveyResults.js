export default function SurveyResults({ result }) {
  let result_animal = "Tiger";

  if (result.question1 == "item3") {
    result_animal = "Monkey";
  }

  return (
    <div>
      <h1>Thank you for completing the survey!</h1>
      <p>Here are your results:</p>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      <p>Your result animal is {result_animal}</p>
    </div>
  );
}
