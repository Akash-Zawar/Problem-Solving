const onOpeningApp = () => {
  return new Promise((resolve, reject) => {
    resolve("App opened Successfully");
  });
};

const onEnteringLocation = () => {
  return new Promise((resolve, reject) => {
    resolve("Location verified");
  });
};

const onOrderingFromRestaurant = () => {
  return new Promise((resolve, reject) => {
    resolve("Order confirmed");
  });
};

const onDoingPayment = () => {
  return new Promise((resolve, reject) => {
    resolve("Payment done successfully");
  });
};

onOpeningApp()
  .then((appOpenData) => {
    console.log("1. ", appOpenData);
    onEnteringLocation()
      .then((locationData) => {
        console.log("2. ", locationData);
        onOrderingFromRestaurant()
          .then((ordered) => {
            console.log("3. ", ordered);
            onDoingPayment()
              .then((paymentDone) => {
                console.log("4. ", paymentDone);
              })
              .catch((error) => {
                console.log("Payment Failed", error);
              });
          })
          .catch((error) => {
            console.log("order failed", error);
          });
      })
      .catch((error) => {
        console.log("Location not found", error);
      });
  })
  .catch((error) => {
    console.log("App crashed", error);
  });

const callAPI = async () => {
  try {
    const appOpenData = await onOpeningApp();
    console.log("1. ", appOpenData);
    const locationData = await onEnteringLocation();
    console.log("2. ", locationData);
    const ordered = await onOrderingFromRestaurant();
    console.log("3. ", ordered);
    const paymentDone = await onDoingPayment();
    console.log("4. ", paymentDone);
  } catch (err) {
    console.log("Error: ", err);
  }
};

callAPI();
