const getResponseFromAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("API response");
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000);
  });

export default getResponseFromAPI;
