import Head from 'next/head'
import * as React from 'react';

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Components
import SkeletonLoading from '../components/skeletonLoading.js';
import ExperienceComponent from '../components/experience/experienceComponent';

// Hooks
import useContentful from '../hooks/use-contenful';

const drawerWidth = 240;

const query = ` {
  experienceCollection(order: order_ASC) {
    items {
      order
      slug
      name
      position
      location
      dateRange
      url
      linkedin
      experience {
        json
      }
      skillsCollection(limit:15) {
        items {
          ... on Skills {
            name
            slug
            image {
              url
            }
          }
				}
      }
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}
`

export default function Experience() {
  let {data, errors} = useContentful(query)

  if (errors) {
    return <span style={{color:"red"}}> {errors.map(error => error.message).join(",")} </span>
  }

  if (!data) { 
    return <SkeletonLoading/> 
  }
  
  return (
      <>
      <Head>
        <title>Experience - Brandon Tetrick</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, justifyContent: 'center' } }}
        >
          <Typography 
            variant="h3" 
            align="center"
          >
            Experience
          </Typography>

          <Typography 
            paragraph align="center"
          >
            Results-driven web developer with over 7 years of experience spanning diverse projects in both public and private sectors. 
            Specializing in developing dynamic websites that blend creativity and cutting-edge technology. 
            Adept at implementing strategic digital marketing initiatives that have led to a 25% average increase in website traffic across various projects. 
            Lifelong learner, dedicated to staying ahead of industry trends and leveraging emerging technologies. 
            Passionate about web development and digital innovation. Proficient in HTML, CSS, JavaScript, and proficient in collaborating with cross-functional teams to deliver high-quality solutions.
          </Typography>

          <Divider/> 

          { data.experienceCollection.items.map(experience => {
            //console.table(experience)
            return <ExperienceComponent experience={experience} key={experience.order} /> 
          })}
        </Box>
      </Box>
      </>
    
  )
}
