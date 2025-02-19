"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";
import { usePathname } from "next/navigation";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  const pathname = usePathname();
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {pathname === "/home" ? (
          children 
        ) : (
          <Authenticated>
            {children} 
          </Authenticated>
        )}
        {pathname === "/" &&
        <AuthLoading>
          <Loading />
        </AuthLoading>
        }
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
