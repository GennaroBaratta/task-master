import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
    return (
        <div className="w-96 h-96 flex-col justify-start items-start inline-flex">
        <div className="w-96 h-16 px-16 bg-white border-b border-black flex-col justify-center items-center flex">
          <div className="self-stretch justify-center items-center gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">About Me</div>
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Projects</div>
                <div className="justify-center items-center gap-1 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Services</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="w-16 h-7 relative" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-end inline-flex">
              <div className="px-5 py-2 bg-black border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Menu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 px-16 bg-black bg-opacity-50 justify-start items-center inline-flex">
          <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-96 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-white text-6xl font-bold font-['Roboto'] leading-10">Empower your business with innovative web solutions</div>
              <div className="self-stretch text-white text-lg font-normal font-['Roboto'] leading-relaxed">As a solo software engineer based in Italy, I specialize in fullstack development using Nextjs and .Net. With a passion for implementing automation on the web, I can help your business thrive in the digital landscape.</div>
            </div>
            <div className="pt-4 justify-start items-start gap-4 inline-flex">
              <div className="px-6 py-3 bg-black border border-black justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
              </div>
              <div className="px-6 py-3 border border-white justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-12 h-12 relative" />
              <div className="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-black text-4xl font-bold font-['Roboto'] leading-10">Experience the power of a solo software engineer&apos;s expertise and innovation.</div>
                <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">With a deep understanding of Nextjs, .Net, and a passion for web automation, our solo software engineer brings cutting-edge solutions to your projects.</div>
              </div>
            </div>
            <Image className="grow shrink basis-0 h-96" src="https://via.placeholder.com/616x640" alt={''} />
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
          <div className="h-60 flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">Experienced</div>
            <div className="self-stretch h-48 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-10">Mastering Nextjs, .Net, and Automation Expertise</div>
              <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-relaxed">As a solo software engineer based in Italy, I specialize in fullstack development using Nextjs and .Net. I have a passion for implementing automation solutions on the web.</div>
            </div>
          </div>
          <div className="self-stretch h-96 flex-col justify-start items-center gap-12 flex">
            <div className="w-96 justify-center items-start gap-12 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <Image className="self-stretch h-60" src="https://via.placeholder.com/405x240" alt={''} />
                <div className="self-stretch h-28 flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">Nextjs Development</div>
                  <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Building dynamic and responsive web applications with Nextjs.</div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <Image className="self-stretch h-60" src="https://via.placeholder.com/405x240" alt={''} />
                <div className="self-stretch h-28 flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">.Net Development</div>
                  <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Leveraging the power of .Net to create robust and scalable solutions.</div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <Image className="self-stretch h-60" src="https://via.placeholder.com/405x240" alt={''} />
                <div className="self-stretch h-28 flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">Automation Expertise</div>
                  <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Implementing automation techniques to streamline workflows and improve efficiency.</div>
                </div>
              </div>
            </div>
            <div className="pt-4 justify-start items-center gap-6 inline-flex">
              <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-96 flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-80 flex-col justify-start items-start gap-4 flex">
                  <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">Expertise</div>
                  <div className="self-stretch h-72 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Unlocking the Power of Fullstack Development</div>
                    <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">By hiring a fullstack developer with automation experience, clients benefit from streamlined development processes and efficient web solutions. With expertise in Nextjs, .Net, and a passion for automation, I deliver high-quality, end-to-end development that maximizes productivity and enhances user experiences.</div>
                  </div>
                </div>
                <div className="self-stretch h-28 py-2 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Roboto'] leading-normal">Efficient web solutions that streamline development processes</div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Roboto'] leading-normal">High-quality, end-to-end development for maximum productivity</div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Roboto'] leading-normal">Enhanced user experiences through innovative automation techniques</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <Image className="grow shrink basis-0 h-96" src="https://via.placeholder.com/616x640" alt={''} />
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Engage with the Solo Software Engineer</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Discover the process of working with the solo software engineer for your project.</div>
                </div>
              </div>
              <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Collaborate with the Solo Software Engineer</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Experience the benefits of working with a solo software engineer on your project.</div>
                </div>
              </div>
              <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Achieve Success with the Solo Software Engineer</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Unlock the potential of your project by partnering with a solo software engineer.</div>
                </div>
              </div>
              <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-black bg-opacity-50 flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch justify-start items-center gap-20 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-72 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-white text-base font-semibold font-['Roboto'] leading-normal">Experienced</div>
                <div className="self-stretch h-60 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-white text-5xl font-bold font-['Roboto'] leading-10">Delivering Exceptional Results for Every Project</div>
                  <div className="self-stretch text-white text-lg font-normal font-['Roboto'] leading-relaxed">With a proven track record of successful projects, I bring expertise and innovation to every development endeavor. From fullstack development using Nextjs and .Net to implementing automation on the web, I am dedicated to delivering high-quality solutions that exceed expectations.</div>
                </div>
              </div>
              <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-white justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Contact</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
              <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 pl-8 border-l-2 border-white flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-white text-7xl font-bold font-['Roboto'] leading-10">50%</div>
                  <div className="self-stretch text-white text-xl font-bold font-['Roboto'] leading-7">Projects Completed</div>
                </div>
                <div className="grow shrink basis-0 pl-8 border-l-2 border-white flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-white text-7xl font-bold font-['Roboto'] leading-10">50%</div>
                  <div className="self-stretch text-white text-xl font-bold font-['Roboto'] leading-7">Happy Clients</div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 pl-8 border-l-2 border-white flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-white text-7xl font-bold font-['Roboto'] leading-10">50%</div>
                  <div className="self-stretch text-white text-xl font-bold font-['Roboto'] leading-7">Years of Experience</div>
                </div>
                <div className="grow shrink basis-0 pl-8 border-l-2 border-white flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-white text-7xl font-bold font-['Roboto'] leading-10">50%</div>
                  <div className="self-stretch text-white text-xl font-bold font-['Roboto'] leading-7">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="h-28 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">What They Say</div>
            <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Hear from our satisfied customers about their experience with us</div>
          </div>
          <div className="self-stretch h-96 justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-start gap-1 inline-flex" />
              <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <Image className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" alt={''} />
                <div className="flex-col justify-start items-start flex">
                  <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">John Doe</div>
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">CEO, ABC Company</div>
                </div>
                <div className="w-36 h-14 relative" />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-start gap-1 inline-flex" />
              <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <Image className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" alt={''} />
                <div className="flex-col justify-start items-start flex">
                  <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Jane Smith</div>
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">CTO, XYZ Corporation</div>
                </div>
                <div className="w-36 h-14 relative" />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-start gap-1 inline-flex" />
              <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <Image className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" alt={''} />
                <div className="flex-col justify-start items-start flex">
                  <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Mark Johnson</div>
                  <div className="text-black text-base font-normal font-['Roboto'] leading-normal">COO, PQR Industries</div>
                </div>
                <div className="w-36 h-14 relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="h-64 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Experienced Fullstack Developer for Hire</div>
              <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Get in touch to discuss your project requirements and bring your ideas to life.</div>
            </div>
            <div className="pt-4 justify-start items-start gap-4 inline-flex">
              <div className="px-6 py-3 bg-black border border-black justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Contact</div>
              </div>
              <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Hire</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="h-36 flex-col justify-start items-start gap-4 flex">
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Connect</div>
            <div className="self-stretch h-28 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Get in Touch</div>
              <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Feel free to reach out to us with any questions or inquiries.</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-12 h-12 relative" />
              <div className="self-stretch h-32 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Email</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">We&apos;re here to help and provide solutions for your needs.</div>
                </div>
                <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">info@company.com</div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-12 h-12 relative" />
              <div className="self-stretch h-32 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Phone</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Let us know how we can assist you.</div>
                </div>
                <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-12 h-12 relative" />
              <div className="self-stretch h-32 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Office</div>
                  <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Contact us today for more information.</div>
                </div>
                <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">123 Main St, Anytown, USA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="h-32 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">FAQs</div>
            <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</div>
          </div>
          <div className="self-stretch h-96 flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch h-28 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-px bg-black border border-black" />
              <div className="self-stretch justify-start items-start gap-16 inline-flex">
                <div className="w-96 text-black text-lg font-bold font-['Roboto'] leading-relaxed">How does it work?</div>
                <div className="grow shrink basis-0 text-black text-lg font-normal font-['Roboto'] leading-relaxed">Our services are tailored to meet your specific needs. We start by understanding your requirements and then develop a customized solution. Our team of experienced professionals will guide you through the entire process, ensuring a smooth and successful outcome.</div>
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-px bg-black border border-black" />
              <div className="self-stretch justify-start items-start gap-16 inline-flex">
                <div className="w-96 text-black text-lg font-bold font-['Roboto'] leading-relaxed">What are your rates?</div>
                <div className="grow shrink basis-0 text-black text-lg font-normal font-['Roboto'] leading-relaxed">Our rates vary depending on the scope and complexity of the project. We offer competitive pricing and strive to provide the best value for our clients. Contact us for a detailed quote.</div>
              </div>
            </div>
            <div className="self-stretch h-28 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-px bg-black border border-black" />
              <div className="self-stretch justify-start items-start gap-16 inline-flex">
                <div className="w-96 text-black text-lg font-bold font-['Roboto'] leading-relaxed">Do you offer support?</div>
                <div className="grow shrink basis-0 text-black text-lg font-normal font-['Roboto'] leading-relaxed">Yes, we offer ongoing support to ensure that your project runs smoothly even after it is completed. Our dedicated support team is available to address any issues or concerns you may have.</div>
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-px bg-black border border-black" />
              <div className="self-stretch justify-start items-start gap-16 inline-flex">
                <div className="w-96 text-black text-lg font-bold font-['Roboto'] leading-relaxed">Can you meet deadlines?</div>
                <div className="grow shrink basis-0 text-black text-lg font-normal font-['Roboto'] leading-relaxed">We understand the importance of meeting deadlines and strive to deliver projects on time. Our team is highly efficient and experienced in managing timelines to ensure timely delivery.</div>
              </div>
            </div>
          </div>
          <div className="h-40 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-20 flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-black text-3xl font-bold font-['Roboto'] leading-10">Still have questions?</div>
              <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Contact us for more information or to get started.</div>
            </div>
            <div className="w-24 px-6 py-3 border border-black justify-center items-center gap-2 inline-flex">
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Contact</div>
            </div>
          </div>
        </div>
        <div className="h-96 px-16 py-20 bg-white flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch h-60 justify-start items-start gap-32 inline-flex">
            <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-16 h-7 relative" />
              <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Stay up to date on the latest features and releases by joining our newsletter.</div>
              <div className="self-stretch h-24 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-12 p-3 bg-white border border-black justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-stone-500 text-base font-normal font-['Roboto'] leading-normal">Enter email here</div>
                  </div>
                  <div className="h-12 px-6 py-3 border border-black justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Submit</div>
                  </div>
                </div>
                <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</div>
              </div>
            </div>
            <div className="grow shrink basis-0 h-60 justify-start items-start gap-10 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Column One</div>
                <div className="self-stretch h-48 flex-col justify-start items-start flex">
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link One</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Two</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Three</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="w-56 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Four</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Five</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Column Two</div>
                <div className="self-stretch h-48 flex-col justify-start items-start flex">
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Six</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Seven</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Eight</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Nine</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-tight">Link Ten</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Follow Us</div>
                <div className="self-stretch h-48 flex-col justify-start items-start flex">
                  <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">Facebook</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">Instagram</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">X</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">LinkedIn</div>
                  </div>
                  <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">Youtube</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-px bg-black border border-black" />
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">© 2023 Relume. All rights reserved.</div>
              <div className="justify-start items-start gap-6 flex">
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Privacy Policy</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Terms of Service</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Cookies Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;
