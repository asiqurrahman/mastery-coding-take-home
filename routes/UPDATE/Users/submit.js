export const submit = async (studentId, quiz, session) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${studentId}/submit`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...quiz }),
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.accessToken,
        },
      }
    );

    const resJSON = await response.json();
    if (!response.ok) {
      throw new Error(
        resJSON.message || "Could not submit quiz. Please try again later."
      );
    }
    return resJSON;
  } catch (error) {
    throw new Error(error.message);
  }
};
