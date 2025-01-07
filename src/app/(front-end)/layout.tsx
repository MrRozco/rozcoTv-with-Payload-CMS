import Header from '@/Header/header';
import FooterComponent from '@/Footer/Footer';
import './globals.css';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const payload = await getPayload({ config: await configPromise });

  const topNav = await payload.findGlobal({ slug: 'nav' });
  const footer = await payload.findGlobal({ slug: 'footer' });

  return (
    <html lang="en">
      <body className='bg-black'>
        <Header header={topNav} />
        {children}
        <FooterComponent footer={footer}/>
      </body>
    </html>
  );
}