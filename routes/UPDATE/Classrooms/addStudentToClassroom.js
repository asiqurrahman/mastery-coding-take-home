export const addStudentToClassroom = async (classroomId, values) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/classrooms/${classroomId}/students`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...values }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resJSON = await response.json();
    if (!response.ok) {
      throw new Error(
        resJSON.message || "Could not add student. Please try again later."
      );
    }
    return resJSON;
  } catch (error) {
    throw new Error(error.message);
  }
};
