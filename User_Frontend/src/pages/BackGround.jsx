import Particles from "../components/Home/Particles";

function BackGroundPage() {
  return (
      <div>
      <div className="bg-black w-screen h-screen overflow-hidden fixed top-0">
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
      </div>
      </div>
  );
}

export default BackGroundPage;
