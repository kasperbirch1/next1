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
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value.split(",")[0]);
    setCoordinates(latLng);
  };

  //   const searchOptions = {
  //     location: new google.maps.LatLng(55.6760968, 12.5683372),
  //     radius: 1000,
  //     // types: ["address"],
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`bestil-laasesmed/${address.split(",")[0]}`);
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        // searchOptions={searchOptions}
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
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
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
            <TextField {...getInputProps({ placeholder: "Type address" })} />

            <Button type="submit" variant="outlined" color="primary">
              Find Låsesmed
            </Button>
          </form>
        )}
      </PlacesAutocomplete>
    </>
  );
}
