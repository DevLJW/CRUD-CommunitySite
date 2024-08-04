import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BMJUA, BMDOHYEON } from "../../../../commons/Font/Font";
import { ISelectAuto } from "./SelectAuto.types";

export default function SelectAutoWidth(props: ISelectAuto) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          className={BMDOHYEON.className}
        >
          바로가기
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          className={BMDOHYEON.className}
        >
          <MenuItem
            value={10}
            className={BMDOHYEON.className}
            style={{ color: "black" }}
            onClick={props.onClickMoveToFreeBoard}
          >
            자유게시판
          </MenuItem>
          <MenuItem
            value={21}
            className={BMDOHYEON.className}
            onClick={props.onClickMoveToMarket}
          >
            중고마켓
          </MenuItem>
          <MenuItem
            value={22}
            className={BMDOHYEON.className}
            onChange={props.onClickMoveToannouncement}
          >
            공지사항
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
