import { Card } from "@/components/ui/card";
import HeroImg from "@/assets/img/hero.svg";
import ExperienceIcon from "@/assets/icon/rnd.png";
import InnovationIcon from "@/assets/icon/ideas.png";
import CustomerIcon from "@/assets/icon/customer.png";
import AffordabiltyIcon from "@/assets/icon/business.png";
import ContactUsImg from "@/assets/img/contact-us.svg";
import React from "react";
import { Button } from "@/components/ui/button";
// import Loading from "@/components/Loading";

export default function Home() {
  const listFeature = [
    {
      tier: "Tier 1",
      type: "Basic",
      title: "Foundation of Success",
      price: { monthly: "$19.99", annual: "$215.89" },
      list_item: ["📦 Easily record incoming goods.", "🚚 Accurately log outgoing goods.", "💰 Keep track of daily profits."],
    },
    {
      tier: "Tier 2",
      type: "Business",
      title: "Elevate Your Business",
      price: { monthly: "$39.99", annual: "$431.89" },
      list_item: ["📦 Seamlessly manage inbound and outbound goods.", "💰 Clearly record your profits.", "📊 Analyze sales results with informative charts.", "🌟 24/7 Support to empower your business."],
    },
    {
      tier: "Tier 3",
      type: "Entrepreneur",
      title: "Unlock Your Business Potential",
      price: { monthly: "$59.99", annual: "$647.89" },
      list_item: [
        "📦 Automatically track inbound and outbound goods.",
        "💰 Record profits with high precision.",
        "📊 Dive deep into sales analysis with advanced charts.",
        "🌟 24/7 Support ready to assist you.",
        "📈 Export data to Excel with a single click.",
        "🧠 AI Income Predictions for smarter business decisions.",
      ],
    },
  ];

  const listAbout = [
    {
      title: "Experience",
      desc: "With years of hands-on business experience, we understand the challenges you face and have designed BizProFit to address them head-on.",
      icon: ExperienceIcon,
    },
    {
      title: "Innovation",
      desc: " We're committed to staying at the forefront of technology, incorporating AI and data analysis to help you make smarter business choices.",
      icon: InnovationIcon,
    },
    {
      title: "Customer-Centric",
      desc: "Your success is our success. We pride ourselves on offering exceptional 24/7 support and continually improving our platform based on your feedback.",
      icon: CustomerIcon,
    },
    {
      title: "Affordability",
      desc: "We believe that every entrepreneur should have access to the tools they need to thrive, which is why we offer flexible pricing plans to suit businesses of all sizes.",
      icon: AffordabiltyIcon,
    },
  ];

  return (
    <React.Fragment>
      <section className="min-h-screen relative">
        <div className="flex flex-col md:flex-row gap-5 pt-[15rem] md:pt-[15rem]">
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <div className="font-extrabold text-4xl text-center md:text-start md:text-5xl">Are you a smart and ambitious entrepreneur ?</div>
            <div className="mt-5 font-light text-center md:text-start">
              We have the perfect solution to help you manage your business more efficiently and effectively. Sellify is here as your loyal companion in recording every aspect of your business, from inbound and outbound goods to tracking
              your daily profits
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center">
            <img src={HeroImg} />
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-col items-center">
          <div className="font-extrabold text-4xl text-center">About us</div>
          <div className="font-light text-center w-full md:w-9/12 my-5">
            At Sellify, we understand the passion and dedication that fuels your entrepreneurial spirit. We're a team of innovators who share your ambition for success and growth. Our mission is to empower you with the tools and insights
            you need to thrive in the ever-evolving business landscape.
          </div>
          <div className="font-extrabold text-2xl mb-5 mt-[4rem]">Why Choose Sellify?</div>
          <div className="flex md:flex-row flex-col gap-5">
            {listAbout.map((item) => (
              <Card key={item.title} className="p-5 md:flex-col flex-row min-h-96 scale-100 hover:scale-105 duration-500 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="flex justify-center">
                  <img src={item.icon} className="w-1/2" />
                </div>
                <div>
                  <div className="font-bold text-center text-2xl my-3 text-cyan-500">{item.title}</div>
                  <div className="font-light text-center">{item.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-col justify-center h-full ">
          <div className="flex flex-col items-center ">
            <div className="text-center w-8/12">
              <div className="font-extrabold text-4xl">Pricing</div>
            </div>
            <div className="my-10">
              <div className="font-extrabold text-2xl text-center mb-5">What Does Sellify Offer ?</div>
              <div className="flex flex-col md:flex-row gap-5">
                {listFeature.map((feature) => (
                  <Card key={feature.tier} className="p-5 w-full min-h-96 cursor-pointer scale-100 hover:scale-105 duration-500 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex flex-col h-full gap-5">
                      <div className="flex flex-col text-center">
                        <div className="text-2xl font-extrabold">{feature.tier}</div>
                        <div>{feature.type}</div>
                        <div>{feature.title}</div>
                        <div className="font-extrabold text-4xl">
                          {feature.price.monthly}
                          <span className="text-xl font-light">/mo</span>
                        </div>
                        {feature.list_item.map((item, index) => (
                          <ul key={index} className="text-start flex flex-col items-start">
                            {item}
                          </ul>
                        ))}
                      </div>
                      <div className="flex items-end h-full w-full">
                        <Button className="w-full bg-cyan-500">Purchase</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto min-h-screen">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="text-center font-extrabold text-4xl my-10">Contact us</div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/2">
              <div className="text-2xl font-extrabold my-5 text-center md:text-start">Have questions, feedback, or need assistance?</div>
              <div className="mb-5">We're here to help. Feel free to reach out to our dedicated support team through the following channels:</div>
              <ul>
                <li className="font-bold">Customer Support</li>
                <li>Email: support@bizprofit.com </li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
              <ul className="my-5">
                <li className="font-bold">Business Inquiries</li>
                <li>Email: sales@bizprofit.com</li>
                <li>Phone: +1 (555) 987-6543</li>
              </ul>
              <ul>
                <li className="font-bold">Address</li>
                <li>123 BizProFit Avenue Suite 101 City, State ZIP Code Country</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src={ContactUsImg} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
