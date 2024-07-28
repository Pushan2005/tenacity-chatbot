import ChatbotBox from "./chatbot-box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <div className="container">
                <section>
                    <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] pt-5 px-10">
                        Welcome back! Here are some recomendations -
                    </h1>
                    <div className="grid grid-cols-4 gap-10 p-10">
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Programming - Core
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Building Applications with Python</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (1253)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Web Development
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Getting Started with Next.js</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.2 (1233)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>Career</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>What is DevRel? By A DevReL</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>Marketing</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Grow your skills Fashion Marketing</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
                <section className="text-gray-600 body-font bg-neutral-900 m-10">
                    <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                                Featured Event
                            </h1>
                            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                                Short description here, Short description here
                                Short description here Short description here
                                Short description here Short description here.
                            </p>
                            <div className="flex justify-center">
                                <Button>Register Now</Button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] pt-5 px-10">
                        Popular Courses
                    </h1>
                    <div className="grid grid-cols-4 gap-10 p-10">
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Graphic Design
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Digital Poster Design : Best Practices</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (1253)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Graphic Design
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Create Emotional and Trendy Typography</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.2 (1233)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Graphic Design
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Create Vector Illustrations for Beginner</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>
                                    Graphic Design
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>How to Design a Creative Book Cover</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
                <section>
                    <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] pt-5 px-10">
                        Trending Courses
                    </h1>
                    <div className="grid grid-cols-4 gap-10 p-10">
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>UI/UX Design</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>UI Design, a User-Centered Approach</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (1253)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>UI/UX Design</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Pick Awesome Color Palette for Your App</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.2 (1233)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>UI/UX Design</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Principles of Great UI Design System</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s"
                                    alt="profile"
                                    height={200}
                                    width={200}
                                />
                                <CardDescription>UI/UX Design</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Prototype Your First Mobile Application</p>
                            </CardContent>
                            <CardFooter>
                                <p>⭐4.5 (123)</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
