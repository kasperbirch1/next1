import Meta from "../../layout/Meta";
import { siteInfo } from "../../siteInfo";
import { Typography } from "@material-ui/core";

const Product = ({ byNavn }) => {
  console.log("🚀 ~ file: [by].js ~ line 6 ~ Product ~ byNavn", byNavn);

  const extraCityInfo = [
    {
      name: "græsted",
      extraSeo: "Her er der individuelt SEO om Græsted",
      arrivalTime: 20,
    },
    {
      name: "gentofte",
      extraSeo: "Her er der individuelt SEO om Gentofte",
      arrivalTime: 20,
    },
    {
      name: "københavn",
      extraSeo: "Her er der individuelt SEO om København",
      arrivalTime: 20,
    },
  ];

  const filterExtraCityInfo = extraCityInfo.filter(
    (company) => company.name == byNavn.toLowerCase()
  );

  const CapitalizedFirstLetter = (name) => {
    if (typeof name !== "string") return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <Meta title={`| Bestil låsesmed til ${CapitalizedFirstLetter(byNavn)}`} />
      <Typography
        variant="h1"
        align="center"
      >{`Bestil en låsesmed til ${CapitalizedFirstLetter(byNavn)}`}</Typography>
      <Typography
        variant="subtitle1"
        component="h2"
      >{`Står du akut og mangler du  en låsesmed i ${CapitalizedFirstLetter(
        byNavn
      )} ring på ${siteInfo.phone}`}</Typography>

      {filterExtraCityInfo.length > 0 ? (
        <>
          <pre>{JSON.stringify(filterExtraCityInfo, null, 2)}</pre>
          <Typography style={{ color: "red" }}>
            {filterExtraCityInfo[0].extraSeo}
          </Typography>
        </>
      ) : (
        <Typography style={{ color: "red" }}>
          Vi laver kun bestillings arbejde i {CapitalizedFirstLetter(byNavn)}
        </Typography>
      )}

      <Typography>
        Står du akut og har brug for en låsesmed, kan du ringe på{" "}
        <strong>{siteInfo.phone}</strong>, så kommer vi så hurtig vi kan til{" "}
        {CapitalizedFirstLetter(byNavn)}, og låser din dør op. Vi løser alle
        opgaver, lige fra defekt nøgle og lås, til montering og omkodning, eller
        hvis simpelthen bare har fået smækket dig ude.
      </Typography>
      <Typography>
        Er uheldet sket, og du har smækket dig ude af din bil, eller er din lås
        eller nøgle gået i stykker. Ring blot til vores døgntelefon, så kommer
        vi til dig - om det er på din adresse eller andre steder i{" "}
        {CapitalizedFirstLetter(byNavn)} inden for 30 minutter.
      </Typography>
      <Typography>
        PB Låsesmed yder altid en professionel service, og bruger kun godkendt
        udstyr. Vi skader derfor ikke din lås, og du vil kunne bruge den samme
        nøgle som før. Har du derimod mistet din nøgle, kan vi borer låsen og
        udskifte den på stedet.
      </Typography>
      <Typography>
        Vi har mere end 20 års erfaring som låsesmed. Vi står altid til rådighed
        hvis du skulle have spørgsmål angående udskiftning, og reparation af
        låse - vi guider dig bedst muligt, så dine spørgsmål bliver besvaret og
        behov bliver opfyldt
      </Typography>
    </>
  );
};
Product.getInitialProps = async (ctx) => {
  return {
    byNavn: ctx.query.by,
  };
};
export default Product;
