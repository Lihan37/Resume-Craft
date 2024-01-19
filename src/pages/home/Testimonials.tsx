import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionHeader from "../../components/common/SectionHeader";

interface TestimonialsItem {
  id: number;
  name: string;
  review: string;
  image: string;
  star: number;
  date: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsItem[]>([]);

  useEffect(() => {
    fetch("/src/data/testimonials.json")
      .then((response) => response.json())
      .then((data: TestimonialsItem[]) => setTestimonials(data))
      .catch((error) =>
        console.error("Error fetching testimonials data:", error)
      );
  }, []);

  return (
    <div>
      <h1>Testimonials 1</h1>
    </div>
  );
};

export default Testimonials;
