import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 h-full py-3 smooth-scroll">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-[url('/home-bg2.png')] bg-no-repeat bg-center bg-cover w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-white/70 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />

        {/* Content container with staggered animations */}
        <motion.div
          className="z-10 flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome text with animation */}
          <motion.p
            className="text-[#4671af] font-semibold text-lg sm:text-2xl tracking-wider mb-2"
            style={{ fontFamily: "Libre Franklin, sans-serif" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WELCOME TO
          </motion.p>

          {/* CAM logo with reveal animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
              duration: 0.8
            }}
          >
            <motion.p
              className="font-extrabold text-6xl sm:text-8xl md:text-9xl text-double-outline relative"
              style={{ fontFamily: "Libre Franklin, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              CAM
              {/* Decorative elements */}
              <motion.span
                className="absolute -top-4 -right-4 text-base text-[#4671af] font-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                ●
              </motion.span>
              <motion.span
                className="absolute -bottom-4 -left-4 text-base text-[#4671af] font-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                ●
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Subtitle with animation */}
          <motion.p
            className="text-md sm:text-lg text-[#4671af] font-semibold drop-shadow-xl mt-4 tracking-wide"
            style={{ fontFamily: "Libre Franklin, sans-serif" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            CENTER FOR APPLIED MATHEMATICS
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-[#4671af] rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 0.7 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 10, 20] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            <svg className="w-6 h-6 text-[#4671af]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HeroSection;
