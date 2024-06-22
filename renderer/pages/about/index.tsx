import { UserIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Button, Image, Link } from "@nextui-org/react";
import Head from "next/head";

export default function AboutPage() {
    return (
        <DefaultLayout>
            <Head>
                <title>About - Nextron (with-next-ui)</title>
            </Head>

            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <Image
                    isBlurred
                    width={240}
                    src="/images/cat.jpeg"
                    alt="NextUI Album Cover"
                />

                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({ color: "violet" })}>About&nbsp;</h1>
                    <br />
                    <h4 className={subtitle({ class: "mt-4" })}>
                        This Nextron + Shadcn/UI template was crafted with love{" "}
                        <span>&#10084;</span> by{" "}
                        <Link
                            isExternal
                            href={siteConfig.links.github}
                            className={subtitle({
                                class: "inline text-primary font-bold"
                            })}
                        >
                            Jeki Gates
                        </Link>
                    </h4>
                </div>

                <div className="flex gap-4 items-center">
                    <Button
                        href="/home"
                        as={Link}
                        color="secondary"
                        variant="bordered"
                        startContent={<UserIcon />}
                    >
                        Back To Home
                    </Button>

                    <Button
                        isExternal={true}
                        href={siteConfig.links.githubrepository}
                        as={Link}
                        color="success"
                        showAnchorIcon
                    >
                        Download Template
                    </Button>
                </div>
            </section>
        </DefaultLayout>
    );
}
