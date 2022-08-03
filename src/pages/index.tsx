import Head from 'next/head';
import Script from 'next/script';

import { Header } from '@src/components/header';
import { Content } from '@src/components/content';
import { Link } from '@src/components/link';

export default function Page ()
{
  const ga = process.env.GA;

  return (
    <div>
      <Head>
        {
          ga ?
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}></Script>
            <Script 
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga}');
                `,
              }}
            />
          </>
          :
          null
        }
        <title>
          Wirune Kaewjai - Software Engineer
        </title>
        <meta
          name="description"
          content="Experienced as a website developer for 4 years with ReactJS. Create a many websites such as Blog, E-Commerce and Content Management System."
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
          sizes="96x96"
        />
      </Head>
      <Header
        avatar="/images/avatar.jpg"
        name="WIRUNE KAEWJAI"
        job="Software Engineer"
        contacts={[
          {
            groups: [
              {
                icon: 'place',
                items: [
                  {
                    text: 'Bangkok, Thailand'
                  }
                ],
              },
              {
                icon: 'email',
                items: [
                  {
                    text: 'wirune.kae@gmail.com',
                    href: 'mailto:wirune.kae@gmail.com',
                  }
                ],
              },
              {
                icon: 'phone',
                items: [
                  {
                    text: '+66879088566',
                    href: 'tel:+66879088566',
                  }
                ],
              },
            ],
          },
          {
            groups: [
              {
                icon: 'link',
                items: [
                  {
                    text: 'https://github.com/wirunekaewjai',
                    href: 'https://github.com/wirunekaewjai',
                  },
                  {
                    text: 'https://www.youtube.com/devdayo',
                    href: 'https://www.youtube.com/devdayo',
                  },
                  {
                    text: 'https://www.linkedin.com/in/wirunekaewjai',
                    href: 'https://www.linkedin.com/in/wirunekaewjai',
                  },
                ],
              }
            ]
          }
        ]}
      />
      <Content
        sections={[
          {
            icon: 'work',
            title: 'WORK EXPERIENCE',
            items: [
              {
                title: 'Senior Frontend Engineer at bluePi - Bangkok',
                subtitle: 'July 2022 - Present',
                isList: true,
                items: [
                  'Develop a part of website using NextJS and Typescript',
                ],
              },
              {
                title: 'Software Engineer at Refinitiv, an LSEG business - Bangkok',
                subtitle: 'January 2021 - June 2022',
                items: [
                  'Develop a part of storage framework with NodeJS and Typescript',
                  'Develop a part of API for CRUD data on AWS AppSync with Lambda and DynamoDB'
                ],
              },
              {
                title: 'Full Stack Developer at Wolves Work | Digital Agency - Bangkok',
                subtitle: 'May 2018 - October 2020',
                items: [
                  <span>
                    <span>Develop E-Commerce, Blog, and Company websites with NextJS</span>
                    <span
                      className="non-printable"
                      style={{ marginLeft: '1mm' }}
                    >
                      [Example:
                      <Link
                        href="https://www.suanluang.co.th/"
                        text="#1"
                      />
                      ,
                      <Link
                        href="https://mirror6.com/"
                        text="#2"
                      />
                      ,
                      <Link
                        href="https://www.creativeinvestment.space/"
                        text="#3"
                      />
                      ]
                    </span>
                  </span>,
                  'Develop CMS for E-Commerce website with ReactJS and styled-components + Material UI (v3.6)',
                  'Develop web creation tool for non-developer',
                ],
              },
              {
                title: 'Freelance Developer - Bangkok',
                subtitle: 'January 2014 - April 2018',
                items: [
                  // 'Develop Android application with Java and Wordpress REST API',
                  'Develop Unity 2D Game with C# and Firebase',
                  'Develop Dashboard and Content Management with ReactJS + Material UI (v3.6) and Firebase Cloud Firestore',
                ],
              },
              {
                title: 'Lecturer at Dhurakij Pundit University - Bangkok',
                subtitle: 'January 2014 - August 2017',
                items: [
                  'HTML, CSS, Javascript',
                  'Android (Java)',
                  'Unity3D (C#)',
                ],
              }
            ],
          },
          {
            icon: 'work',
            title: 'INTERNSHIP',
            items: [
              {
                title: 'Software Developer at Microsoft Innovation Center - Bangkok',
                subtitle: 'November 2012 - March 2013',
                items: [
                  'Develop Windows Phone 8 Application (C# and XAML)',
                  'Edit an exists Kinect (OpenGL) source code',
                ],
              }
            ],
          },
          {
            icon: 'school',
            title: 'EDUCATION',
            items: [
              {
                title: 'Dhurakij Pundit University - Bangkok',
                subtitle: '2009 - 2013',
                items: [
                  'Bachelor of Engineering in Computer Animation and Game Engineering',
                ],
              }
            ],
          },
          // {
          //   icon: 'build',
          //   title: 'SKILL',
          //   tags: [
          //     'HTML',
          //     'CSS',
          //     'Javascript',
          //     'ReactJS',
          //     'NextJS',
          //     'Firebase Cloud Firestore',
          //     'Firebase Functions',
          //     'Google Cloudrun',
          //     'Material UI',
          //     'Styled Components',
          //     'Styled JSX',
          //     'CSS Module',
          //     'Mongo DB',
          //   ],
          // }
        ]}
      />
    </div>
  );
}