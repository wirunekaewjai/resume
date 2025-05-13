import Head from 'next/head';
import Script from 'next/script';

import { Header } from '@src/components/header';
import { Content } from '@src/components/content';
import { Divider } from '@src/components/divider';

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
          content="Experienced as a website developer for 6 years with ReactJS. Create a many websites such as Blog, E-Commerce and Content Management System."
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
        job="Senior Frontend Engineer"
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
      <Divider />
      <Content
        sections={[
          {
            icon: 'work',
            title: 'WORK EXPERIENCE',
            items: [
              {
                title: 'Frontend Lead at Inspekt AI - Bangkok',
                subtitle: 'February 2025 - Present',
                isList: true,
                items: [
                  'Guide frontend technical direction via decision-making, code reviews and collaborating with design team',
                  'Spearhead the development and implementation of core application features',
                ],
              },
              {
                title: 'Senior Frontend Developer at Inspekt AI - Bangkok',
                subtitle: 'September 2023 - January 2025',
                isList: true,
                items: [
                  'Develop sophisticated web applications using React and Typescript, leveraging CesiumJS to render and display interactive 3D models',
                ],
              },
              {
                title: 'Software Engineer at Refinitiv, an LSEG business - Bangkok',
                subtitle: 'January 2021 - June 2022',
                items: [
                  'Contributed to the development of a storage framework using NodeJS and Typescript',
                  'Built and maintained API endpoints for CRUD operations using AWS AppSync, Lambda and DynamoDB'
                ],
              },
              {
                title: 'Full Stack Developer at Wolves Work | Digital Agency - Bangkok',
                subtitle: 'May 2018 - October 2020',
                isList: true,
                items: [
                  // <span>
                  //   <span>Delivered multiple client websites, including E-Commerce platforms, blogs, and company sites, utilizing NextJS</span>
                  //   <span
                  //     className="non-printable"
                  //     style={{ marginLeft: '1mm' }}
                  //   >
                  //     [Example:
                  //     <Link
                  //       href="https://www.suanluang.co.th/"
                  //       text="#1"
                  //     />
                  //     ,
                  //     <Link
                  //       href="https://mirror6.com/"
                  //       text="#2"
                  //     />
                  //     ,
                  //     <Link
                  //       href="https://www.creativeinvestment.space/"
                  //       text="#3"
                  //     />
                  //     ]
                  //   </span>
                  // </span>,
                  'Delivered multiple client websites, including E-Commerce platforms, blogs, and company sites using NextJS',
                  'Built a content management system for an E-Commerce website using ReactJS, styled-components, and Material UI (v3.6)',
                  'Created a user-friendly web creation tool designed for non-technical users, simplifying the website development process',
                ],
              },
              // {
              //   title: 'Freelance Developer - Bangkok',
              //   subtitle: 'January 2014 - April 2018',
              //   items: [
              //     // 'Develop Android application with Java and Wordpress REST API',
              //     'Built a Unity 2D game with C# and utilizing Firebase for backend services',
              //     'Created custom dashboard and CMS using ReactJS, Material UI, and Firebase to display and manage data generated by the Unity 2D game',
              //   ],
              // },
              {
                title: 'Lecturer at Dhurakij Pundit University - Bangkok',
                subtitle: 'January 2014 - August 2017',
                isList: true,
                items: [
                  'Instructed university students on core programming and development concepts, including HTML, CSS, Javascript, Android (Java), and Unity3D (C#)',
                ],
              },
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
                  'Developed a Windows Phone 8 application using C#',
                  'Modified existing OpenGL project that utilized the Kinect to develop custom user interactive features',
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
                  'Bachelor of Engineering in Computer Animation and Game Engineering (First Class Honours)',
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
