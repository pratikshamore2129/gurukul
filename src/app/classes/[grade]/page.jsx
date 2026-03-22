import { redirect } from 'next/navigation';

export default async function LegacyClassPage({ params }) {
  await params;
  redirect('/courses');
}
