import { useParams } from "react-router";

const ReportExporterPage = () => {
  const { "*": splat } = useParams();

  return (
    <>
      <h2>Report Exporter</h2>
      <p>Your report will be exported in the path: {splat}</p>
    </>
  );
};

export default ReportExporterPage;

