import Link from "next/link";

const Classrooms = ({ classrooms }) => {
  return (
    <div className="classrooms__container">
      {classrooms?.map((classroom) => (
        <Link href={classroom?.id} passHref key={classroom?.id}>
          <a className="classroom-link">{classroom?.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Classrooms;
