import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import Band from "./Band";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  const bandList = bands.map((band) => {
      return <Band key={band.id} band={band} />;
  })

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bandList}
      </ul>
    </div>
  );
}

export default BandsContainer;
