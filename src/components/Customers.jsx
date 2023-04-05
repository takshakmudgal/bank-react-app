import { useState } from "react";
import styles from "../style";

const Customers = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckout = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "OmuB7wYlRCWnQ1tI42NjLqkcJnPcfBhO");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/bank_data/all?per_page=4", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => setData(result.data))
      .catch((error) => setError(error.message));
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-lg`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-3xl font-bold text-white`}>
          Learn more about our Customers!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] text-gray-300 mt-5`}>
          Some info about our Loyal Customers.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <button
          className={`rounded-full py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} hover:opacity-60 transition ease-in-out hover:scale-90 `}
          onClick={handleCheckout}
        >
          Check Out!
        </button>
      </div>

      {data && (
        <div
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-lg gap-2`}
        >
          {data.map((item, index) => (
            <div key={index} className="text-white">
              <h3 className="text-lg font-bold text-white mt-5">
                Bank Information {index + 1}
              </h3>
              <p className="mt-2">
                <span className="text-[#C4C4C4] font-medium">
                  Account Number:
                </span>{" "}
                {item.iban_data.account_number}
              </p>
              <p className="mt-2">
                <span className="text-[#C4C4C4] font-medium">Branch:</span>{" "}
                {item.swift_data.branch}
              </p>
              <p className="mt-2">
                <span className="text-[#C4C4C4] font-medium">City:</span>{" "}
                {item.swift_data.city}
              </p>
              <p className="mt-2">
                <span className="text-[#C4C4C4] font-medium">Country:</span>{" "}
                {item.swift_data.country}
              </p>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-lg`}
        >
          <p className="text-white">{error}</p>
        </div>
      )}
    </section>
  );
};

export default Customers;
