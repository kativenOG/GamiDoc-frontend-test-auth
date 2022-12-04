import Swal from "sweetalert2"
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";

export default function Modality({
  modality,
  setModality,
  modalityDescription,
  setModalityDescription,
  selectObj1,
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#modality")
          }} />
        </IconButton>

        Type of Modality
      </label>

      <h2 className="mt-4 block text-gray-700  mb-2 ">
        This component is dedicated to the definition of the main modality included in the gamification software. Despite the scarcity of evidence on cooperative gamification, the few results in the literature show differences in cooperative and competitive modalities of gamification and that different game elements support the different modalities <span className="underline text-blue-400">(Chen & Pu, 2014; Goh & Lee, 2011; T. Y. Lee et al., 2013; Massung, Coyle,
        Cater, Jay, & Preist, 2013; Mekler, Br ̈uhlmann, Opwis, & Tuch, 2013; Morschheuser, Maedche, & Walter, 2017)</span>. In the identification of different gamification modalities, we decided to follow the distinction made by Morschheuser and colleagues <span className="underline text-blue-400">(Morschheuser, Maedche, & Walter, 2017)</span> between <bold>(1) individual</bold>, <bold>(2) cooperative</bold>, <bold>(3) competitive</bold>, and <bold>(4) cooperative-competitive</bold> gamification features <span className="underline text-blue-400">(see also Liu, Li, & Santhanam (2013)</span>, 
        with the last one referring to those elements which support users’ cooperation with their ingroup (i.e., team mates), and competition with the outgroup (i.e., team competition). 
        Therefore, based on the main modality included in the design, each gamified software will be divided into the same categories. 
        Our definition of gamification modality does not include emergent behaviors (i.e., emergent cooperation between opponents to hinder the first user on the leaderboard) or behaviors to be encouraged outside of the software (i.e., cooperation as behavior to be encouraged outside of the software) since it does not lead to a univocal modality (i.e., cooperation in real life can be reached through cooperation or competition as well in the gamified software).
      </h2>
      <div className="mb-5">
        <FormControl fullWidth>
          <InputLabel>Modality</InputLabel>
          <Select
            className="relative w-full shadow-md "
            single
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            input={<OutlinedInput label="Name" />}
          >
            {selectObj1.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TextField
        className="w-full border  shadow-md "
        id="Modality"
        type="text"
        multiline
        rows={3}
        placeholder="Modality Description"
        value={modalityDescription}
        onChange={(e) => setModalityDescription(e.target.value)}
      />
    </div>
  );
}
