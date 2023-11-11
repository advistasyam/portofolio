import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import personalProjectsData from '@/data/personalProjectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mx-auto mt-36 max-w-7xl divide-y divide-gray-200 px-6 dark:divide-gray-700 md:px-16">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            recent project that i've been working on
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d, index) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                role={d.role}
                techStack={d.techStack}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Personal Project */}
        <div className="mt-10 space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Personal Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            personal project that i've been worked on
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {personalProjectsData.map((d, index) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                role={d.role}
                techStack={d.techStack}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
