/*global google*/

import React from "react";
import { useRouter } from "next/router";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { TextField, Typography, Button } from "@material-ui/core";

export default function App() {
  const router = useRouter();
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    console.log("🚀 ~ file: index.js ~ line 21 ~ handleSelect ~ value", value);
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value.split(",")[0]);
    setCoordinates(latLng);
  };

  const searchOptions = {
    componentRestrictions: { country: ["dk"] },
    // types: ["address"],
    // location: new google.maps.LatLng(56.0652, 12.2856),
    // radius: 100,
  };

  function kbSlug(string) {
    const rmSpace = string.replace(" ", "-");
    const res = rmSpace.replace(/Æ/g, "Ae");
    const res2 = res.replace(/ø/g, "oe");
    const res3 = res2.replace(/å/g, "aa");
    return res3;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`bestil-laasesmed/${kbSlug(address.split(",")[0])}`);
  };

  return (
    <>
      <PlacesAutocomplete
        highlightFirstSuggestion={true}
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: ".5rem", margin: "1rem 0" }}
          >
            {/* <pre>{JSON.stringify(address, null, 2)}</pre> */}
            {/* <pre>Latitude: {coordinates.lat}</pre> */}
            {/* <pre>Longitude: {coordinates.lng}</pre> */}

            <div>
              {loading ? <div>...søger</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  color: suggestion.active ? "#0070f3" : "#000",
                };

                return (
                  <Typography
                    key={suggestion.placeId}
                    variant="body2"
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </Typography>
                );
              })}
            </div>
            <TextField
              {...getInputProps({
                label: "Bestil Låsesmed til",
                placeholder: "Skriv by eller sted her.",
              })}
            />
            <Button type="submit" variant="outlined" color="primary">
              Find Låsesmed
            </Button>
          </form>
        )}
      </PlacesAutocomplete>
    </>
  );
}
