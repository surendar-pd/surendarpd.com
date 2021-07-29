import {React,useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import ProgressBar from "react-scroll-progress-bar"; //Add this line
import {Camera, Code, ArrowRight} from './Icons'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import img from './images/img1.jpg'
import { Backdrop } from '@material-ui/core';
function App() {
  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom){
      <ArrowRight style={{display: 'none'}}/>
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container 
    // onScroll={handleScroll}
    >
      <ArrowRight />
      <ProgressBar bgcolor="#30DFA3"/>
        <Home>
          <FadeIn delay={200}>
            <h1>Hello World! I'am</h1>
            <h2>Surendar PD.</h2>
            <h3>Web Developer & Photographer</h3>
            <p>And a second year student at YESARAM University.</p>            
            <SocialIcons>
              <a href="https://www.instagram.com/surendar_pd/" target="_blank" rel="noopener noreferrer"><InstagramIcon id='instagram'/></a>
              <a href="https://github.com/surendar-pd" target="_blank" rel="noopener noreferrer"><GitHubIcon id='github'/></a>
              <a href="https://www.linkedin.com/in/surendar-pd-b725921b1/" target="_blank" rel="noopener noreferrer"><LinkedInIcon id='linkedin'/></a>
            </SocialIcons>
          </FadeIn>
        </Home>
        <About>
          <AboutDesc>
            <h3>About.</h3>
            <p>Hey there, my name is <span>Surendar PD, </span>
            and I'am a computer science student who started with
            animating buttons to designing webpages.
            And not just webpages I  make web apps too with <span>React JS</span></p>
          </AboutDesc>
        </About>
        <Photography>
        </Photography>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height:100vh;
  color:var(--main-text-color);
`

const Home = styled.div`
  height: 100vh;
  min-width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  h1{
    color:var(--gray);
    font-size:1.25rem;
    font-weight: 400;
    line-height:1.1;
    margin: 0 0 10px 6px;
  }
  h2{
    font-size:5rem;
    font-weight: 500;
    line-height:1.1;
  }
  h3{
    color:var(--light-gray);
    margin-top: 10px;
    font-size:3rem;
    line-height:1.1;
    font-weight:500;
  }
  p{
    color:var(--dark-gray);
    max-width: 540px;
    margin-top:20px;
    font-size:1rem;
  }
  @media(max-width:640px){
    h1{
      font-size: 0.625rem;
    }
    h2{
      font-size:2.5rem;
    }
    h3{
      font-size:1.5rem;
    }
    p{
      font-size:0.5rem;
    }
  }
`
const SocialIcons = styled.div`
  margin-top: 20px;
  width: 200px;
  display: flex;
  justify-content:space-between;
  a{
    transition:all 0.3s ease-in-out;
    color: var(--gray);
    text-decoration:none;
    :hover{
      color: var(--main-text-color);
      transform: scale(1.25);
    }
  }
`
const About = styled.div`
    min-width:100%;
    height: 50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    h1{
      color:var(--gray);
      font-size:1.25rem;
      font-weight: 400;
      line-height:1.1;
      margin: 0 0 10px 0;
    }
    h2{
      font-size:5rem;
      font-weight: 500;
      line-height:1.1;
    }
    h3{
      width:fit-content;
      color:var(--light-gray);
      margin-top: 10px;
      font-size:3rem;
      line-height:1.1;
      font-weight:500;
      :hover{
          color:var(--main-text-color);
        }
    }
    p{
      color:var(--dark-gray);
      max-width: 640px;
      margin-top:20px;
      font-size:1rem;
    }
`
const AboutDesc = styled.div`
p{
  text-align:justify;
}
  span {
    color:var(--main-text-color);
  }
`

const Photography = styled.div`
  min-width:100%;
  height: 100vh;
`