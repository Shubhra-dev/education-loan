import { formatDateToYYYYMMDD } from "./dateFunctions";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function userPhoneNumberCheck(phone) {
  const body = JSON.stringify({
    mobile_number: phone,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/registration-step-1",
      requestOptions
    );

    if (response.status === 409 || response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  } catch (error) {
    // Log or handle the error appropriately
    throw new Error(error); // Rethrow the error to allow handling by the caller
  }
}

export const loginRequest = async (emailOrMobile, password) => {
  const body = JSON.stringify({
    email_or_mobile_number: emailOrMobile,
    password: password,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/login",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};

export const fetchProfile = async (token) => {
  console.log(token);
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/my-account",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};

export const otpVerify = async (mobileNumber, otpCode) => {
  const body = JSON.stringify({
    mobile_number: mobileNumber,
    otp: otpCode,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/registration-step-2",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(response.message);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const registrationRequest = async (userData) => {
  const body = JSON.stringify({
    ...userData,
    date_of_birth: formatDateToYYYYMMDD(userData.date_of_birth),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/registration-step-3",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
