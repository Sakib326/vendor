import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Overview",
  },
  {
    id: 2,
    title: "Contact",
  },
];

export const ProfileAbout = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="grid grid-cols-[270px_1fr] border rounded-lg">
      <div className="border-r p-5">
        <ul className="flex flex-col gap-2">
          {data?.map((item, i) => {
            return (
              <li
                onClick={() => setStep(i)}
                className={`px-4 py-2 rounded cursor-pointer hover:text-primary hover:bg-tertiary ${
                  step == i ? "bg-tertiary text-primary" : "bg-[#f3f3f4] "
                }`}
              >
                {item?.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-5">
        {step == 0 && (
          <>
            <h4 className="mb-5">About Company</h4>
            <div>
              UniSearch harnesses over ten years of experience in international
              student recruitment within source markets and innovative
              AI-powered technology to streamline the study abroad process from
              the research stage down to arriving in the destination country and
              beyond. Through predictive analytics and algorithm-driven systems,
              we develop personal one-to-one relationships with students,
              universities, and our network of dedicated counsellors and
              mentors, covering all the bases of study abroad through a single
              all-inclusive platform.
            </div>
            <br />
            <div>
              UniSearch harnesses over ten years of experience in international
              student recruitment within source markets and innovative
              AI-powered technology to streamline the study abroad process from
              the research stage down to arriving in the destination country and
              beyond. Through predictive analytics and algorithm-driven systems,
              we develop personal one-to-one relationships with students,
              universities, and our network of dedicated counsellors and
              mentors, covering all the bases of study abroad through a single
              all-inclusive platform.
            </div>
            <br />
            <div>
              UniSearch harnesses over ten years of experience in international
              student recruitment within source markets and innovative
              AI-powered technology to streamline the study abroad process from
              the research stage down to arriving in the destination country and
              beyond. Through predictive analytics and algorithm-driven systems,
              we develop personal one-to-one relationships with students,
              universities, and our network of dedicated counsellors and
              mentors, covering all the bases of study abroad through a single
              all-inclusive platform.
            </div>
          </>
        )}
        {step == 1 && (
          <>
            <h4 className="mb-5">Contact</h4>
            <div>
              UniSearch harnesses over ten years of experience in international
              student recruitment within source markets and innovative
              AI-powered technology to streamline the study abroad process from
              the research stage down to arriving in the destination country and
              beyond. Through predictive analytics and algorithm-driven systems,
              we develop personal one-to-one relationships with students,
              universities, and our network of dedicated counsellors and
              mentors, covering all the bases of study abroad through a single
              all-inclusive platform.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileAbout;
