import { cx } from "@/shared/config/constants";
import { ShapeTypes } from "@/shared/config/types";
import { icons } from "@/shared/libs/icons";



const Shape = ({...shapes}) => {
    const { title, description, shape, color, className } = shapes as ShapeTypes;
  return (
    <div className={className + " " + "group z-50"}>
      <div className="relative lg:w-[230px] md:w[200px] md:w-[143px] w-[110px] m-auto group">
        <img
          src={`images1/SVG/${shape}`}
       
         
          alt="record image"
        />

        <h1
          className={cx(
            "gap-2 text-[#131313] absolute inset-0 flex items-center justify-center md:text-[18px] lg:text-2xl  text-sm font-medium cursor-pointer group-hover:hidden",
            color && color
          )}
        >
          {title} <span>{icons.arrowRight}</span>
        </h1>

        <div
          className={
            "absolute hidden group-hover:block w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        >
          <div className="flex gap-5 flex-col justify-center items-center w-full hi">
            <h2 className="w-full text-2xl font-semibold hidden">{title}</h2>
            <p className="text-[12px]"> {description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shape;
