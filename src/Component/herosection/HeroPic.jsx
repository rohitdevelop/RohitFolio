// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import TiltedCard from "../aboutSection/TiltedCard";

// const HeroPic = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="flex flex-col items-center justify-center w-full md:w-1/2 mt-4 md:mt-0 md:ml-20"
//     >
//       <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] flex justify-center items-center">
//         <div className="rounded-full overflow-hidden w-full h-full">
//           <TiltedCard
//             imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&s=10"
//             imageClassName="rounded-full" // circular image
//             customWrapperClass="overflow-hidden w-full h-full" // make wrapper full
//             backgroundElement={null}
//             containerHeight="100%"
//             containerWidth="100%"
//             imageHeight="100%"
//             imageWidth="100%"
//             rotateAmplitude={15}
//             scaleOnHover={1.0}
//             showTooltip={false}
//             displayOverlayContent={false}
//           />
 
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic; 


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroPic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center w-full"
    >
      <div
        className="
        relative flex justify-center items-center
        w-[400px] h-[400px] 
        sm:w-[340px] sm:h-[340px]
        md:w-[420px] md:h-[420px]
        lg:w-[500px] lg:h-[500px]
        xl:w-[580px] xl:h-[580px]
        "
      >
        {/* Circle Frame */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Spline
            scene="https://prod.spline.design/9zfUfWKvuzowewhe/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
