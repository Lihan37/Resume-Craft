import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionHeader from "../../components/common/SectionHeader";
import { data } from "../../constant";

const Testimonials: React.FC = () => {
  return (
    <div className="my-20">
      <h1 className="text-2xl text-center text-c-primary font-bold">
        Testimonials
      </h1>
      <SectionHeader>Reviewed By The Community</SectionHeader>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 ">
        {data.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            // testimonial={testimonial}
            className="bg-[#C8D7EF] p-8 rounded-xl">
            <Rating
              style={{ maxWidth: 120 }}
              value={testimonial.star}
              readOnly
            />
            <h2 className="text-justify my-8">{testimonial.review}</h2>
            <div className="flex gap-5 items-center ">
              <img
                className="w-[60px] rounded-full"
                src={testimonial.image}
                alt=""
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
