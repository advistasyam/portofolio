import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import personalProjectsData from '@/data/personalProjectsData'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const photos = [
    '/static/images/tokopedia.jpg',
    '/static/images/ui.jpg',
    '/static/images/alteacare.jpeg',
    '/static/images/easycash.jpg',
  ]

  const photosDescription = [
    'Software Engineer at Tokopedia',
    'Graduated Computer Science Universitas Indonesia in 3.5 Years',
    'Middle Software Engineer at AlteaCare',
    'Middle Software Engineer at EasyCash',
  ]

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const variants = {
    initial: { opacity: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentPhotoIndex to the next photo in the array
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 2000) // Change photo every 2 seconds (2000 milliseconds)

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval)
  }, [photos.length])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col lg:h-screen lg:flex-row">
        <div className="flex h-[50%] w-full items-center px-16 lg:h-[100%] lg:w-[60%]">
          <div className="flex w-full flex-col items-center pt-36 lg:items-start lg:pt-0">
            <motion.p
              className="text-center text-2xl font-bold lg:text-start"
              animate={{ opacity: 1.0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0 }}
            >
              Hi!{' '}
              <motion.span
                className="text-2xl font-bold"
                animate={{ opacity: 1.0 }}
                initial={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
              >
                My Name Is
              </motion.span>
            </motion.p>
            <motion.p
              animate={{ opacity: 1.0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 1 }}
              className="mt-6 bg-gradient-to-r from-grad1 from-10% via-grad2 via-30% to-grad3 to-90% bg-clip-text text-center text-7xl font-bold text-transparent lg:text-start"
            >
              Advis Tasyah Mulia.
            </motion.p>
            <motion.p
              className="mt-20 text-center text-lg lg:text-start"
              animate={{ opacity: 1.0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
            >
              Meet the master of software development who turns ordinary digital experiences into{' '}
              <span className="bg-gradient-to-r from-grad1 from-10% to-grad2 to-90% bg-clip-text text-transparent">
                mind-blowing adventures!
              </span>{' '}
              Venture through the world of cutting edge technology and robust performance.
              Passionate to{' '}
              <span className="bg-gradient-to-r from-grad1 from-10% to-grad2 to-90% bg-clip-text text-transparent">
                solve computational problems and communicate complex solutions{' '}
              </span>
              to non-technical stakeholders.
            </motion.p>
            <motion.a
              className="mt-12 w-fit cursor-pointer justify-center rounded-lg bg-grad2 px-4 py-2 font-bold text-white hover:opacity-80"
              href="https://drive.google.com/file/d/1c3CIHHx5gLXRbd2x0UgXn8hqPYl1UP0d/view"
              target="_blank"
              rel="noreferrer"
              animate={{ opacity: 1.0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 2.5 }}
            >
              <p className="">See Resume</p>
            </motion.a>
          </div>
        </div>
        <div className="relative mt-12 h-1/2 w-full lg:mt-0 lg:h-full lg:w-[40%]">
          <motion.div
            className="absolute left-[50%] top-[50%] flex w-[60%] flex-col rounded-xl"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ opacity: 1.0 }}
            initial={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 2 }}
          >
            <AnimatePresence>
              <motion.img
                src={photos[currentPhotoIndex]}
                className="rounded-xl"
                variants={variants}
                initial="initial"
                transition={{
                  type: 'spring',
                  bounce: 0.25,
                  duration: 2,
                  repeat: Infinity,
                }}
                animate={{ scale: [0.9, 1] }}
                alt="image landing page"
              />
            </AnimatePresence>
            <p className="mt-6 text-center text-black">{photosDescription[currentPhotoIndex]}</p>
          </motion.div>

          <img
            src="/static/images/vector.png"
            className="h-full w-full object-cover"
            alt="image landing page"
          />
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-7xl divide-y divide-gray-200 px-6 dark:divide-gray-700 md:px-16">
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

      <div className="mx-auto mt-4 max-w-7xl divide-gray-200 px-6 dark:divide-gray-700 md:px-16 lg:mt-12">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Latest Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="py-12" data-aos="fade-up" data-aos-duration="1000">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-center xl:space-y-0">
                    <Link href={`/blog/${slug}`}>
                      <div className="relative h-[300px] w-full rounded-xl xl:h-[200px] xl:w-[300px]">
                        <Image
                          src={images[0]}
                          layout={'fill'}
                          objectFit={'cover'}
                          alt={'thumbnail'}
                          className={'rounded-xl'}
                        />
                      </div>
                    </Link>
                    <div className="space-y-5 xl:col-span-3 xl:pl-12">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-grad2 hover:opacity-80"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mx-auto flex max-w-7xl justify-end px-16 text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-grad2 hover:text-grad1 dark:hover:text-grad1"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/*{siteMetadata.newsletter.provider !== '' && (*/}
      {/*  <div className="flex items-center justify-center pt-4">*/}
      {/*    <NewsletterForm />*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  )
}
