import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a media company',
};

export default async function About() {
  return (
    <div className='mx-10'>
      <h1 className='text-4xl font-medium mt-4'>About Us</h1>
      <p>we are a social media company that brings enemies together</p>
    </div>
  );
}
