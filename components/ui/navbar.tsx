import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className="w-full py-4 bg-white border border-b">
      <div className="container">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-xl tracking-tight">Chat AI</h4>

          <SignedIn>
            <UserButton userProfileMode="navigation" afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
