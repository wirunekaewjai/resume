import Head from 'next/head';

import { Header } from '@src/components/header';
import { Content } from '@src/components/content';

export default function Page ()
{
  const ga = process.env.GA;

  return (
    <div>
      <Head>
        {
          ga ?
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}></script>
            <script 
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
          Wirune Kaewjai - Frontend Web Developer
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
        job="Frontend Web Developer"
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
                title: 'Full Stack Developer at Wolves Work | Digital Agency, Bangkok',
                subtitle: 'May 2018 – October 2020',
                items: [
                  'Develop E-Commerce Websites with NextJS and Styled-JSX',
                  'Develop CMS for E-Commerce Website with Create-React-App and Styled-Components + Material UI (v3.6)',
                  'Develop Web Creation Tool for Non-Developer',
                ],
              },
              {
                title: 'Freelance Developer, Bangkok',
                subtitle: 'January 2014 – April 2018',
                items: [
                  'Develop Android Application with Java and Wordpress REST API',
                  'Develop Unity 2D Game with C# and Firebase Database and Firebase Functions',
                  'Develop Dashboard and Content Management with ReactJS + Material UI (v3.6) and Firebase Cloud Firestore',
                ],
              },
              {
                title: 'Lecturer at Dhurakij Pundit University, Bangkok',
                subtitle: 'January 2014 – August 2017',
                items: [
                  'HTML, CSS, Javascript',
                  'Android (Java)',
                  'Unity3D (C#)',
                  'Java / Object-Oriented Programming',
                ],
              }
            ],
          },
          {
            icon: 'work',
            title: 'INTERNSHIP',
            items: [
              {
                title: 'Software Developer at Microsoft Innovation Center - Bangkok, Bangkok',
                subtitle: 'November 2012 – March 2013',
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
                title: 'Dhurakij Pundit University, Bangkok',
                subtitle: '2009 – 2013',
                items: [
                  'Bachelor of Engineering in Computer Animation and Game Engineering',
                ],
              }
            ],
          },
          {
            icon: 'build',
            title: 'SKILL',
            tags: [
              'HTML',
              'CSS',
              'Javascript',
              'ReactJS',
              'NextJS',
              'Firebase Cloud Firestore',
              'Firebase Functions',
              'Google Cloudrun',
              'Material UI',
              'Styled Components',
              'Styled JSX',
              'CSS Module',
              'Mongo DB',
            ],
          }
        ]}
      />
    </div>
  );
}