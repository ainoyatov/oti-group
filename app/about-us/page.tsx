import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            About
          </h2>
          <p className="text-lg leading-relaxed">
            We are a <span className="font-semibold">family-owned business</span> committed to helping
            homeowners sell their properties with ease and confidence. Whether you're facing foreclosure,
            tired of managing the property, or simply ready to move on for any reason —{" "}
            <span className="text-[#F5B429] font-medium">OT Investment Group Properties</span> is here to help.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our team is dedicated to offering honest guidance and tailored solutions that fit your unique
            situation. We strive to make the process smooth, stress-free, and beneficial for you. We genuinely
            look forward to working together and helping you find the best path forward.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            Our mission is to serve every client with <span className="font-semibold">honesty, integrity, and competence</span>.
            While our primary focus is purchasing homes, we also assist clients in obtaining home loans with
            the most competitive interest rates and the lowest possible closing costs.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We understand that navigating real estate and financing can come with challenges. That’s why we’re
            committed to helping you overcome any roadblocks along the way — providing solutions, not just transactions.
          </p>
        </div>
      </div>
    </section>
  );
}