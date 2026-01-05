import React from "react";

const TermsOfService = () => {
  return (
    <section className="text-black w-[80%] mx-auto px-[20px] py-[32px] mt-[120px] mb-[100px] max-[700px]:w-[90%]">
      <h2 className="font-catamaran text-[35px] max-[700px]:text-[30px] mb-[12px] leading-[1.2]">
        Terms of Service – PlastiBuild Creative Solutions Limited
      </h2>

      <p className="font-raleway text-[17px] mb-[50px] max-[700px]:text-[15px]">
        Effective Date: January 1st, 2026
      </p>

      <div className="space-y-[22px]">
        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            1. Acceptance of Terms
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            By accessing PlastiBuild platforms, including the PlastiBuild
            DigiHub, EcoMart, or any other services, you agree to these Terms of
            Service (“Terms”). If you do not agree, do not use our services.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            2. Eligibility
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            Users must be at least 18 years old, or minors must use the platform
            under parental or guardian supervision.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            3. Services
          </h2>
          <ul className="font-raleway list-disc pl-[22px] text-[17px] max-[700px]:text-[15px]">
            <li>Waste collection and upcycling tracking.</li>
            <li>Digital rewards, carbon credit issuance, and marketplaces.</li>
            <li>Training, workshops, and consultancy services.</li>
            <li>
              Data analytics and reporting for sustainability initiatives.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            4. User Responsibilities
          </h2>
          <p className="font-raleway text-[17px] font-[700] mb-[15px] max-[700px]:text-[15px]">
            Users must:
          </p>
          <ul className="font-raleway list-disc pl-[22px] text-[17px] max-[700px]:text-[15px]">
            <li>Provide accurate and complete information.</li>
            <li>Comply with applicable laws, regulations, and our policies.</li>
            <li>
              Not engage in fraudulent or harmful behavior on our platforms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            5. Intellectual Property
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            All content, designs, trademarks, software, and intellectual
            property on PlastiBuild platforms remain the property of PlastiBuild
            or its licensors. Users may not reproduce, distribute, or exploit
            content without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            6. Liability
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            PlastiBuild is not liable for indirect, incidental, or consequential
            damages arising from the use of services. Services are provided
            “as-is,” and users assume responsibility for all actions taken on
            the platform.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            7. Termination
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            We may suspend or terminate access for violations of these Terms or
            at our discretion.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            8. Governing Law
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            These Terms are governed by the laws of the Federal Republic of
            Nigeria. Disputes shall be resolved in Nigerian courts.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            9. Modifications
          </h2>
          <p className="font-raleway text-[17px] max-[700px]:text-[15px]">
            PlastiBuild may modify these Terms at any time; updates will be
            posted on our platform. Continued use signifies acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-catamaran text-[25px] mb-[8px] max-[700px]:text-[20px]">
            10. Contact
          </h2>
          <address className="font-raleway not-italic text-[17px] max-[700px]:text-[15px]">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:plastibuildcreatives@gmail.com"
                className="underline decoration-[1px]"
              >
                plastibuildcreatives@gmail.com
              </a>
            </p>
          </address>
        </section>
      </div>
    </section>
  );
};

export default TermsOfService;
