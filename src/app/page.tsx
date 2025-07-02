import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-4 bg-gray-50">
      <h1 className="text-4xl font-bold">RN Construction</h1>
      <p className="text-lg">CL# 1015528 &nbsp; NV# 0043620</p>
      <address className="not-italic">
        Po Box 1712<br />
        Santa Rosa, CA 95402
      </address>
      <p>
        Website:{" "}
        <Link href="http://rnconstruction.com" className="text-blue-600 hover:underline">
          rnconstruction.com
        </Link>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:rnobles@rnconstruction.com" className="text-blue-600 hover:underline">
          rnobles@rnconstruction.com
        </a>
      </p>
      <p>707-541-0160</p>
      <p>707-541-0163 fax</p>
      <p>707-975-3857 mobile</p>
    </main>
  );
}
