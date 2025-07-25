"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SERVICES = [
	{
		title: "UI/UX Services",
		description:
			"We craft intuitive, user-centric interfaces that delight and engage. Our UI/UX team ensures every digital experience is seamless, accessible, and visually stunning.",
		bullets: [
			"User research & persona development",
			"Wireframing & interactive prototyping",
			"UI design for web and mobile apps",
			"UX audits & usability testing",
			"Accessibility-focused design",
		],
		image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
	},
	{
		title: "Web Development",
		description:
			"From landing pages to complex web apps, we build robust, scalable, and high-performing websites. Our developers use the latest technologies to deliver secure, maintainable solutions.",
		bullets: [
			"Custom website & web app development",
			"Responsive & mobile-first design",
			"API integration & backend services",
			"SEO & performance optimization",
			"Ongoing support & maintenance",
		],
		image: "/images/services/web-design-hero.jpg",
	},
	{
		title: "E-Commerce Solutions",
		description:
			"Empower your business to sell online with custom e-commerce platforms. We create secure, user-friendly stores that drive sales and enhance customer experience.",
		bullets: [
			"Custom e-commerce website development",
			"Payment gateway integration",
			"Mobile-optimized shopping",
			"Inventory & order management",
			"Analytics & conversion tracking",
		],
		image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
	},
	{
		title: "Mobile App Development",
		description:
			"Reach your audience on any device. We design and develop cross-platform mobile apps that are fast, reliable, and tailored to your business goals.",
		bullets: [
			"iOS & Android app development",
			"Cross-platform solutions",
			"App store deployment",
			"Push notifications & analytics",
			"Ongoing updates & support",
		],
		image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
	},
	{
		title: "CMS & Content Solutions",
		description:
			"Manage your content with ease. We implement flexible CMS platforms that empower your team to update, organize, and publish content effortlessly.",
		bullets: [
			"Custom CMS development",
			"WordPress, Strapi, and more",
			"Content migration & training",
			"Role-based access control",
			"SEO-friendly architecture",
		],
		image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
	},
	{
		title: "SEO & Digital Marketing",
		description:
			"Grow your reach and drive results with our digital marketing expertise. We combine SEO, content, and analytics to help your business stand out online.",
		bullets: [
			"On-page & technical SEO",
			"Content strategy & creation",
			"Analytics & reporting",
			"Social media integration",
			"Conversion rate optimization",
		],
		image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
	},
];

// Replace all <svg>...</svg> in the scrolling cards section with <Image> components, assigning the SVGs from public/images/icons in order for each card.
// List of icons to use in order
const ICONS = [
	"application-development-svgrepo-com.svg",
	"mobile-app-svgrepo-com.svg",
	"application-svgrepo-com.svg",
	"application-customer-mobile-svgrepo-com.svg",
	"alert-octagon.svg"
];

