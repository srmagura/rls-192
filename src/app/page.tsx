import Link from "next/link";
import Skeleton from "react-loading-skeleton";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <main>
      <h1>page.tsx</h1>
      <Skeleton />
      <Link href="/foo">Go to Foo</Link>
    </main>
  );
}
