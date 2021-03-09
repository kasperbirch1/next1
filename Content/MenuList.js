import Link from "next/link";
export const MenuList = ({ closeModal }) => (
  <>
    <li>
      <Link href="/">
        <a onClick={closeModal}>Forside</a>
      </Link>
    </li>
    <li>
      <Link href="/priser">
        <a onClick={closeModal}>Prisliste</a>
      </Link>
    </li>
    <li>
      <Link href="/bestil-laasesmed">
        <a onClick={closeModal}>Bestil Låsesmed</a>
      </Link>
    </li>
    <li>
      <Link href="/kontakt-os">
        <a onClick={closeModal}>Kontakt Os</a>
      </Link>
    </li>
  </>
);
