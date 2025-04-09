export default function Cv({ cv }) {
  return (
    <div>
      <h1>{cv?.general?.name}'s CV</h1>
      <p>Email: </p>
      <p>{cv?.general?.email}</p>
      <p>Phone:</p>
      <p>{cv?.general?.phone}</p>
      <p>School Name: </p>
      <p>{cv?.education?.schoolName}</p>
      <p>Study Title: </p>
      <p>{cv?.education?.studyTitle}</p>
      <p>Study Date: </p>
      <p>{cv?.education?.studyDate}</p>
      <p>Company Name: </p>
      <p>{cv?.experience?.companyName}</p>
      <p>Position Title: </p>
      <p>{cv?.experience?.positionTitle}</p>
      <p>Responsibilities: </p>
      <p>{cv?.experience?.responsibilities}</p>
      <p>Worked From: </p>
      <p>{cv?.experience?.dateFrom}</p>
      <p>Worked Until: </p>
      <p>{cv?.experience?.dateUntil}</p>
    </div>
  );
}