function ServiceCard({
	service,
	index,
}: {
	service: typeof SERVICES[0];
	index: number;
}) {
	const isEven = index % 2 === 0;
	return (
		<motion.div
			className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""
				} items-center gap-8 py-10 md:justify-between`}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, delay: index * 0.1 }}
		>
			{/* Image */}
			<motion.div
				className="w-full md:w-1/3 flex-shrink-0"
				initial={{ x: isEven ? -60 : 60, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
			>
				<img
					src={service.image}
					alt={service.title}
					className="rounded-xl object-cover shadow-md w-full h-64 md:h-56 lg:h-64"
				/>
			</motion.div>
			{/* Text */}
			<div className="flex-1 md:max-w-[60%] w-full pl-0 md:pl-4">
				<h3 className="text-xl md:text-2xl font-semibold mb-2">
					{service.title}
				</h3>
				<p className="text-gray-600 mb-3">{service.description}</p>
				<ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
					{service.bullets.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}

export default function ServicesSection() {
	return (
		<>
			{/* 2. What We Do Section - matches the image layout */}
			<section className="py-16 bg-white dark:bg-gray-950">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row items-center gap-9">
						{/* Left: Code image */}
						<motion.div
							className="w-full md:w-1/2 flex items-center justify-center"
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<div className="rounded-md overflow-hidden w-full">
								<Image
									src="/images/services/web-design-hero.jpg"
									alt="Code editor with web development code"
									width={600}
									height={400}
									className="object-cover w-full h-[500px]"
									priority
								/>
							</div>
						</motion.div>

						{/* Right: Text content */}
						<motion.div
							className="w-full md:w-1/2"
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							{/* Section label with blue underline */}
							<h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">We Build More Than Apps</h3>
							<div className="h-1 w-28 bg-blue-800 mb-6 " />
							{/* Main heading */}
							<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Strategic Partner in <span className="text-blue-800">Mobile App Design, Development</span> and Innovatioins</h2>
							<p className="text-gray-600 dark:text-white mb-2 ">
								Mobile apps have become essential to modern business strategy,
								transforming the digital landscape and expanding market reach.
							</p>
							<p className="text-gray-600 dark:text-white mb-2">At Techbrill, we empower your business to thrive in the mobile-first world by developing flexible,
								feature-rich, and secure mobile applications that perform flawlessly across all devices. Our expert team—including seasoned IT consultants, cloud specialists,
								and security professionals—stays at the forefront of technology trends. Through close collaboration, we deliver innovative, efficient, and secure solutions tailored
								to your business goals, driving real, measurable results
							</p>

							<p className="text-gray-600 dark:text-white mb-5">
								Backed by creativity and deep technical expertise, our team builds scalable,
								responsive, and secure solutions tailored to your audience. Whether you need a business website,
								a custom web app, or a complex portal, we ensure it communicates your vision clearly and
								delivers real value—across every screen and interaction.
							</p>

							<AnimatedSection animation="fade" delay={0.6}>
								<Link href="/contact">
									<Button className="group bg-blue-800 dark: bg-blue-700 ">
										Consult with us{" "}
										<motion.div
											animate={{ x: [0, 5, 0] }}
											transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
										>
											<ArrowRight className="ml-2 h-4 w-4 " />
										</motion.div>
									</Button>
								</Link>
							</AnimatedSection>
						</motion.div>
					</div>
				</div>
			</section>



			{/* 3. Services Section - Using the custom dark theme from the image */}
			<section className="py-16 bg-white dark:bg-gray-950">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white">
							What We Do
						</h2>
						<h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Empowering your business through customn <span className="text-blue-800 font-bold">Mobile App Development</span></h2>
						<div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>
						{/* <p className="text-lg text-gray-600 dark:text-white text-center mt-2">
							We deliver complete mobile app development services designed to drive business growth, agility, and success in a rapidly evolving digital world.
						</p> */}
					</div>

					{/* Mobile Apps Advanced UI/UX Design with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Mobile Apps Advanced UI/UX Design
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Create exceptional mobile experiences that seamlessly blend aesthetics and usability. Our advanced UI/UX design approach focuses on intuitive interfaces, user behavior insights, and platform-specific guidelines to enhance every interaction.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Design systems tailored to Android, iOS & cross-platform apps</li>
								<li>Interactive prototyping & micro-interaction design</li>
								<li>Emotion-driven visuals & journey mapping</li>
								<li>Adaptive navigation & content hierarchy</li>
								<li>Accessibility-first mobile design principles</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
												alt="UI/UX Design Process"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
												alt="UI/UX Design Workshop"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>


					{/* Android App Development with carousel */}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Android App Development
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Build cutting-edge Android applications that are scalable, secure, and tailored to business needs. We create apps that align with Googles Material Design principles while optimizing performance and reliability across devices.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Native Android app development (Kotlin/Java)</li>
								<li>Seamless API & Firebase integrations</li>
								<li>Performance tuning & crash resilience</li>
								<li>Material Design compliance & dark mode support</li>
								<li>End-to-end Play Store deployment</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
												alt="Android App Development"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/web-design-hero.jpg"
												alt="Android App Tools"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>

					{/* iOS App Development with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								iOS App Development
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Deliver sophisticated and high-performance apps across the Apple ecosystem. Our iOS development services combine beautiful UI with optimized Swift and Objective-C codebases to engage users across iPhone, iPad, and beyond.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Native Swift & Objective-C development</li>
								<li>Integration with Apple SDKs (HealthKit, ARKit, CoreML, etc.)</li>
								<li>Custom UI tailored to iOS Human Interface Guidelines</li>
								<li>App Store optimization and launch management</li>
								<li>Secure app architecture & sandboxing compliance</li>
								<li>iOS App Lifecycle Management</li>
								
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="iOS App Development"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
												alt="iOS App Tools"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>


					{/* Cross-Platform App Development with carousel */}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Cross-Platform App Development
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Reach a wider audience with unified applications that maintain native performance across devices. Our cross-platform solutions, built on frameworks like Flutter and React Native, enable fast, consistent, and cost-effective mobile delivery.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Single codebase for Android & iOS</li>
								<li>Flutter, React Native & Xamarin development</li>
								<li>Device feature access with native-like performance</li>
								<li>Platform-specific UI customizations</li>
								<li>Integrated CI/CD & automated testing workflows</li>
								
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
												alt="Cross-Platform App Development"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
												alt="Cross-Platform App Design"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>

					{/* Progressive Web App Development with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Progressive Web App Development
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Transform web presence into immersive, installable, app-like experiences. Our PWA solutions deliver lightning-fast load speeds, offline access, and seamless integration with modern devices for users on the go.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Reliable performance even on unstable networks</li>
								<li>App-like features: push notifications, background sync</li>
								<li>Home screen installability & responsive layout</li>
								<li>Custom caching & lazy-loading for speed</li>
								<li>SEO-optimized architecture for wider reach</li>
								<li>Secure HTTPS-based deployment</li>
								
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="Progressive Web App Development"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/web-design-hero.jpg"
												alt="PWA Tools"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>
					{/* AI, ML & Chatbot Solutions with carousel
					<div className="flex flex-col md:flex-row-reverse items-start gap-10">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								AI, ML & Chatbot Solutions
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Harness the power of Artificial Intelligence and Machine Learning to automate,
								personalize, and elevate user experiences. Our smart AI, ML, and chatbot solutions
								optimize workflows, enhance customer engagement, and deliver data-driven insights.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>AI-powered data analysis & predictions</li>
								<li>Custom ML model development & deployment</li>
								<li>Natural Language Processing (NLP) integrations</li>
								<li>Intelligent chatbot design & automation</li>
								<li>AI-enhanced personalization for web & mobile</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
												alt="AI &ML chatbot"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="AI &ML chatbot"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div> */}

					{/* SEO & Digital Marketing with carousel
					<div className="flex flex-col md:flex-row-reverse items-start gap-10">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								SEO & Digital Marketing
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Grow your online reach and drive measurable results with our
								comprehensive digital marketing expertise. We combine strategic
								SEO, compelling content creation, and data-driven analytics to
								help your business stand out in the competitive digital landscape.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>On-page & technical SEO optimization</li>
								<li>Content strategy & high-quality creation</li>
								<li>Analytics setup & performance reporting</li>
								<li>Social media integration & management</li>
								<li>Conversion rate optimization & A/B testing</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
												alt="SEO & Digital Marketing"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="Digital Marketing Strategy"
												width={600}
												height={400}
												className="object-cover w-full h-[300px]"
											/>
										</div>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div> */}



					{/* Continue adding the rest of your services with carousels... */}
					{/* Mobile App Development, CMS & Content Solutions, SEO & Digital Marketing */}
				</div>
			</section>
			{/* Emerging Tech Solutions Section */}
			<section className="py-12 bg-blue-50 dark:bg-gray-900">
				<div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:h-[500px]">
					{/* Left: Sticky Heading & CTA */}
					<div className="w-full md:w-1/2 flex flex-col justify-center md:h-full md:sticky md:top-0 md:self-start hide-scrollbar mb-2 md:mb-0">
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
							Built to Scale, Tested to Perform, Smart Systems Engineered with End-to-End Qualitys
						</h2>
						<p className="text-gray-600 dark:text-white mb-2 ">
							At Techbrill, we believe high-impact digital experiences begin with bulletproof quality and intelligent design.
							Our <span className="text-blue-800 font-semibold">QA & Testing services</span> ensure your solutions are robust, secure, and user-ready—powered by precision-driven methodologies
							and automation that accelerate delivery without compromise.
						</p>
						<p className="text-gray-600 dark:text-white mb-2 ">
							Meanwhile, our  <span className="text-blue-800 font-semibold">Mobile App Development</span> & Integration capabilities fuse creativity, technology, and strategy to build scalable, stunning apps tailored for tomorrows users. Whether launching a product or optimizing legacy systems, we deliver results that exceed expectations—and industry-best timelines.
						</p>
					</div>
					{/* Right: Scrollable Tech Cards */}
					<div className="md:w-1/2 md:h-full md:max-h-[600px] md:overflow-y-auto pr-2 overflow-hidden hide-scrollbar flex flex-row md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pl-4 pr-4 md:pl-0 md:pr-0 snap-x snap-mandatory">
						{/* Card Example */}
						{[
							// Card data array (title, description)
							{ title: "Functional Testing", desc: "We validate every feature of your application against defined requirements to ensure a seamless and bug-free user experience." },
							{ title: "Performance Testing", desc: "Our team simulates real-world conditions to measure app stability, responsiveness, and scalability under load." },
							{ title: "Security Testing", desc: "We uncover vulnerabilities, protect sensitive data, and safeguard your software from internal and external threats." },
							{ title: "Usability Testing", desc: "Through real-user simulations, we identify design flaws and optimize user experience across all touchpoints." },
							{ title: "Compatibility Testing", desc: "Ensure your app runs flawlessly on different browsers, devices, operating systems, and network environments." },
							{ title: "API Testing", desc: "We verify your APIs for reliability, performance, and security—ensuring smooth system integrations." },
							{ title: "Mobile App Testing", desc: "From cross-device functionality to platform-specific nuances, we ensure your mobile app works wherever your users are." },
							{ title: "Load & Stress Testing", desc: "We mimic extreme user traffic to monitor system endurance, resource usage, and fault tolerance." },
							{ title: "Continuous Testing", desc: "Integrated into your CI/CD pipeline, we support constant feedback, faster iterations, and higher code confidence." },
							{ title: "UI/UX Design for Mobile Apps", desc: "Our design-first approach ensures intuitive interfaces that combine visual appeal with frictionless usability." },
							{ title: "Custom App Development", desc: "We craft tailor-made mobile apps that align perfectly with your brand identity and functional needs." },
							{ title: "Enterprise Mobile App Solutions", desc: "Scalable, secure, and enterprise-grade—our apps empower businesses to streamline operations and engage stakeholders" },
							{ title: "App Testing & Quality Assurance", desc: "Rigorous end-to-end testing ensures your app launches polished, reliable, and high-performing from Day One." },
							{ title: "App Integration with APIs", desc: "We connect your apps with essential third-party services to boost functionality and deliver a seamless experience." },
							{ title: "App Integration with Backend Systems", desc: "We synchronize your mobile front ends with existing backend ecosystems—whether cloud-native or on-premise." },
							{ title: "App Store Deployment & Optimization", desc: "From metadata optimization to compliance checks—we ensure smooth approval and discoverability on both Android & iOS stores." },
							{ title: "Post-Launch Maintenance & Support", desc: "Your success doesn't stop at launch. We offer continuous monitoring, updates, and support for optimal performance." },
						].map((card, idx) => (
							<div key={card.title} className="flex items-start gap-4 border-b border-gray-200 dark:border-gray-700 pb-8 transition-all duration-300 rounded-xl p-4 hover:bg-blue-100 dark:hover:bg-gray-800/80 cursor-pointer min-w-[280px] md:min-w-0">
								<span className="w-12 h-12 mt-1 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
									<Image src={`/images/icons/${ICONS[idx % ICONS.length]}`} alt={card.title + " icon"} width={40} height={40} />
								</span>
								<div className="flex-1">
									<h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">{card.title}</h3>
									<p className="text-gray-600 dark:text-gray-300 mt-2">{card.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}