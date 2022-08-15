export const fetchClassroom = async (classroomId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/classrooms/${classroomId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJSON = await response.json();
      if (!response.ok) {
        throw new Error(
          resJSON.message || "Could not fetch classroom. Please try again later."
        );
      }
      return resJSON;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  