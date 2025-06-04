import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { TeachingExperienceEntry } from "@/components/teaching-experience-entry";
import { teachingExperienceData } from "@/data/teaching-experience";
import { sectionOrder, Section } from "@/data/section-order";
import { WorkInProgressEntry } from "@/components/work-in-progress-entry";
import { workInProgressData } from "@/data/work-in-progress";
import { NavTabs } from "@/components/nav-tabs";
import { WorkingPaperEntry } from "@/components/working-paper-entry";
import { workingPapersData } from "@/data/working-papers";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <NavTabs />
            <div className="mt-8 space-y-24">
              {aboutMe.description && (
                <section id={Section.AboutMe}>
                  <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                    Welcome
                  </h2>
                  <p
                    className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                  />
                </section>
              )}

              {educationData.length > 0 && (
                <section id="education">
                  <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                    Education
                  </h2>
                  <div className="space-y-12">
                    {educationData.map((education, index) => (
                      <EducationEntry key={index} education={education} />
                    ))}
                  </div>
                </section>
              )}

              {sectionOrder.map((sectionName) => {
                switch (sectionName) {
                  case Section.Teaching:
                    return (
                      teachingExperienceData.length > 0 && (
                        <section id={Section.Teaching} key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Teaching
                          </h2>
                          <div className="space-y-12">
                            {teachingExperienceData.map((experience, index) => (
                              <TeachingExperienceEntry
                                key={index}
                                experience={experience}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );
                  case Section.Research:
                    return (
                      <section id={Section.Research} key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Research
                        </h2>
                        <div className="space-y-12">
                          {workingPapersData.length > 0 && (
                            <div>
                              <h3 className="font-serif text-md mb-8 tracking-wide uppercase">
                                Working Papers
                              </h3>
                              <div className="space-y-12">
                                {workingPapersData.map((item, index) => (
                                  <div key={index}>
                                    <WorkingPaperEntry item={item} />
                                    {index < workingPapersData.length - 1 && (
                                      <div className="h-px bg-zinc-200 my-8" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {workInProgressData.length > 0 && (
                            <div>
                              <h3 className="font-serif text-md mb-8 tracking-wide uppercase">
                                Work in Progress
                              </h3>
                              <div className="space-y-12">
                                {workInProgressData.map((item, index) => (
                                  <div key={index}>
                                    <WorkInProgressEntry item={item} />
                                    {index < workInProgressData.length - 1 && (
                                      <div className="h-px bg-zinc-200 my-8" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </section>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
