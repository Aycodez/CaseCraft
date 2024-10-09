import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/70 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex text-xl z-40 font-semibold">
            case<span className="text-blue-600">craft</span>
          </Link>

          <div className="h-full flex items-center space-x-1">
            {user ? (
              <>
                {isAdmin ? (
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <Link href="/dashboard">✨ Dashboard</Link>
                  </AnimatedShinyText>
                ) : null}
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                  })}
                >
                  Log out
                </Link>

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    // className: "hidden sm:flex items-center gap-1",
                    variant: "blue",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    // className: "hidden sm:flex items-center gap-1",
                    variant: "blue",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
