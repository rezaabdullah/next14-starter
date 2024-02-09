"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // CSR navigation
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(pathName);

  const q = searchParams.get("q");
  console.log(q);

  const handleClient = () => {
    console.log("Clicked");
    // router.push("/");
    router.back();
  }
  
  return (
    <div>
      <Link href={"/"} prefetch={false}>Click here!</Link>
      <button onClick={handleClient}>Write & Redirect</button>
    </div>
  )
}

export default NavigationTestPage;