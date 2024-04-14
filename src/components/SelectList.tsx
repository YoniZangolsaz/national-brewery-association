import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SearchOption } from "../types/searchOptions.type";

type SelectListProps = {
  inputLabel: string;
  array: SearchOption[];
  onChange: (e: any) => void;
  value?: SearchOption;
};

const SelectList = ({
  inputLabel,
  array,
  onChange,
  value,
}: SelectListProps) => {
  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        value={value || ""}
        label={inputLabel}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {array.map((item: SearchOption) => (
          <MenuItem key={item.name} value={item as any}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;
