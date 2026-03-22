import { redirect } from 'next/navigation';

export async function generateMetadata({ params }) {
  await params;
  return {
    title: 'Courses | Gurukul Eduworld',
    description: 'Explore Gurukul Eduworld courses for CBSE, State Board, ICSE, and IGCSE from 8th to 12th.',
  };
}

export default async function CourseRedirectPage({ params }) {
  await params;
  redirect('/courses');
}
