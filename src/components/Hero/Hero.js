import "../Hero/Hero.scss";

const  Hero = ({video}) => 
    <video controls poster={video} className="hero__video" />
export default Hero;