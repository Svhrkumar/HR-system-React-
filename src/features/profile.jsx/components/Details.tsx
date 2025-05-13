import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import SkillComp from "./SkillComp";
import ProcessStepper from "./ProcessStepper";
import FeedBack from "./FeedBack";

const experienceData = [
    {
        company: "TechWave Solutions",
        role: "Frontend Developer",
        from: 2019,
        to: 2021,
    },
    {
        company: "InnoLogic Systems",
        role: "Senior React Developer",
        from: 2021,
        to: 2024,
    },
    {
        company: "NextGen Software",
        role: "Lead UI Engineer",
        from: 2024,
        to: 2025,
    },
    {
        company: "CodeCraft Labs",
        role: "Principal Engineer",
        from: 2025,
        to: "Present",
    },
];


const educationData = [
    {
        degree: "B.Tech in Computer Science",
        college: "JNTU Hyderabad",
        year: "2015 - 2019",
    },
    {
        degree: "Intermediate",
        college: "Sri Chaitanya",
        year: "2013 - 2015",
    },
    {
        degree: "SSC",
        college: "Sri Chaitanya",
        year: "2012 - 2013",
    },
];

const skills = ["React", "Node.js", "MongoDB", "TypeScript", "Express js", "storybook", "Tailwind CSS", "Bootstrap", "GraphQL", "Azure Devops"]

const steps = [
    "Screening",
    "Technical Round 1",
    "Technical Round 2",
    "HR Round",
    "Offered",
    "Rejected"
];

const currentStep = 2;
const Details: React.FC = () => {
    return (

        <div className="flex flex-col gap-4 p-4 w-full h-[calc(100vh-90px)] md:h-auto shadow-[0_0_10px_#3183f566] rounded-xl bg-white">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 h-64">
          <Experience experienceData={experienceData} />
          <Education educationData={educationData} />
          <SkillComp skills={skills} />
        </div>
      
        <div className="p-3">
          <h2 className="text-xl font-semibold mb-3">Interview Process</h2>
          <ProcessStepper steps={steps} currentStep={currentStep} />
          <FeedBack />
        </div>
      </div>
      
    );
};

export default Details;
