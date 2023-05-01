import Link from 'next/link';

const LINKS = [{ name: 'accordion', title: 'Accordion', url: '/accordion' }];

export default function Home() {
  return (
    <div>
      <ul>
        {LINKS.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
