import { projectsTypes } from "@/constants";

export const ProjectSummarySection = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white max-w-screen-lg w-full mx-auto gap-10">
        {projectsTypes.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-[2.2rem] font-semibold">{project.count}+</p>
            <p className="uppercase text-[1.2rem] font-medium">
              {project.type}
            </p>
            <p className="uppercase text-white/60 font-light">
              {project.count}+ projects
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
