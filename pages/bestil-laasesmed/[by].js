import Meta from "../../layout/Meta";
import { siteInfo } from "../../siteInfo";
import { Typography } from "@material-ui/core";

const Product = ({ city }) => {
  console.log("🚀 ~ file: [by].js ~ line 6 ~ Product ~ city", city);

  const ChangeCharacterAndCapitalizedFirstLetter = (name) => {
    // if (typeof name !== "string") return "";
    const adSpace = name.replace("-", " ");
    const res = adSpace.replace(/ae/g, "æ");
    const res2 = res.replace(/oe/g, "ø");
    const res3 = res2.replace(/aa/g, "å");
    return res3.charAt(0).toUpperCase() + res3.slice(1);
  };

  return (
    <>
      <Meta
        title={`| Bestil låsesmed til ${ChangeCharacterAndCapitalizedFirstLetter(
          city.name
        )}`}
      />
      <article className="wrapper">
        <Typography
          variant="h1"
          align="center"
        >{`Bestil en låsesmed til ${ChangeCharacterAndCapitalizedFirstLetter(
          city.name
        )}`}</Typography>
        {city?.extraSeo ? (
          <>
            <div style={{ border: "1px solid red" }}>
              <Typography style={{ color: "red" }}>{city.extraSeo}</Typography>
            </div>

            <Typography
              variant="subtitle1"
              component="h2"
            >{`Står du akut og mangler du  en låsesmed i ${ChangeCharacterAndCapitalizedFirstLetter(
              city.name
            )} ring på ${siteInfo.phone}`}</Typography>

            <Typography>
              Står du akut og har brug for en låsesmed, kan du ringe på{" "}
              <strong>{siteInfo.phone}</strong>, så kommer vi så hurtig vi kan
              til {ChangeCharacterAndCapitalizedFirstLetter(city.name)}, og
              låser din dør op. Vi løser alle opgaver, lige fra defekt nøgle og
              lås, til montering og omkodning, eller hvis simpelthen bare har
              fået smækket dig ude.
            </Typography>

            <Typography>
              Er uheldet sket, og du har smækket dig ude af din bil, eller er
              din lås eller nøgle gået i stykker. Ring blot til vores
              døgntelefon, så kommer vi til dig - om det er på din adresse eller
              andre steder i{" "}
              {ChangeCharacterAndCapitalizedFirstLetter(city.name)} inden for 30
              minutter.
            </Typography>
          </>
        ) : (
          <Typography style={{ color: "red" }}>
            Vi laver kun bestillings arbejde i{" "}
            {ChangeCharacterAndCapitalizedFirstLetter(city.name)}
          </Typography>
        )}
        <Typography>
          PB Låsesmed yder altid en professionel service, og bruger kun godkendt
          udstyr. Vi skader derfor ikke din lås, og du vil kunne bruge den samme
          nøgle som før. Har du derimod mistet din nøgle, kan vi borer låsen og
          udskifte den på stedet.
        </Typography>
        <Typography>
          Vi har mere end 20 års erfaring som låsesmed. Vi står altid til
          rådighed hvis du skulle have spørgsmål angående udskiftning, og
          reparation af låse - vi guider dig bedst muligt, så dine spørgsmål
          bliver besvaret og behov bliver opfyldt
        </Typography>
      </article>
      {/* <pre>{JSON.stringify(city, null, 2)}</pre> */}
    </>
  );
};
Product.getInitialProps = async (ctx) => {
  // const res = await fetch(`http://localhost:3000/api/byer/${ctx.query.by}`);

  // const res = await fetch(
  //   `https://next1-j55blld2z.vercel.app/api/byer/${ctx.query.by}`
  // );

  const res = await fetch(
    `https://stupefied-hodgkin-d7ec40.netlify.app/api/byer/${ctx.query.by}`
  );

  const json = await res.json();

  return {
    city: json,
  };
};
export default Product;
