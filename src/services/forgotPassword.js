const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function sendToken(email) {
  const formdata = JSON.stringify({ email: email });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/forgot-password",
      requestOptions
    );
    if (response.status === 422) {
      throw new Error("No account found with this email.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function resetPassword(otp, password, confirm) {
  const formdata = JSON.stringify({
    otp: otp,
    password: password,
    password_confirmation: confirm,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/reset-password",
      requestOptions
    );
    if (response.status === 400) {
      throw new Error("Invalid or expired token..");
    }
    if (response.status === 422) {
      throw new Error("Passwords didn't match");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
