import React from "react";
import faqs from "../../lib/data/faqData"; // adjust path if needed

export default function page() {
  return (
    <main className="text-[#000000] mt-[150px]">
      {/* Hero */}
      <section className="mx-auto w-[65%] px-6 py-12 text-center max-[800px]:w-[95%]">
        <h1 className="font-catamaran text-[#262626] text-[35px] leading-[1.2] max-[800px]:text-[30px] mb-[10px]">
          PlastiBuild FAQs
        </h1>
        <p className="font-raleway text-[17px] max-[800px]:text-[15px]">
          Explore our services, platforms, and climate-positive solutions — no
          dropdowns, just clear sections with questions and answers.
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="mx-auto w-[75%] px-6 pb-16 max-[800px]:w-[95%]">
        <div className="grid grid-cols-1 gap-y-[50px]">
          {faqs.map(faq => (
            <article
              key={faq.title}
              className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm"
            >
              <header className="px-6 pt-6">
                <h2 className="font-catamaran text-[#262626] text-[21px] leading-[1.2]">
                  {faq.title}
                </h2>
              </header>

              <div className="px-6 pb-6">
                <ul className="mt-4 space-y-4">
                  {faq.items.map(item => (
                    <li
                      key={item.q}
                      className="rounded-md bg-white p-4 ring-1 ring-gray-100"
                    >
                      <p className="font-raleway font-[800] text-[17px] mb-[10px] max-[800px]:text-[15px]">
                        {item.q}
                      </p>
                      <p className="font-raleway text-[17px] max-[800px]:text-[15px]">
                        {item.a}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
