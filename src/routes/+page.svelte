<script lang="ts">
  import avatarSrc from "$lib/assets/avatar.jpg";
  import Header from "$lib/components/header.svelte";
  import Divider from "$lib/components/divider.svelte";
  import Content from "$lib/components/content.svelte";
</script>

<svelte:head>
  <title>Wirune Kaewjai - Software Engineer</title>
  <meta
    name="description"
    content="Experienced as a website developer for 6 years with ReactJS. Create a many websites such as Blog, E-Commerce and Content Management System."
  />
</svelte:head>

<div>
  <Header
    avatar={avatarSrc}
    name="WIRUNE KAEWJAI"
    contacts={[
      {
        groups: [
          {
            icon: "place",
            items: [{ text: "Bangkok, Thailand" }],
          },
          {
            icon: "email",
            items: [{ text: "wirune.kae@gmail.com", href: "mailto:wirune.kae@gmail.com" }],
          },
          {
            icon: "phone",
            items: [{ text: "+66879088566", href: "tel:+66879088566" }],
          },
        ],
      },
      {
        groups: [
          {
            icon: "link",
            items: [
              {
                text: "https://github.com/wirunekaewjai",
                href: "https://github.com/wirunekaewjai",
              },
              { text: "https://www.youtube.com/devdayo", href: "https://www.youtube.com/devdayo" },
              {
                text: "https://www.linkedin.com/in/wirunekaewjai",
                href: "https://www.linkedin.com/in/wirunekaewjai",
              },
            ],
          },
        ],
      },
    ]}
  />
  <Divider />
  <Content
    sections={[
      {
        icon: "work",
        title: "WORK EXPERIENCE",
        items: [
          {
            title: "Senior Web Developer (React) at Seven Peaks Software - Bangkok",
            subtitle: "August 2025 - Present",
            isList: true,
            items: [
              "Worked as an embedded frontend engineer within client product teams, contributing to their React/TypeScript codebase and following their engineering practices",
            ],
          },
          {
            title: "Senior Frontend Developer → Frontend Lead at Inspekt AI - Bangkok",
            subtitle: "September 2023 - July 2025",
            isList: true,
            items: [
              "Promoted to Frontend Lead (Feb 2025) after delivering core 3D visualization features; led technical direction via code reviews, architecture decisions, and collaboration with design team",
              "Built sophisticated web applications using React and Typescript, leveraging CesiumJS to render and display interactive 3D models",
              "Spearheaded development of core application features including measurement tools and annotation system",
            ],
          },
          {
            title: "Freelance Web Developer - Bangkok",
            subtitle: "January 2023 - August 2023",
            isList: true,
            items: [
              "Built a website for 'Crybaby - Everybody/Cries/Sometimes Exhibition'",
              "Built a Point of Sale (PoS) system for a small shop to manage orders at event spaces / pop-up booths",
            ],
          },
          {
            title: "Software Engineer at Refinitiv, an LSEG business - Bangkok",
            subtitle: "January 2021 - June 2022",
            items: [
              "Contributed to the development of a storage framework using NodeJS and Typescript",
              "Built and maintained API endpoints for CRUD operations using AWS AppSync, Lambda and DynamoDB",
            ],
          },
          {
            title: "Full Stack Developer at Wolves Work | Digital Agency - Bangkok",
            subtitle: "May 2018 - October 2020",
            isList: true,
            items: [
              "Delivered multiple client websites, including E-Commerce platforms, blogs, and company sites using NextJS",
              "Built a content management system for an E-Commerce website using ReactJS, styled-components, and Material UI (v3.6)",
              "Created a user-friendly web creation tool designed for non-technical users, simplifying the website development process",
            ],
          },
          {
            title: "Lecturer at Dhurakij Pundit University - Bangkok",
            subtitle: "January 2014 - August 2017",
            isList: true,
            items: [
              "Instructed university students on core programming and development concepts, including HTML, CSS, Javascript, Android (Java), and Unity3D (C#)",
            ],
          },
        ],
      },
      // {
      //   icon: "work",
      //   title: "INTERNSHIP",
      //   items: [
      //     {
      //       title: "Software Developer at Microsoft Innovation Center - Bangkok",
      //       subtitle: "November 2012 - March 2013",
      //       items: [
      //         // "Developed a Windows Phone 8 application using C#",
      //         "Modified existing OpenGL project that utilized the Kinect to develop custom user interactive features",
      //       ],
      //     },
      //   ],
      // },
      {
        icon: "school",
        title: "EDUCATION",
        items: [
          {
            title: "Dhurakij Pundit University - Bangkok",
            subtitle: "2009 - 2013",
            items: [
              "Bachelor of Engineering in Computer Animation and Game Engineering (First Class Honours)",
            ],
          },
        ],
      },
    ]}
  />
</div>
