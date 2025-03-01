import { TeachingExperience } from "@/data/teaching-experience";

export function TeachingExperienceEntry({ experience }: { experience: TeachingExperience }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-serif mb-4">
        {experience.institution}
      </h3>
      {experience.roles.map((role, roleIndex) => (
        <div key={roleIndex} className="grid grid-cols-[220px_1fr] gap-x-12 mb-6">
          <span className="text-xs text-zinc-500 mt-1 whitespace-nowrap">
            {role.date}
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-600 mb-2">{role.role}</p>
            {role.courses.map((course, courseIndex) => (
              <div key={courseIndex}>
                <p className="text-sm text-zinc-700">
                  {course.name} ({course.level})
                </p>
                {course.rating && (
                  <p className="text-sm text-zinc-600">
                    Average Rating: {course.rating}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 