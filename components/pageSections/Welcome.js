import React from "react";
import Link from "next/link";
import SectionContainer from "../common/SectionContainer";

function Welcome() {
  return (
    //  sm:mt-[22.1%]  and sm:mb-[22.1%] but might be too much gap top and bottom depending on screen size
    <SectionContainer background={"bg-primary-500"}>
      <div className="mx-[4%] mt-[10%] sm:mt-[14%] md:mt-[18%] lg:mt-[22.1%] mb-[4%] font-main text-white text-xl sm:text-3xl md:text-4xl lg:text-7xl">
        &quot;Education is our passport to the future, for tomorrow belongs to
        the people who prepare for it today&quot;
      </div>
      <div className="text-right text-white text-lg sm:text-xl md:text-2xl lg:text-5xl">
        - Malcom X&emsp;&emsp;
      </div>
      <div className="mt-[4%] mb-[10%] sm:mb-[14%] md:mb-[18%] lg:mb-[22.1%]">
        <Link href="" passHref>
          <a
            className="btn bg-primary-300 text-white hover:bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 sm:text-lg md:text-lg lg:text-xl"
            target={"_blank"}
          >
            Kickstart your future
          </a>
        </Link>
      </div>
    </SectionContainer>
  );
}

export default Welcome;
