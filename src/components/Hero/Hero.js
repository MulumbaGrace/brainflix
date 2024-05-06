import "../Hero/Hero.scss";

const  Hero = ({playVideo}) => 
    <video controls poster={playVideo} className="hero__video" />
export default Hero;