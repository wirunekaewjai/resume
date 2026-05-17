<script lang="ts">
  import avatarSrc from "$lib/assets/avatar.jpg";
  import Header from "$lib/components/header.svelte";
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
    heading="Senior Frontend Engineer with 7+ years building React/TypeScript applications, specializing in interactive 3D web experiences (CesiumJS). Background in Computer Animation & Game Engineering."
    stack={[
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "CesiumJS",
      "Firebase (Firestore, Auth, Storage)",
      "AWS (AppSync/Lambda/DynamoDB)",
    ]}
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
  <Content
    sections={[
      {
        icon: "work",
        title: "WORK EXPERIENCE",
        items: [
          {
            display: "normal",
            title: "Senior Web Developer (React) at Seven Peaks Software - Bangkok",
            subtitle: "August 2025 - Present",
            itemType: "list",
            items: [
              "Work as an embedded frontend engineer within client product teams, contributing to their React/TypeScript codebase and following their engineering practices",
              "Deliver features across multiple client engagements, adapting to different product domains and team workflows",
            ],
          },
          {
            display: "normal",
            title: "Senior Frontend Developer → Frontend Lead at Inspekt AI - Bangkok",
            subtitle: "September 2023 - July 2025",
            itemType: "list",
            items: [
              "Promoted to Frontend Lead (Feb 2025) after delivering core 3D visualization features; led technical direction via code reviews, architecture decisions, and collaboration with design team",
              "Built sophisticated web applications using React and Typescript, leveraging CesiumJS to render and display interactive 3D models",
              "Spearheaded development of core application features including measurement tools and annotation system",
            ],
          },
          {
            display: "short",
            title: "Freelance Web Developer - Bangkok",
            subtitle: "(2023)",
            itemType: "list",
            items: [
              "Built a website for 'Crybaby - Everybody/Cries/Sometimes Exhibition'",
              "Built a Point of Sale (PoS) system for a small shop to manage orders at event spaces / pop-up booths",
            ],
          },
          {
            display: "short",
            title: "Software Engineer at Refinitiv, an LSEG business - Bangkok",
            subtitle: "(2021 - 2022)",
            itemType: "list",
            items: [
              "Built storage framework and CRUD API endpoints using NodeJS, TypeScript, and AWS (AppSync, Lambda, DynamoDB)",
            ],
          },
          {
            display: "short",
            title: "Full Stack Developer at Wolves Work | Digital Agency - Bangkok",
            subtitle: "(2018 - 2020)",
            itemType: "list",
            items: [
              "Delivered multiple client websites including E-Commerce platforms, blogs, and company sites using NextJS and ReactJS",
              "Built a content management system and a user-friendly web creation tool that enabled non-technical users to build websites",
            ],
          },
          {
            display: "short",
            title: "Lecturer at Dhurakij Pundit University - Bangkok",
            subtitle: "(2014 - 2017)",
            itemType: "text",
            items: [
              "Taught core programming and development: HTML, CSS, JavaScript, Android (Java), Unity3D (C#)",
            ],
          },
        ],
      },
      // {
      //   icon: "work",
      //   title: "INTERNSHIP",
      //   items: [
      //     {
      //       display: "short",
      //       title: "Software Developer at Microsoft Innovation Center - Bangkok",
      //       subtitle: "(November 2012 - March 2013)",
      //       itemType: "text",
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
            display: "short",
            title: "Dhurakij Pundit University - Bangkok",
            subtitle: "(2009 - 2013)",
            itemType: "text",
            items: [
              "Bachelor of Engineering in Computer Animation and Game Engineering (First Class Honours)",
            ],
          },
        ],
      },
    ]}
  />
</div>
