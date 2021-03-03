import Link from "next/link";
export const MenuList = () => (
  <>
    <li>
      <Link href="/">Forside</Link>
    </li>
    <li>
      <Link href="/priser">Prisliste</Link>
    </li>
    <li>
      <Link href="/bestil-laasesmed">Bestil Låsesmed</Link>
    </li>
    <li>
      <Link href="/kontakt-os">Kontakt Os</Link>
    </li>
  </>
);
