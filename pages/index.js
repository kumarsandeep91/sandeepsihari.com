/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Typed from "typed.js";

import PageHeading from "../components/page-heading";
import { Skill, ProjectThumbnail, SocialIconGroup } from "../components/common";
import { SKILLS } from "../constants";
import { Button } from "../components/buttons";

export default function Home() {
	// Ref https://jsfiddle.net/mattboldt/60h9an7y/
	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				'<span class="color-primary">Full-time web developer.</span>',
				'<span class="color-secondary">Self-proclaimed master chef.</span>',
				'<span class="color-tertiary">Part-time Netflix, Prime video addict.</span>',
			],
			typeSpeed: 60,
			backSpeed: 30,
			backDelay: 1500,
			loop: true,
		};

		typed.current = new Typed(el.current, options);

		return () => {
			typed.current.destroy();
		};
	}, []);

	return (
		<>
			<Head>
				<title>Sandeep Sihari</title>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
				<meta
					name="description"
					content="Personal website of a confused developer"
				/>
			</Head>

			<main>
				<section className="global-padding flex center">
					<div className="content text-align-center">
						<h1 className="main-heading">
							Hi, I&apos;m <span className="color-highlight">Sandeep</span>
						</h1>
						<h4 className="typewriter">
							<span ref={el} />
						</h4>

						<div className="flex center gap-1 cta">
							<Button varient="secondary">See my stuff</Button>
							<Button
								link
								href="mailto:kumarsandeep91@gmail.com"
								varient="secondary-outline"
							>
								Say hello
							</Button>
						</div>
					</div>
				</section>

				<section className="global-padding flex center">
					<div id="about-me" className="content">
						{/* Left div */}
						<div>
							<PageHeading heading="About me" />
							<p className="body-text">
								Hello! My name is <span className="color-primary">Sandeep</span>{" "}
								and I enjoy creating anything that is related to computers. My
								interest in computers goes back to year 2000, when I made my
								father to buy me a{" "}
								<span className="color-secondary">
									multi-function folding calculator.
								</span>{" "}
								After that my interest grew deeper and deeper.
							</p>
							<p className="body-text">
								Fast-forward to today, and I’ve had the privilege of working at{" "}
								<span className="color-tertiary">my failed startup,</span> an{" "}
								<span className="color-highlight">ed-tech firm,</span> a{" "}
								<span className="color-primary">real estate company</span>, a{" "}
								<span className="color-secondary">fin-tech startup</span> and{" "}
								<span className="color-tertiary">
									fastest unicorn in India.
								</span>
							</p>
							<p className="body-text">
								Nowadays I took a break from full-time job and refining my
								skills at <span className="color-primary">ui.dev</span> and{" "}
								<span className="color-secondary">css-for-js.</span>
							</p>
						</div>
						{/* Right div */}
						<div className="flex center no-mobile">
							<div className="me-root">
								<div className="me-outline"></div>
								<img
									className="me"
									src="/authers/sandeep_sihari.jpeg"
									alt="sandeep sihari picture"
								/>
								<div className="me-overlay"></div>
							</div>
						</div>
					</div>
				</section>

				<section className="primary global-padding flex center">
					<div id="my-skills" className="content">
						{/* Left div */}
						<div>
							<PageHeading heading="My skills" />
							<div className="skill-container">
								{SKILLS.map((skill) => (
									<Skill key={skill} name={skill} />
								))}
							</div>
						</div>
						{/* Right Div */}
						<div className="flex center relative no-mobile">
							<img
								className="celebration"
								src="/celebration.png"
								alt="celebration"
							/>

							<div className="social">
								<SocialIconGroup />
							</div>
						</div>
					</div>
				</section>

				<section className="global-padding flex center">
					<div id="projects" className="content">
						<PageHeading center heading="What I’ve built" />
						<div className="project-root">
							<ProjectThumbnail
								url="/projects/adinfraheight.png"
								description="adinfraheight.com"
							/>
							<ProjectThumbnail
								url="/projects/adinfraheight.png"
								description="adinfraheight.com"
							/>
							<ProjectThumbnail
								url="/projects/adinfraheight.png"
								description="adinfraheight.com"
							/>
							<ProjectThumbnail
								url="/projects/adinfraheight.png"
								description="adinfraheight.com"
							/>
							<ProjectThumbnail
								url="/projects/adinfraheight.png"
								description="adinfraheight.com"
							/>
						</div>
					</div>
				</section>

				<section className="accent global-padding flex center">
					<div id="whats-next" className="content">
						<PageHeading center heading="What's next?" />

						<p className="body-text">
							Feel free to reach out if you are looking for a{" "}
							<span className="color-highlight">
								developer/consultant/friend
							</span>
							, have a{" "}
							<span className="color-highlight">question/joke/meme</span>,
							wanted to share{" "}
							<span className="color-highlight">cute pet pics</span> or just
							want to <span className="color-highlight">say hi</span>, I’ll try
							my best to get back to you!
						</p>

						<div className="flex center padding-block-2-1">
							<Button
								href="mailto:kumarsandeep91@gmail.com"
								link
								varient="secondary-outline"
							>
								Say hello
							</Button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
