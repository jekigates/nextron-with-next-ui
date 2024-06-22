import React from "react";
import Head from "next/head";
import {
    Link,
    Snippet,
    Code,
    button as buttonStyles,
    Image,
    Button
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function HomePage() {
    return (
        <DefaultLayout>
            <Head>
                <title>Home - Nextron (with-next-ui)</title>
            </Head>

            <section className="flex flex-col items-center justify-center gap-4">
                <Image
                    width={240}
                    src="/images/logo.png"
                    alt="NextUI Album Cover"
                />

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow"
                        })}
                        href={siteConfig.links.electron}
                    >
                        ⚡ Electron ⚡
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "secondary",
                            radius: "full",
                            variant: "shadow"
                        })}
                        href={siteConfig.links.nextjs}
                    >
                        NextJS
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "success",
                            radius: "full",
                            variant: "shadow"
                        })}
                        href={siteConfig.links.tailwindcss}
                    >
                        Tailwind CSS
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "warning",
                            radius: "full",
                            variant: "shadow"
                        })}
                        href={siteConfig.links.nextui}
                    >
                        NextUI
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "danger",
                            radius: "full",
                            variant: "shadow"
                        })}
                        href={siteConfig.links.typescript}
                    >
                        Typescript
                    </Link>
                </div>

                <div className="mt-8">
                    <Button
                        as={Link}
                        href="/about"
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    >
                        Go To About Page
                    </Button>
                </div>
            </section>
        </DefaultLayout>
    );
}
