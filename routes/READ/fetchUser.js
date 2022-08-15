export const fetchUser = async (userId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    );

    const fetchedUser = await response.json();

    if (!response.ok) {
      throw new Error(fetchedUser.message || "Could not get user.");
    }

    return fetchedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
