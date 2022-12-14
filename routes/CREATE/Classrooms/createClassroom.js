export const createClassroom = async (value, session) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/classrooms`,
      {
        method: "POST",
        body: JSON.stringify({ name: value }),
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.accessToken,
        },
      }
    );
    const resJSON = await response.json();
    if (!response.ok) {
      throw new Error(
        resJSON.message || "Could not create classroom. Please try again later."
      );
    }
    return resJSON;
  } catch (error) {
    throw new Error(error.message);
  }
};
