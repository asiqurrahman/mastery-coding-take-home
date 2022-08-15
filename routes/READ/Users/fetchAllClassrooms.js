export const fetchClassrooms = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/classrooms`,
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
          resJSON.message || "Could not fetch classrooms. Please try again later."
        );
      }
      return resJSON;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  