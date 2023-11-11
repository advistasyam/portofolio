import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, isLeft, role, techStack }) => (
  <div
    className="md p-4 md:w-1/2"
    style={{ maxWidth: '544px' }}
    data-aos={'fade-up'}
    data-aos-duration="1000"
  >
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {role && <p className="prose mb-3 max-w-none text-grad2">{role}</p>}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="mb-6 flex flex-wrap gap-3">
          {techStack &&
            techStack.map((val, index) => (
              <p
                className="rounded-full border border-grad2 px-3 py-2 text-gray-500 dark:text-gray-400"
                key={index}
              >
                {val}
              </p>
            ))}
        </div>

        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-grad1 hover:opacity-80 dark:opacity-80"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
