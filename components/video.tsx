export function LandingVideo() {
  return (
    <video className="w-full h-full object-cover -z-10" autoPlay loop muted>
      <source src="/landing_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag. 
    </video>
  );
}
