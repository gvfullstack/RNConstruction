// NO 'use client' here
import ProjectsClient from './ProjectsClient';

export const revalidate = 3600; // OK here (server)

export default function Page() {
  return <ProjectsClient />;
}
