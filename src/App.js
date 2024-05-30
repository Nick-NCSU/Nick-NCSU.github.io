import { Box, Container, Grid, Typography } from '@mui/material';
import JSLogo from './images/JS.png';
import MongoDBLogo from './images/MongoDB.png';
import ReactLogo from './images/React.png';
import CSharpLogo from './images/CSharp.png';
import NodeJSLogo from './images/NodeJS.png';
import TSLogo from './images/TS.png';
import DetailCard from './components/DetailCard';
import { GitHub, Link } from '@mui/icons-material';

function App() {
  return (
    <Container>
      <Box className='box-center'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "BF Interpreter",
              description: "Interpreter for esoteric language brainfuck. Provides helpful debugging features and output formats.",
              technologies: [
                {
                  name: "React",
                  img: ReactLogo
                },
                {
                  name: "TypeScript",
                  img: TSLogo
                },
                {
                  name: "Node.js",
                  img: NodeJSLogo
                }
              ],
              links: [
                {
                  icon: Link,
                  name: "Page",
                  url: "https://nick-ncsu.github.io/bf/"
                },
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/Nick-NCSU/bf"
                }
              ]
            }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "SRC-Bot",
              description: "Node.js Discord bot which utilizes REST API from multiple websites. Uses MongoDB to store data and runs using Heroku.",
              technologies: [
                {
                  name: "JavaScript",
                  img: JSLogo
                },
                {
                  name: "Node.js",
                  img: NodeJSLogo
                },
                {
                  name: "MongoDB",
                  img: MongoDBLogo
                },
              ],
              links: [
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/Nick-NCSU/hpbot"
                }
              ]
            }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "The Poller",
              description: "Site to automatically fetch a team's GitHub PRs and display in a user-friendly table.",
              technologies: [
                {
                  name: "React",
                  img: ReactLogo
                },
                {
                  name: "TypeScript",
                  img: TSLogo
                },
                {
                  name: "Node.js",
                  img: NodeJSLogo
                }
              ],
              links: [
                {
                  icon: Link,
                  name: "Page",
                  url: "https://the-poller.github.io/the-poller/"
                },
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/The-Poller/the-poller"
                }
              ]
            }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "Retime",
              description: "React/Material-UI app used to find elapsed time between two points on a YouTube video.",
              technologies: [
                {
                  name: "React",
                  img: ReactLogo
                },
                {
                  name: "JavaScript",
                  img: JSLogo
                },
                {
                  name: "Node.js",
                  img: NodeJSLogo
                }
              ],
              links: [
                {
                  icon: Link,
                  name: "Page",
                  url: "https://nick-ncsu.github.io/retime/"
                },
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/Nick-NCSU/retime"
                }
              ]
            }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "Portfolio",
              description: "This website built in React and Material-UI.",
              technologies: [
                {
                  name: "React",
                  img: ReactLogo
                },
                {
                  name: "JavaScript",
                  img: JSLogo
                }
              ],
              links: [
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/Nick-NCSU/Nick-NCSU.github.io"
                }
              ]
            }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailCard details={{
              title: "MoreStaves",
              description: "Mod for Terraria developed in C# complete with 20+ items, custom AI projectiles, and a full wiki.",
              technologies: [
                {
                  name: "C#",
                  img: CSharpLogo
                }
              ],
              links: [
                {
                  icon: Link,
                  name: "Wiki",
                  url: "https://github.com/Nick-NCSU/MoreStaves/wiki"
                },
                {
                  icon: GitHub,
                  name: "GitHub",
                  url: "https://github.com/Nick-NCSU/MoreStaves"
                }
              ]
            }} />
          </Grid>
        </Grid>
        <Container style={{ bottom: 5, position: 'absolute', textAlign: 'center' }}>
          <Typography>Nick Thompson | © {new Date().getFullYear()}</Typography>
        </Container>
      </Box>
    </Container>
  );
}

export default App;
