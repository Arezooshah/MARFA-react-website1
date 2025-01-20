import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";
import pic1 from  "/public/team/15.jpg";
import pic2 from  "/public/team/12.jpg";
import pic3 from  "/public/team/15.jpg";
import pic4 from  "/public/team/14.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      " مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
      image: pic1,

    rating: 5,
  },
  {
    name: "بهراد بتوان",
    company: "شرکت مهندسی بهارد",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید.",
    image: pic2,

    rating: 5,
  },
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
    image: pic3,

    rating: 5,
  },
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
    image: pic4,

    rating: 5,
  },
];

const SectionTestimonialsSliderLayout2 = () => {
  return (
    <section className="dark:bg-slate-900 bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 dark:bg-none py-20 lg:py-24 overflow-hidden">
      <div className="relative xl:left-[calc((100vw-1312px)/4)] xl:pr-[calc((100vw-1280px)/2)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] overflow-hidden container">
        <SectionTitle
          subtitle="مشتریانی  که قبلاً خدمات ما را امتحان کرده اند."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          مشتریان راضی
        </SectionTitle>
        <TestimonialsSliderLayout2
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Pagination],
            pagination: { clickable: true },
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSliderLayout2;
