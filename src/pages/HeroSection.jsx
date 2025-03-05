const HeroSection = () => {
    return (
      <main className="flex flex-col items-center justify-center text-center px-4 h-full py-3">
        <div
          className="relative bg-[url('/home-bg2.png')] bg-no-repeat bg-center max-sm:bg-[length:200%_70%] bg-[length:100%_auto] w-full h-screen flex flex-col justify-center items-center"
        >
          <p className="text-[#4671af] font-semibold text-2xl" style={{ fontFamily: "Libre Franklin" }}>
            WELCOME TO
          </p>
          <p className="font-extrabold text-8xl text-double-outline" style={{ fontFamily: "Libre Franklin" }}>
            CAM
          </p>
          <p className="text-lg text-[#4671af] font-semibold drop-shadow-xl">
            CENTER FOR APPLIED MATHEMATICS
          </p>
          {/* <img src="CAM-3.png" alt="Welcome" /> */}
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  