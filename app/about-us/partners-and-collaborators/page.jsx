import React from "react";
import Header from "../../../components/about-header/Header";

const page = () => {
  return (
    <>
      <Header
        title="Partners and Collaborators"
        paths={[
          { label: "Home", href: "/" },
          {
            label: "Partners and collaborators",
            href: "#"
          }
        ]}
      />
      {/* End of header */}
      {/* End of header */}
    </>
  );
};

export default page;
