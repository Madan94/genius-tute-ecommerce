import PropTypes from "prop-types";
import * as React from "react";
import Image from "next/image";
interface Props {
  cardVariant: "default";
  className: any;
  lineClassName: any;
  lineClassNameOverride: any;
  imgClassName: any;
  imgClassNameOverride: any;
  mdiTickCircleClassName: any;
  mdiTickCircleClassNameOverride: any;
  mdiTickCircleClassName1: any;
  mdiTickCircleClassName2: any;
  mdiTickCircleClassName3: any;
}

export const Card = ({
  cardVariant,
  className,
  lineClassName,
  lineClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  mdiTickCircleClassName,
  mdiTickCircleClassNameOverride,
  mdiTickCircleClassName1,
  mdiTickCircleClassName2,
  mdiTickCircleClassName3,
}: Props) => {
  return (
    <div
      className={`relative w-[1276px] h-[513px] rounded-[20px] overflow-hidden border-2 border-solid border-[#4e3798] ${className}`}
    >
      <Image
        className={`absolute w-[1272px] h-px top-[2312px] left-[-554px] object-cover ${lineClassName}`}
        alt="Line"
        src=""
      />

      <Image
        className={`absolute w-[1272px] h-px top-[2416px] left-[-554px] object-cover ${lineClassNameOverride}`}
        alt="Line"
        src=""
      />

      <Image
        className={`absolute w-[1272px] h-px top-[2514px] left-[-554px] object-cover ${imgClassName}`}
        alt="Line"
        src=""
      />

      <Image
        className={`absolute w-[1272px] h-px top-[2616px] left-[-554px] object-cover ${imgClassNameOverride}`}
        alt="Line"
        src=""
      />

      <div className="absolute top-[39px] left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Chapter 1 - Algebra
      </div>

      <div className="absolute top-[141px] left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Chapter 2 - Probability
      </div>

      <div className="absolute top-60 left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Chapter 3 - Statistics
      </div>

      <div className="absolute top-[336px] left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Chapter 4-&nbsp;&nbsp;Geometry
      </div>

      <div className="absolute top-[448px] left-[82px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Chapter 5 - Integration
      </div>

      <div className="absolute w-[182px] h-[58px] top-[26px] left-[1052px]">
        <div className="relative h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden">
          <div className="absolute top-[13px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
            5 Videos
          </div>

          <Image
            className="absolute w-[18px] h-[18px] top-[19px] left-[142px]"
            alt="Simple line icons"
            src=""
          />
        </div>
      </div>

      <div className="absolute w-[182px] h-[58px] top-[133px] left-[1052px]">
        <div className="relative h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden">
          <div className="absolute top-[13px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
            5 Videos
          </div>

          <Image
            className="absolute w-[18px] h-[18px] top-[19px] left-[142px]"
            alt="Simple line icons"
            src=""
          />
        </div>
      </div>

      <div className="absolute w-[182px] h-[58px] top-[226px] left-[1052px]">
        <div className="relative h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden">
          <div className="absolute top-[13px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
            5 Videos
          </div>

          <Image
            className="absolute w-[18px] h-[18px] top-[19px] left-[142px]"
            alt="Simple line icons"
            src=""
          />
        </div>
      </div>

      <div className="absolute w-[182px] h-[58px] top-[321px] left-[1052px]">
        <div className="relative h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden">
          <div className="absolute top-[13px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
            5 Videos
          </div>

          <Image
            className="absolute w-[18px] h-[18px] top-[19px] left-[142px]"
            alt="Simple line icons"
            src=""
          />
        </div>
      </div>

      <div className="absolute w-[182px] h-[58px] top-[425px] left-[1052px]">
        <div className="relative h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden">
          <div className="absolute top-[13px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
            5 Videos
          </div>

          <Image
            className="absolute w-[18px] h-[18px] top-[19px] left-[142px]"
            alt="Simple line icons"
            src=""
          />
        </div>
      </div>

      <Image
        className={`top-[2246px] absolute w-[34px] h-[34px] left-[-518px] ${mdiTickCircleClassName}`}
        alt="Mdi tick circle"
        src=""
      />

      <Image
        className={`top-[2350px] absolute w-[34px] h-[34px] left-[-518px] ${mdiTickCircleClassNameOverride}`}
        alt="Mdi tick circle"
        src=""
      />

      <Image
        className={`top-[2452px] absolute w-[34px] h-[34px] left-[-518px] ${mdiTickCircleClassName1}`}
        alt="Mdi tick circle"
        src=""
      />

      <Image
        className={`top-[2546px] absolute w-[34px] h-[34px] left-[-518px] ${mdiTickCircleClassName2}`}
        alt="Mdi tick circle"
        src=""
      />

      <Image
        className={`top-[2660px] absolute w-[34px] h-[34px] left-[-518px] ${mdiTickCircleClassName3}`}
        alt="Mdi tick circle"
        src=""
      />
    </div>
  );
};

Card.propTypes = {
  cardVariant: PropTypes.oneOf(["default"]),
};
